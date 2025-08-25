import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { to, subject, formData } = await request.json();

    // Create transporter for email service
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || "noreply@automerasystems.com",
      to: process.env.EMAIL_TO || "issa@automerasystems.com",
      subject: subject,
      text: `
New consultation request received:

Full Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Business Country: ${formData.businessCountry}
Message: ${formData.message}

---
This email was sent from the Automera Systems contact form.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #284185; border-bottom: 3px solid #fcc142; padding-bottom: 10px;">
            New Consultation Request - Automera Systems
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #284185; margin-top: 0;">Contact Information</h3>
            <p><strong>Full Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #fcc142;">${formData.email}</a></p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Business Country:</strong> ${formData.businessCountry}</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #284185; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <hr style="border: none; border-top: 2px solid #e9ecef; margin: 30px 0;">
          <p style="color: #6c757d; font-size: 14px; text-align: center;">
            <em>This email was sent from the Automera Systems contact form.</em>
          </p>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);
    console.log("Contact form submission received:");
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Form Data:", formData);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully. Email has been sent.",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
