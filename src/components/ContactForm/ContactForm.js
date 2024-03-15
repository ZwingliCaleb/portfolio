import React, {useState} from 'react';
import './ContactForm.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange =(e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    //adding my form submission logic here
    console.log('Form submitted:', formData);
    //making an API request to backend here to handle form data
  };

  return (
    <form onSubmit={handleSubmit} className="form" action="https://formspree.io/f/xvoeqena" method="POST">
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name" //useplaceholder for the hint
        required
      />

      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address" //useplaceholder for the hint
        required
      />

      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        required
      ></textarea>

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
