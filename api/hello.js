import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <img src="https://www.example.com/logo.png" alt="Logo" width="120" style="margin-bottom: 20px;" />
      <h2>Bonjour Éric Raby,</h2>
      <p>Vous avez reçu un nouveau message via votre site web :</p>
      <p><strong>Expéditeur :</strong> ${name} &lt;${email}&gt;</p>
      <p><strong>Sujet :</strong> ${name}</p>
      <p><strong>Message :</strong></p>
      <blockquote style="background-color:#f9f9f9;padding:10px;border-left:4px solid #ccc;">
        ${message.replace(/\n/g, '<br/>')}
      </blockquote>
      <hr />
      <p style="font-size: 12px; color: #888;">
        Ce message est confidentiel. Si vous n’êtes pas le destinataire, veuillez le supprimer.
      </p>
    </div>
  `;
  try {
    const result = await resend.emails.send({
      from: 'connecttalentdev@eric-raby.com', // Use a verified domain or resendmail.com
      to: ['fenoandriams@gmail.com'],                 // Your email to receive the form
     subject: `📩 Nouveau message de ${name}`,
      html: htmlContent,
    });

    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
