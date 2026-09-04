import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/xvoeqena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit message to Formspree');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Unable to send message directly. Please email calebzwingli@gmail.com directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 size={24} />
        </div>
        <h4 className="text-xl font-bold font-montserrat text-white">Message Sent Successfully!</h4>
        <p className="text-xs font-mono text-slate-300 max-w-sm mx-auto">
          Thank you for reaching out. Caleb has received your message and will reply shortly.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-4 px-5 py-2 rounded-full bg-slate-900 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-mono flex items-center gap-2">
          <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
            Your Name *
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Caleb Zwingli"
            className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-[#f23f67] focus:ring-1 focus:ring-[#f23f67] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
            Email Address *
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="zwingli@example.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-[#f23f67] focus:ring-1 focus:ring-[#f23f67] transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Hi Caleb, let's collaborate on a cloud native project..."
          className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 font-sans text-sm focus:outline-none focus:border-[#f23f67] focus:ring-1 focus:ring-[#f23f67] transition-colors resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#f23f67] hover:bg-[#d93358] text-white font-bold font-mono text-sm shadow-glow-magenta hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            <span>SENDING...</span>
          </>
        ) : (
          <>
            <Send size={15} />
            <span>SEND MESSAGE</span>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
