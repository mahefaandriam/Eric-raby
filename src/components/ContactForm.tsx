import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError(null);

    const { to, subject, message } = formData;

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, subject, html: `<p>${message}</p>`}),
      });

      if (!res.ok) {
        let errorMessage = 'Unknown error';
        try {
          const errorData = await res.json();
          errorMessage = errorData.error || errorMessage;try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, subject, html: `<p>${message}</p>` }),
      });

      if (!res.ok) {
        let errorMessage = 'Unknown error';
        try {
          const errorData = await res.json();
          errorMessage = errorData.error || errorMessage;
        } catch (err) {
          // response wasn't JSON — use status text
          errorMessage = res.statusText;
        }
        throw new Error(errorMessage);
      }

      setStatus('sent');
      setFormData({ to: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setError(err.message);
    }

    } catch (err) {
      // response wasn't JSON — use status text
      errorMessage = res.statusText;
    }
    throw new Error(errorMessage);
  }

  setStatus('sent');
  setFormData({ to: '', subject: '', message: '' });
} catch (err: any) {
  setStatus('error');
  setError(err.message);
}

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold">Send an Email</h2>

      <div>
        <label className="block font-medium">To:</label>
        <input
          type="email"
          name="to"
          value={formData.to}
          onChange={handleChange}
          required
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label className="block font-medium">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border px-2 py-1 rounded"
          rows={5}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send Email'}
      </button>

      {status === 'sent' && <p className="text-green-600">Email sent successfully!</p>}
      {status === 'error' && <p className="text-red-600">Error: {error}</p>}
    </form>
  );
}
