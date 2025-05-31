import React from "react";

export default function ForwardedMessageEmail({ logoUrl, recipientName, fromName, fromEmail, subject, message }) {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      {/* En-tête avec logo */}
      <div
        style={{
          backgroundColor: '#4a90e2',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <img
          src={logoUrl}
          alt="Logo"
          style={{ maxHeight: '60px' }}
        />
      </div>

      {/* Corps du message */}
      <div style={{ padding: '30px', backgroundColor: '#ffffff' }}>
        <h2 style={{ color: '#333', marginTop: 0 }}>
          Bonjour {recipientName},
        </h2>
        <p style={{ fontSize: '16px', color: '#555' }}>
          Vous avez reçu un nouveau message depuis le site web.
        </p>

        {/* Informations de l’expéditeur */}
        <div style={{ margin: '20px 0', fontSize: '15px', color: '#444' }}>
          <strong>De :</strong> {fromName} &lt;{fromEmail}&gt;<br />
          <strong>Sujet :</strong> {subject}
        </div>

        {/* Message */}
        <div
          style={{
            padding: '15px',
            backgroundColor: '#f5f5f5',
            borderRadius: '6px',
            whiteSpace: 'pre-line',
          }}
        >
          {message}
        </div>

        {/* Note de confidentialité */}
        <div
          style={{
            marginTop: '30px',
            fontSize: '12px',
            color: '#999',
            borderTop: '1px solid #eee',
            paddingTop: '15px',
          }}
        >
          Ce message vous est transmis à titre confidentiel. Il peut contenir des informations sensibles provenant d’un tiers. Merci de ne pas le partager sans autorisation.
        </div>
      </div>

      {/* Pied de page */}
      <div
        style={{
          fontSize: '12px',
          color: '#999',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#f9f9f9',
        }}
      >
        Message transmis automatiquement depuis votre site web.
      </div>
    </div>
  );
}
