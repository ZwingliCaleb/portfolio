import React, { useState } from 'react';
import { Input, Textarea, Button } from "@nextui-org/react";

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
    <form onSubmit={handleSubmit} className="flex flex-col w-full mx-auto items-center gap-6">
      {success ? (
        <div className="bg-success-100/20 text-success-500 border border-success-500/50 py-3 px-6 rounded-lg w-full text-center backdrop-blur-sm">
          Message sent successfully!
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row w-full gap-4">
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Name"
              placeholder="Name"
              variant="bordered"
              isRequired
              classNames={{
                input: [
                  "text-white",
                  "placeholder:text-gray-500",
                ],
                label: "text-gray-400 font-semibold group-data-[filled=true]:text-[#f23f67]",
                inputWrapper: [
                  "border-gray-700",
                  "hover:border-[#f23f67]",
                  "group-data-[focus=true]:border-[#f23f67]",
                  "bg-gray-900/50",
                  "transition-colors"
                ]
              }}
            />

            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email Address"
              placeholder="Email Address"
              variant="bordered"
              isRequired
              classNames={{
                input: [
                  "text-white",
                  "placeholder:text-gray-500",
                ],
                label: "text-gray-400 font-semibold group-data-[filled=true]:text-[#f23f67]",
                inputWrapper: [
                  "border-gray-700",
                  "hover:border-[#f23f67]",
                  "group-data-[focus=true]:border-[#f23f67]",
                  "bg-gray-900/50",
                  "transition-colors"
                ]
              }}
            />
          </div>

          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-label="Message"
            placeholder="Message"
            variant="bordered"
            minRows={6}
            isRequired
            classNames={{
              input: [
                "text-white",
                "placeholder:text-gray-500",
              ],
              label: "text-gray-400 font-semibold group-data-[filled=true]:text-[#f23f67]",
              inputWrapper: [
                "border-gray-700",
                "hover:border-[#f23f67]",
                "group-data-[focus=true]:border-[#f23f67]",
                "bg-gray-900/50",
                "transition-colors"
              ]
            }}
          />

          <Button
            type="submit"
            isLoading={submitting}
            className="bg-[#f23f67] text-white font-bold w-full md:w-auto px-10 shadow-lg shadow-[#f23f67]/30"
            radius="full"
            size="lg"
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </>
      )}
    </form>
  );
};

export default ContactForm;
