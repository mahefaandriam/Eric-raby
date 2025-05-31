// src/emails/ForwardedMessageEmail.tsx
import React from 'react';

type Props = {
  logoUrl: string;
  recipientName: string;
  fromName: string;
  fromEmail: string;
  subject: string;
  message: string;
};

export default function ForwardedMessageEmail({
  logoUrl,
  recipientName,
  fromName,
  fromEmail,
  subject,
  message,
}: Props) {
  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <img src={logoUrl} alt="Logo" width="120" style={{ marginBottom: 20 }} />
      <h2>Bonjour {recipientName},</h2>
      <p>
        Vous avez reçu un nouveau message via votre site web :
      </p>
      <p><strong>Expéditeur :</strong> {fromName} &lt;{fromEmail}&gt;</p>
      <p><strong>Sujet :</strong> {subject}</p>
      <p><strong>Message :</strong></p>
      <blockquote>{message}</blockquote>
      <hr />
      <p style={{ fontSize: 12, color: '#888' }}>
        Ce message est confidentiel. Si vous n’êtes pas le destinataire, veuillez le supprimer.
      </p>
    </div>
  );
}
