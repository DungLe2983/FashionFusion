import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req, context) {
    try {
        const { email, subject, message } = await req.json();

        const mailOptions = {
            from: email,
            to: process.env.GMAIL_EMAIL_ADDRESS,
            subject: `Fashion Fusion Report - ${subject}`,
            text: message,
        };

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_EMAIL_ADDRESS,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.log('errorr---, ', error);
        return NextResponse.json(
            { message: 'Failed to Send Email', error },
            { status: 500 }
        );
    }
}

