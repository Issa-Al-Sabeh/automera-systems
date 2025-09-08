# Email Setup Guide for Automera Systems Contact Form

## Overview

The contact form now uses AWS SES (Simple Email Service) to send emails directly to your inbox. This guide will help you set up AWS SES for reliable email delivery.

## Step 1: Set Up AWS SES

### 1.1 Create AWS Account and Access Keys

1. Go to [AWS Console](https://aws.amazon.com/console/)
2. Create an account or sign in
3. Navigate to IAM (Identity and Access Management)
4. Create a new user with programmatic access
5. Attach the `AmazonSESFullAccess` policy to the user
6. Save the Access Key ID and Secret Access Key

### 1.2 Verify Email Addresses in SES

1. Go to [AWS SES Console](https://console.aws.amazon.com/ses/)
2. Select your preferred region (e.g., us-east-1, us-west-2)
3. In the "Verified identities" section, click "Create identity"
4. Choose "Email address" and enter your sender email (e.g., noreply@automerasystems.com)
5. Click "Create identity"
6. Check your email and click the verification link
7. Repeat for your recipient email (e.g., issa@automerasystems.com)

### 1.3 Request Production Access (Optional)

- In the SES console, go to "Account dashboard"
- If you're in sandbox mode, click "Request production access"
- Fill out the form to request higher sending limits

## Step 2: Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# AWS SES Configuration
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=us-east-1

# Email Configuration
AWS_SES_FROM_EMAIL=noreply@automerasystems.com
AWS_SES_TO_EMAIL=issa@automerasystems.com
```

### Environment Variables Explained:

- `AWS_ACCESS_KEY_ID`: Your AWS access key ID
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key
- `AWS_REGION`: AWS region where your SES is configured (e.g., us-east-1)
- `AWS_SES_FROM_EMAIL`: Verified sender email address
- `AWS_SES_TO_EMAIL`: Recipient email address for contact form submissions

## Step 3: Test the Setup

1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Submit the form
4. Check your email inbox (and spam folder)
5. Check the terminal for success/error messages

## Troubleshooting

### Common Issues:

1. **Authentication Failed**

   - Verify your AWS credentials are correct
   - Check that the IAM user has SES permissions
   - Ensure the AWS region is correct

2. **MessageRejected Error**

   - Verify that the sender email address is verified in AWS SES
   - Check that you're not in sandbox mode (if you need to send to unverified emails)
   - Ensure the recipient email is verified (in sandbox mode)

3. **AccessDenied Error**

   - Check that your IAM user has the `AmazonSESFullAccess` policy
   - Verify the AWS credentials are correct

4. **Email Not Received**
   - Check spam/junk folder
   - Verify the recipient email address is correct
   - Check terminal logs for specific error messages
   - Ensure both sender and recipient emails are verified in SES

### AWS SES Specific:

- **Sandbox Mode**: In sandbox mode, you can only send emails to verified addresses
- **Production Access**: Request production access to send to any email address
- **Sending Limits**: Check your sending limits in the SES console
- **Bounce/Complaint Handling**: Set up bounce and complaint handling for better deliverability

### Security Notes:

- Never commit `.env.local` to version control
- Use IAM roles instead of access keys when possible in production
- Regularly rotate your AWS access keys
- Monitor your AWS usage and costs

## Production Deployment

For production deployment:

1. **Use IAM Roles**: Instead of access keys, use IAM roles for EC2/Lambda
2. **Environment Variables**: Set environment variables in your hosting platform
3. **Monitoring**: Set up CloudWatch alarms for SES metrics
4. **Bounce Handling**: Configure bounce and complaint handling
5. **Rate Limiting**: Implement rate limiting to prevent abuse

## Cost Considerations

- AWS SES is very cost-effective: $0.10 per 1,000 emails
- First 62,000 emails per month are free (if sent from EC2)
- No monthly fees, pay only for what you use

## Support

If you encounter issues:

1. Check the terminal logs for specific error messages
2. Verify all environment variables are set correctly
3. Check AWS SES console for verification status
4. Review AWS CloudWatch logs for detailed error information
5. Consult AWS SES documentation for troubleshooting guides
