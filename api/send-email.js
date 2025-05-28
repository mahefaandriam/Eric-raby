import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { user_name, user_email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await resend.emails.send({
      from: 'mahefaandriam67@gmail.com', // Use a verified domain or resendmail.com
      to: ['fenoandriams@gmail.com'],                 // Your email to receive the form
      subject: `New message from ${user_name}`,
      text: `From: ${user_name} (${user_email})\n\n${message}`,
    });

    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
