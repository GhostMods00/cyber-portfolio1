// src/components/contact/ContactForm.jsx
import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { sendEmail } from '../../utils/emailService';

export const ContactForm = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
    setIsSubmitting(false);
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="cyber-input"
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="cyber-input"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        required
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        className="cyber-input"
      />
      <textarea
        placeholder="Message"
        required
        rows={5}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="cyber-input"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="cyber-button w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            SENDING...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            SEND MESSAGE
          </>
        )}
      </button>
      {status && (
        <div className={`text-center p-4 rounded-lg ${
          status === 'success' 
            ? (isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-800')
            : (isDark ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-800')
        }`}>
          {status === 'success' 
            ? '✨ Message sent successfully!'
            : '❌ Something went wrong. Please try again.'}
        </div>
      )}
    </form>
  );
};