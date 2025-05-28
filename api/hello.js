import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default function handler(req, res) {
  res.status(200).json({ message: 'there is a message'});

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

}
