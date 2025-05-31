import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  //email template
  const EmailTemplate = () => (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <img
        src="https://www.example.com/logo.png"
        alt="Logo"
        width="120"
        style={{ marginBottom: 20 }}
      />
      <h2>Bonjour Éric Raby,</h2>
      <p>Vous avez reçu un nouveau message via votre site web :</p>
      <p><strong>Expéditeur :</strong> {name} &lt;{email}&gt;</p>
      <p><strong>Sujet :</strong> New message from ${name} </p>
      <p><strong>Message :</strong></p>
      <blockquote>{message}</blockquote>
      <hr />
      <p style={{ fontSize: 12, color: '#888' }}>
        Ce message est confidentiel. Si vous n’êtes pas le destinataire, veuillez le supprimer.
      </p>
    </div>
  );

  try {
    const result = await resend.emails.send({
      from: 'connecttalentdev@eric-raby.com', // Use a verified domain or resendmail.com
      to: ['fenoandriams@gmail.com'],                 // Your email to receive the form
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
