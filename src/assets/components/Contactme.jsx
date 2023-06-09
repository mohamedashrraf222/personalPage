import React, { useState } from 'react';
import "../styles/contact.css"

// this component for contacting form

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // You can add your backend logic here to submit the form data
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Me</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactMe;