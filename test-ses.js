// Simple test to check SES configuration
require("dotenv").config({ path: ".env.local" });
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

async function testSES() {
  try {
    console.log("Testing SES configuration...");
    console.log("SES_REGION:", process.env.SES_REGION);
    console.log("SES_FROM_EMAIL:", process.env.SES_FROM_EMAIL);
    console.log("SES_TO_EMAIL:", process.env.SES_TO_EMAIL);
    console.log(
      "AWS_ACCESS_KEY_ID:",
      process.env.AWS_ACCESS_KEY_ID ? "Set" : "Not set"
    );
    console.log(
      "AWS_SECRET_ACCESS_KEY:",
      process.env.AWS_SECRET_ACCESS_KEY ? "Set" : "Not set"
    );

    const sesClient = new SESClient({
      region: process.env.SES_REGION || "eu-north-1",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    console.log("SES client created successfully");

    // Test with a simple email
    const emailParams = {
      Source: process.env.SES_FROM_EMAIL || "issa.alsabeh@gmail.com",
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL || "issa@automerasystems.com"],
      },
      Message: {
        Subject: {
          Data: "Test Email from Contact Form",
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: "This is a test email from your contact form. If you receive this, SES is working correctly!",
            Charset: "UTF-8",
          },
        },
      },
    };

    const command = new SendEmailCommand(emailParams);
    const result = await sesClient.send(command);

    console.log("✅ Email sent successfully:", result.MessageId);
    console.log("🎉 SES is working! Check your email inbox.");
  } catch (error) {
    console.error("❌ SES Error:", error);
    console.error("Error details:", {
      name: error.name,
      message: error.message,
      code: error.$metadata?.httpStatusCode,
    });
  }
}

testSES();
