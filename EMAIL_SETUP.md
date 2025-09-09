# Email Setup Guide for Automera Systems Contact Form

## Overview

The contact form now uses AWS SES (Simple Email Service) to send emails directly to your inbox. This guide will help you set up AWS SES for reliable email delivery.

## 🌍 **EU-North-1 Configuration:**

### **Step 1: Update Your Environment Variables**

You'll need to change the region in your Amplify environment variables:

1. **Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)**
2. **Select your app**
3. **Go to "App settings" → "Environment variables"**
4. **Add/Update these variables:**
   ```
   AWS_REGION = eu-north-1
   AWS_SES_FROM_EMAIL = noreply@automerasystems.com
   AWS_SES_TO_EMAIL = issa@automerasystems.com
   ```

### **Step 2: Verify Emails in EU-North-1**

1. **Go to [AWS SES Console](https://console.aws.amazon.com/ses/)**
2. **Make sure the region is set to "Europe (Stockholm) eu-north-1"** (top-right corner)
3. **Click "Verified identities" → "Create identity"**
4. **Verify both emails:**
   - `noreply@automerasystems.com`
   - `issa@automerasystems.com`

### **Step 3: Update Your Local Environment File**

Update your `.env.local` file to:

```bash
AWS_REGION=eu-north-1
AWS_SES_FROM_EMAIL=noreply@automerasystems.com
AWS_SES_TO_EMAIL=issa@automerasystems.com
```

## ✅ **Benefits of EU-North-1:**

- ✅ **Better performance** for European users
- ✅ **GDPR compliance** - data stays in EU
- ✅ **Lower latency** for European visitors
- ✅ **Full SES features** available

## **Next Steps:**

1. **Update the region in Amplify environment variables**
2. **Verify emails in the EU-North-1 region**
3. **Redeploy your app**
4. **Test the contact form**

**Start with updating the environment variables in Amplify, then verify the emails in the EU-North-1 region!**
