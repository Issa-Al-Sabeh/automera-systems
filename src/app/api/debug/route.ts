import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Check environment variables
    const envCheck = {
      SES_REGION: process.env.SES_REGION || "NOT SET",
      SES_FROM_EMAIL: process.env.SES_FROM_EMAIL || "NOT SET",
      SES_TO_EMAIL: process.env.SES_TO_EMAIL || "NOT SET",
      SES_FROM: process.env.SES_FROM || "NOT SET",
      SES_TO: process.env.SES_TO || "NOT SET",
      SES_ACCESS_KEY_ID: process.env.SES_ACCESS_KEY_ID ? "SET" : "NOT SET",
      SES_SECRET_ACCESS_KEY: process.env.SES_SECRET_ACCESS_KEY
        ? "SET"
        : "NOT SET",
    };

    return NextResponse.json({
      success: true,
      message: "Debug information",
      environment: envCheck,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Debug failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
