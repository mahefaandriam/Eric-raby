import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

consol.log("keyl:" + process.env.RESEND_API_KEY);

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from the backend!' + process.env.RESEND_API_KEY});
}
