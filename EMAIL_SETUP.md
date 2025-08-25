# Email Setup Guide for Automera Systems Contact Form

## Overview

The contact form now uses Nodemailer to send emails directly to your inbox. This guide will help you set up the email service.

## Step 1: Choose Your Email Service

### Option A: Gmail (Recommended for testing)

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an "App Password":
   - Go to Security → App passwords
   - Select "Mail" and your device
   - Copy the generated password

### Option B: Outlook/Hotmail

1. Use your regular email and password
2. May need to enable "Less secure app access"

### Option C: Custom SMTP Server

1. Get SMTP details from your hosting provider
2. Update the environment variables accordingly

## Step 2: Configure Environment Variables

Edit the `.env.local` file in your project root:

```bash
# Email Service Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@automerasystems.com
EMAIL_TO=issa@automerasystems.com
```

### For Gmail:

```bash
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password
```

### For Outlook:

```bash
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### For Custom SMTP:

```bash
EMAIL_SERVICE=smtp
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
```

## Step 3: Test the Setup

1. Restart your development server
2. Fill out the contact form
3. Submit the form
4. Check your email inbox
5. Check the terminal for success/error messages

## Troubleshooting

### Common Issues:

1. **Authentication Failed**

   - Check your email and password
   - For Gmail, ensure you're using an App Password, not your regular password
   - For Outlook, ensure "Less secure app access" is enabled

2. **Connection Timeout**

   - Check your internet connection
   - Verify the email service settings
   - Some networks block SMTP ports

3. **Email Not Received**
   - Check spam/junk folder
   - Verify the recipient email address
   - Check terminal logs for errors

### Gmail Specific:

- Must use App Password, not regular password
- 2-Factor Authentication must be enabled
- App Password is 16 characters long

### Security Notes:

- Never commit `.env.local` to version control
- Use App Passwords instead of regular passwords
- Consider using environment variables in production

## Production Deployment

For production, consider using:

- SendGrid
- Mailgun
- AWS SES
- Or your hosting provider's email service

These services are more reliable and have better deliverability than SMTP.

## Support

If you encounter issues:

1. Check the terminal logs
2. Verify environment variables
3. Test with a simple email client first
4. Check your email service's documentation
