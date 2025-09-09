# IAM Role Setup for AWS SES - Automera Systems

## Overview

This guide will help you set up an IAM role for your AWS-hosted contact form to use SES without storing access keys.

## Step 1: Create IAM Role

### 1.1 Navigate to IAM Roles

1. Go to [AWS IAM Console](https://console.aws.amazon.com/iam/)
2. Click "Roles" in the left sidebar
3. Click "Create role"

### 1.2 Select Trusted Entity

1. **Select "AWS service"**
2. **Choose "EC2"** (or the service where your app is hosted)
3. Click "Next"

### 1.3 Attach Permissions

1. **Search for "SES"**
2. **Select "AmazonSESFullAccess"**
3. Click "Next"

### 1.4 Configure Role

1. **Role name:** `AutomeraSESRole`
2. **Description:** `IAM role for Automera Systems contact form to send emails via SES`
3. Click "Create role"

## Step 2: Attach Role to Your Service

### For EC2 (if using EC2):

1. Go to EC2 Console
2. Select your instance
3. Actions → Security → Modify IAM Role
4. Select `AutomeraSESRole`
5. Save

### For Lambda (if using Lambda):

1. Go to Lambda Console
2. Select your function
3. Configuration → Permissions
4. Click on the execution role
5. Add the `AutomeraSESRole` policy

### For ECS (if using ECS):

1. Go to ECS Console
2. Select your task definition
3. Update the task role to `AutomeraSESRole`

## Step 3: Verify Email Addresses in SES

1. Go to [AWS SES Console](https://console.aws.amazon.com/ses/)
2. Select your region (e.g., us-east-1)
3. Click "Verified identities" → "Create identity"
4. Verify both emails:
   - `noreply@automerasystems.com`
   - `issa@automerasystems.com`

## Step 4: Update Environment Variables

Your `.env.local` should now only contain:

```bash
AWS_REGION=us-east-1
AWS_SES_FROM_EMAIL=noreply@automerasystems.com
AWS_SES_TO_EMAIL=issa@automerasystems.com
```

## Step 5: Test the Configuration

1. Restart your application
2. Test the contact form
3. Check your email inbox

## Benefits of IAM Roles

- ✅ More secure (no credentials to manage)
- ✅ Automatic credential rotation
- ✅ No risk of exposed access keys
- ✅ Follows AWS best practices
- ✅ Easier to manage permissions

## Troubleshooting

### Common Issues:

1. **Access Denied**: Ensure the role is attached to your service
2. **Email Not Verified**: Verify both sender and recipient emails in SES
3. **Region Mismatch**: Ensure AWS_REGION matches your SES region

### Verification Steps:

1. Check IAM role is attached to your service
2. Verify emails in SES console
3. Check CloudWatch logs for detailed errors
4. Ensure role has `AmazonSESFullAccess` policy
