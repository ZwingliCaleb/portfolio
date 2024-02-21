import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './Contact.scss';
const Contact = () => {
  return (
    <div className = "contact-container" id="Contact">
      <div className="contact">
        <h1>Get in touch!</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
