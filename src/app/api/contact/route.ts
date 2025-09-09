import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export async function POST(request: NextRequest) {
  try {
    const { to, subject, formData } = await request.json();

    // Debug logging
    console.log("Environment variables check:");
    console.log("SES_REGION:", process.env.SES_REGION);
    console.log("SES_FROM_EMAIL:", process.env.SES_FROM_EMAIL);
    console.log("SES_TO_EMAIL:", process.env.SES_TO_EMAIL);
    console.log("SES_ACCESS_KEY_ID:", process.env.SES_ACCESS_KEY_ID ? "SET" : "NOT SET");
    console.log("SES_SECRET_ACCESS_KEY:", process.env.SES_SECRET_ACCESS_KEY ? "SET" : "NOT SET");

    // Check if required environment variables are set
    if (!process.env.SES_REGION) {
      console.error("Missing SES configuration: SES_REGION not set");
      return NextResponse.json(
        {
          success: false,
          message:
            "Email service not configured. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

    // Create SES client with credentials
    const sesClient = new SESClient({
      region: process.env.SES_REGION || "eu-north-1",
      credentials: {
        accessKeyId: process.env.SES_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.SES_SECRET_ACCESS_KEY || "",
      },
    });

    // Email content
    const textContent = `
New consultation request received:

Full Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Business Country: ${formData.businessCountry}
Message: ${formData.message}

---
This email was sent from the Automera Systems contact form.
    `;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #151721; border-bottom: 3px solid #c3e5d9; padding-bottom: 10px;">
          New Consultation Request - Automera Systems
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #151721; margin-top: 0;">Contact Information</h3>
          <p><strong>Full Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #c3e5d9;">${formData.email}</a></p>
          <p><strong>Company:</strong> ${formData.company}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Business Country:</strong> ${formData.businessCountry}</p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #151721; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
        
        <hr style="border: none; border-top: 2px solid #e9ecef; margin: 30px 0;">
        <p style="color: #6c757d; font-size: 14px; text-align: center;">
          <em>This email was sent from the Automera Systems contact form.</em>
        </p>
      </div>
    `;

    // Prepare email parameters
    const emailParams = {
      Source: process.env.SES_FROM_EMAIL || "issa.alsabeh@gmail.com",
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL || "issa@automerasystems.com"],
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: textContent,
            Charset: "UTF-8",
          },
          Html: {
            Data: htmlContent,
            Charset: "UTF-8",
          },
        },
      },
    };

    // Send email using SES
    const command = new SendEmailCommand(emailParams);
    const result = await sesClient.send(command);

    console.log("Email sent successfully:", result.MessageId);
    console.log("Contact form submission received:");
    console.log("To:", process.env.SES_TO_EMAIL || "issa@automerasystems.com");
    console.log("Subject:", subject);
    console.log("Form Data:", formData);

    return NextResponse.json({
      success: true,
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
      } else if (error.message.includes("InvalidUserPoolConfiguration")) {
        errorMessage =
          "AWS SES configuration is invalid. Please check your AWS credentials.";
      } else if (error.message.includes("MessageRejected")) {
        errorMessage =
          "Email was rejected. Please check the sender email address is verified in AWS SES.";
      } else if (error.message.includes("MailFromDomainNotVerified")) {
        errorMessage = "Sender domain is not verified in AWS SES.";
      } else if (error.message.includes("ConfigurationSetDoesNotExist")) {
        errorMessage = "AWS SES configuration set does not exist.";
      } else if (error.message.includes("AccessDenied")) {
        errorMessage =
          "Access denied. Please check your AWS permissions for SES.";
      }
    }

    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}