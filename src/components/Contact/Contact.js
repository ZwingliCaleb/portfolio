import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './Contact.scss';
const Contact = () => {
  return (
    <div className = "contact">
      <h1>Get in touch!</h1>
      <p>My contact information</p>
      <ContactForm />
    </div>
  );
};

export default Contact;
