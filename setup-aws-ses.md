# Quick AWS SES Setup Guide

## Prerequisites

- AWS Account
- Domain or email addresses to verify

## Step-by-Step Setup

### 1. Create AWS IAM User

1. Go to [AWS IAM Console](https://console.aws.amazon.com/iam/)
2. Click "Users" → "Create user"
3. Username: `automera-ses-user`
4. Select "Programmatic access"
5. Attach policy: `AmazonSESFullAccess`
6. **Save the Access Key ID and Secret Access Key** (you'll need these)

### 2. Configure AWS SES

1. Go to [AWS SES Console](https://console.aws.amazon.com/ses/)
2. Select your region (e.g., us-east-1)
3. Click "Verified identities" → "Create identity"
4. Choose "Email address"
5. Enter: `noreply@automerasystems.com`
6. Click "Create identity"
7. Check your email and click the verification link
8. Repeat for: `issa@automerasystems.com`

### 3. Create Environment File

Create `.env.local` in your project root:

```bash
# Copy from env.example and fill in your values
AWS_ACCESS_KEY_ID=your_actual_access_key_id
AWS_SECRET_ACCESS_KEY=your_actual_secret_access_key
AWS_REGION=us-east-1
AWS_SES_FROM_EMAIL=noreply@automerasystems.com
AWS_SES_TO_EMAIL=issa@automerasystems.com
```

### 4. Test the Setup

1. Run: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your email inbox

## Troubleshooting

- Check terminal logs for error messages
- Verify both emails are verified in AWS SES
- Ensure IAM user has correct permissions
- Check AWS region matches your SES setup

## Next Steps

- Request production access if you need to send to unverified emails
- Set up bounce/complaint handling
- Monitor usage in AWS CloudWatch
