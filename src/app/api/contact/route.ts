import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Create SES client
const sesClient = new SESClient({
  region: process.env.SES_REGION || "eu-north-1",
  credentials: process.env.SES_ACCESS_KEY_ID && process.env.SES_SECRET_ACCESS_KEY
    ? {
        accessKeyId: process.env.SES_ACCESS_KEY_ID,
        secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
      }
    : undefined, // Will use IAM role if no explicit credentials
});

// HTML escape function
function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;', "'":'&#39;' } as any)[c]
  );
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body - handle both formats
    const body = await request.json();
    
    // Extract data - support both old format (with formData) and new format (direct fields)
    const formData = body.formData || body;
    const { name, email, company, phone, businessCountry, message } = formData;

    // Debug logging
    console.log("Environment variables check:");
    console.log("SES_REGION:", process.env.SES_REGION);
    console.log("SES_FROM_EMAIL:", process.env.SES_FROM_EMAIL);
    console.log("SES_TO_EMAIL:", process.env.SES_TO_EMAIL);
    console.log("SES_FROM:", process.env.SES_FROM);
    console.log("SES_TO:", process.env.SES_TO);
    console.log("SES_ACCESS_KEY_ID:", process.env.SES_ACCESS_KEY_ID ? "SET" : "NOT SET");
    console.log("SES_SECRET_ACCESS_KEY:", process.env.SES_SECRET_ACCESS_KEY ? "SET" : "NOT SET");

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields: name, email, and message are required" }, { status: 400 });
    }

    // Check if SES is configured
    if (!process.env.SES_REGION) {
      console.error("Missing SES configuration: SES_REGION not set");
      return NextResponse.json(
        {
          success: false,
          message: "Email service not configured. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

    // Create email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #151721; border-bottom: 3px solid #c3e5d9; padding-bottom: 10px;">
          New Contact Form Submission - Automera Systems
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #151721; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #c3e5d9;">${escapeHtml(email)}</a></p>
          <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Business Country:</strong> ${escapeHtml(businessCountry || "Not provided")}</p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #151721; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
        </div>
        
        <hr style="border: none; border-top: 2px solid #e9ecef; margin: 30px 0;">
        <p style="color: #6c757d; font-size: 14px; text-align: center;">
          <em>This email was sent from the Automera Systems contact form.</em>
        </p>
      </div>
    `;

    const textContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Phone: ${phone || "Not provided"}
Business Country: ${businessCountry || "Not provided"}

Message:
${message}

---
This email was sent from the Automera Systems contact form.
    `;

    // Prepare email parameters
    const emailParams = {
      Source: process.env.SES_FROM_EMAIL || process.env.SES_FROM || "issa.alsabeh@gmail.com",
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL || process.env.SES_TO || "issa@automerasystems.com"],
      },
      Message: {
        Subject: {
          Data: `Automera Contact: ${name}`,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: htmlContent,
            Charset: "UTF-8",
          },
          Text: {
            Data: textContent,
            Charset: "UTF-8",
          },
        },
      },
      ReplyToAddresses: [email], // So you can reply directly to the sender
    };

    // Send email using SES
    const command = new SendEmailCommand(emailParams);
    const result = await sesClient.send(command);

    console.log("Email sent successfully:", result.MessageId);
    console.log("Contact form submission received:");
    console.log("To:", process.env.SES_TO_EMAIL || process.env.SES_TO || "issa@automerasystems.com");
    console.log("From:", process.env.SES_FROM_EMAIL || process.env.SES_FROM || "issa.alsabeh@gmail.com");
    console.log("Form Data:", { name, email, company, phone, businessCountry, message });

    return NextResponse.json({
      success: true,
      ok: true, // For compatibility with both formats
      message: "Form submitted successfully. Email has been sent.",
      messageId: result.MessageId,
    });
  } catch (error) {
    console.error("Error processing contact form:", error);

    // Provide more specific error messages
    let errorMessage = "Failed to process form submission";

    if (error instanceof Error) {
      if (error.message.includes("CredentialsProviderError")) {
        errorMessage = "AWS credentials not configured. Please check your AWS setup.";
      } else if (error.message.includes("InvalidClientTokenId")) {
        errorMessage = "Invalid AWS credentials. Please check your access keys.";
      } else if (error.message.includes("SignatureDoesNotMatch")) {
        errorMessage = "Invalid AWS secret access key. Please check your credentials.";
      } else if (error.message.includes("InvalidUserPoolConfiguration")) {
        errorMessage = "AWS SES configuration is invalid. Please check your AWS credentials.";
      } else if (error.message.includes("MessageRejected")) {
        errorMessage = "Email was rejected. Please check the sender email address is verified in AWS SES.";
      } else if (error.message.includes("MailFromDomainNotVerified")) {
        errorMessage = "Sender domain is not verified in AWS SES.";
      } else if (error.message.includes("ConfigurationSetDoesNotExist")) {
        errorMessage = "AWS SES configuration set does not exist.";
      } else if (error.message.includes("AccessDenied")) {
        errorMessage = "Access denied. Please check your AWS permissions for SES.";
      }
    }

    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        message: errorMessage 
      },
      { status: 500 }
    );
  }
}