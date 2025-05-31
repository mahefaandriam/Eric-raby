import { useState, useRef } from 'react';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

type ContactSectionProps = {
  imageUrl: string;
  title: string;
  email: string;
  phone: string;
};

export default function ContactForm({ imageUrl, title, email, phone }: ContactSectionProps) {

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC;

  const { t } = useTranslation();

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const [status, setStatus] = useState('idle');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /*const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setStatus('sending');
  
      try {
        await emailjs.send(
          serviceID,
          templateID,
          {
            user_name: form.name,
            user_email: form.email,
            message: form.message,
          },
          publicKey
        );
  
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('Email send error:', error);
        setStatus('error');
      }
    };
    */
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        console.log(res.formData);
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatus('error');
      console.log('error: ' + err);
    }
  };


  return (
    <section className="flex flex-col md:flex-row items-stretch justify-center max-w-6xl mx-auto text-xs p-6 gap-10">
      {/* Left - Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="md:w-4/10 w-full"
        >
        <img
          src={imageUrl}
          alt="Contact illustration"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right - Contact Info + Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="md:w-4/10 w-full bg-transparent p-6"
        >
        <h2 className="text-xl font-bold mb-4 text-accent ">{title}</h2>
        
        <div className="flex space-x-5 my-6">          
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=eric.raby@hotmail.fr&su=Subject:Hello&body=Hi there!"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex text-xs text-accent space-x-5 hover:underline"
          >
            <Mail size={20} className='mx-2'/>{email}
          </a>
          <a href="tel:0693 47 44 69" className="flex text-xs text-accent hover:underline">
            <Phone size={20} className='mx-2'/>{phone}
          </a> 
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t('contact_section.name_placeholder')}
            className="w-full p-3 border border-gray-300 bg-white text-accent"
            
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t('contact_section.email_placeholder')}
            className="w-full p-3 border border-gray-300 bg-white text-accent"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t('contact_section.message_placeholder')}
            rows={5}
            className="w-full p-3 border border-gray-300 bg-white text-accent"
            required
          />

          
          <button
        type="submit"
        disabled={status === 'sending' || status === 'success'}
        className={`w-full p-2 text-white rounded transition-all ${
          status === 'success' ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {status === 'sending' && (
          <span className="flex items-center justify-center gap-2">
            Sending
            <span className="animate-pulse text-xl font-bold">...</span>
          </span>
        )}
        {status === 'success' && (
          <span className="flex items-center justify-center gap-2">
            Sent <Check className="w-5 h-5" />
          </span>
        )}
        {status === 'idle' && t('contact_section.b_submit')}
        {status === 'error' && 'Try Again'}
      </button>
        </form>

      </motion.div>
    </section>
  );
}
