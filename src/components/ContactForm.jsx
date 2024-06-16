import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (formData) => {
    try {
      setSubmitting(true);
      const response = await fetch('https://formspree.io/f/xvoeqena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-lg mx-auto items-center">
      {success ? (
        <div className="bg-blue-500 text-white py-2 px-4 rounded mb-4">Message sent successfully!</div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row md:justify-between w-full gap-4 mb-6">
            <input
              type="text"
              id="name"
              className="m-2 input input-bordered w-full max-w-xs bg-slate-900 focus:bg-slate-300 focus:text-black"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />

            <input
              type="email"
              id="email"
              className="m-2 input input-bordered w-full max-w-xs bg-slate-900 focus:bg-slate-300 focus:text-black"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>

          <div className="flex flex-col w-full gap-4 mb-4">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="m-2 textarea textarea-bordered bg-slate-900 focus:bg-slate-300 focus:text-black h-40 p-2 border rounded-md"
            ></textarea>
          </div>

          <button
            className="bg-yellow-400 text-black py-2 px-4 rounded-lg font-semibold transition-transform duration-200 hover:scale-105"
            type="submit"
            disabled={submitting}
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </>
      )}
    </form>
  );
};

export default ContactForm;
