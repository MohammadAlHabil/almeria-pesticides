import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Translation imports
import arTranslations from "@/translations/ar.json";
import enTranslations from "@/translations/en.json";

const translations = {
  ar: arTranslations,
  en: enTranslations,
};

function getTranslations(locale: string) {
  return translations[locale as keyof typeof translations] || translations.en;
}

export async function POST(request: NextRequest) {
  let t = getTranslations("en"); // Default fallback

  try {
    const body = await request.json();
    const { name, email, message, locale = "en" } = body;

    // Get translations for response messages
    t = getTranslations(locale);

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: t.ContactPage.form.api.allFieldsRequired },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: t.ContactPage.form.api.invalidEmail },
        { status: 400 },
      );
    }

    // Create transporter for Gmail (you can change this to your preferred email service)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Email content (always in Arabic)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@almeria-pesticides.com", // Company email
      subject: `رسالة جديدة من نموذج التواصل من ${name}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; direction: rtl;">
          <div style="background: linear-gradient(135deg, #059669, #0891b2); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">رسالة جديدة من نموذج التواصل</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 10px; border: 1px solid #e5e7eb;">
            <h2 style="color: #374151; margin-top: 0;">تفاصيل التواصل:</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #059669;">الاسم:</strong>
              <p style="margin: 5px 0; color: #374151;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #059669;">البريد الإلكتروني:</strong>
              <p style="margin: 5px 0; color: #374151;">${email}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #059669;">الرسالة:</strong>
              <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #d1d5db; margin-top: 10px;">
                <p style="margin: 0; color: #374151; line-height: 1.6;">${message}</p>
              </div>
            </div>
            
            <div style="background: #eff6ff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-top: 20px;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>وقت الإرسال:</strong> ${new Date().toLocaleString(
                  "ar-AE",
                )}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
            <p>تم إرسال هذه الرسالة من نموذج التواصل لشركة ألميريا للمبيدات.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: t.ContactPage.form.api.successMessage },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: t.ContactPage.form.api.errorMessage },
      { status: 500 },
    );
  }
}
