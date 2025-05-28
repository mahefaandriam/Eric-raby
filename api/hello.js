import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' , method: req.method});
  }

  const { name, email, message } = req.body;


  return res.status(400).json({error: name , m: message});
  

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

}
