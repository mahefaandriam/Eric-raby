import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default function handler(req, res) {
  res.status(200).json({ message: 'there is a message'});
}
