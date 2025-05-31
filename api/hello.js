import { Resend } from 'resend';
import ForwardedMessageEmail from '../src/emails/ForwardedMessageEmail'

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await resend.emails.send({
      from: 'connecttalentdev@eric-raby.com',
      to: ['fenoandriams@gmail.com'],
      subject: `📩 Nouveau message de ${name}`, 
      react: ForwardedMessageEmail({
        logoUrl: '/author.jpg',
        recipientName: 'Éric Raby',
        name,
        email,
        subject,
        message,
      }),
    });

    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
