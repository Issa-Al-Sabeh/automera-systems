import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export async function GET(request: NextRequest) {
  try {
    console.log("Testing SES connection...");
    
    // Check environment variables
    const envCheck = {
      SES_REGION: process.env.SES_REGION || "NOT SET",
      SES_FROM_EMAIL: process.env.SES_FROM_EMAIL || "NOT SET", 
      SES_TO_EMAIL: process.env.SES_TO_EMAIL || "NOT SET",
      SES_ACCESS_KEY_ID: process.env.SES_ACCESS_KEY_ID ? "SET" : "NOT SET",
      SES_SECRET_ACCESS_KEY: process.env.SES_SECRET_ACCESS_KEY ? "SET" : "NOT SET",
    };

    console.log("Environment check:", envCheck);

    // Test SES connection
    const sesClient = new SESClient({
      region: process.env.SES_REGION || "eu-north-1",
      credentials: {
        accessKeyId: process.env.SES_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.SES_SECRET_ACCESS_KEY || "",
      },
    });

    console.log("SES client created successfully");

    // Try to send a test email
    const emailParams = {
      Source: process.env.SES_FROM_EMAIL || "issa.alsabeh@gmail.com",
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL || "issa@automerasystems.com"],
      },
      Message: {
        Subject: {
          Data: "Test Email from Deployed App",
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: "This is a test email from your deployed contact form. If you receive this, everything is working!",
            Charset: "UTF-8",
          },
        },
      },
    };

    const command = new SendEmailCommand(emailParams);
    const result = await sesClient.send(command);

    console.log("✅ Email sent successfully:", result.MessageId);

    return NextResponse.json({
      success: true,
      message: "SES test successful!",
      environment: envCheck,
      emailResult: {
        messageId: result.MessageId,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("❌ SES test failed:", error);
    
    return NextResponse.json(
      {
        success: false,
        message: "SES test failed",
        error: error instanceof Error ? error.message : "Unknown error",
        errorName: error instanceof Error ? error.name : "Unknown",
        environment: {
          SES_REGION: process.env.SES_REGION || "NOT SET",
          SES_FROM_EMAIL: process.env.SES_FROM_EMAIL || "NOT SET", 
          SES_TO_EMAIL: process.env.SES_TO_EMAIL || "NOT SET",
          SES_ACCESS_KEY_ID: process.env.SES_ACCESS_KEY_ID ? "SET" : "NOT SET",
          SES_SECRET_ACCESS_KEY: process.env.SES_SECRET_ACCESS_KEY ? "SET" : "NOT SET",
        },
      },
      { status: 500 }
    );
  }
}
