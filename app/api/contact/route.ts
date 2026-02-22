import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Lazy-load nodemailer only when contact form is used (saves ~5–10MB baseline memory)
    const nodemailer = (await import('nodemailer')).default;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail: aslamkemu@gmail.com
        pass: process.env.EMAIL_PASSWORD, // Your Gmail App Password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'aslamkemu@gmail.com',
      subject: `New Portfolio Contact from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0176D3; border-bottom: 2px solid #0176D3; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Name:</strong> 
              <span style="color: #666;">${name}</span>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Email:</strong> 
              <a href="mailto:${email}" style="color: #0176D3;">${email}</a>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #333;">Company:</strong> 
              <span style="color: #666;">${company || 'Not provided'}</span>
            </p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong style="color: #333;">Message:</strong></p>
            <p style="margin: 0; color: #666; white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p style="color: #999; font-size: 12px; text-align: center;">
            Sent from your portfolio website • 
            <a href="mailto:${email}" style="color: #0176D3;">Reply to sender</a>
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Try to create Salesforce Lead if configured
    if (process.env.SF_CLIENT_ID && process.env.SF_CLIENT_SECRET) {
      try {
        const authResponse = await fetch(
          `https://login.salesforce.com/services/oauth2/token`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
              grant_type: 'password',
              client_id: process.env.SF_CLIENT_ID!,
              client_secret: process.env.SF_CLIENT_SECRET!,
              username: process.env.SF_USERNAME!,
              password: process.env.SF_PASSWORD! + process.env.SF_SECURITY_TOKEN!,
            }),
          }
        );

        if (authResponse.ok) {
          const { access_token, instance_url } = await authResponse.json();
          const nameParts = name.trim().split(' ');
          const firstName = nameParts[0] || name;
          const lastName = nameParts.slice(1).join(' ') || name;

          await fetch(
            `${instance_url}/services/data/v59.0/sobjects/Lead`,
            {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                FirstName: firstName,
                LastName: lastName,
                Email: email,
                Company: company || 'Unknown',
                Description: message,
                LeadSource: 'Website - Portfolio',
              }),
            }
          );
        }
      } catch (sfError) {
        console.error('Salesforce error (non-critical):', sfError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try emailing directly at aslamkemu@gmail.com' },
      { status: 500 }
    );
  }
}
