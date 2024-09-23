import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactComponent.css"

export const ContactComponent = () => {
  const form = useRef();
  const [notification, setNotification] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = form.current.user_email;
    const messageInput = form.current.message;

    if (!emailInput.checkValidity()) {
      setNotification('Please enter a valid email address.');
      return;
    }

    if (messageInput.value.trim() === '') {
      setNotification('Please enter a message.');
      return;
    }

    emailjs
      .sendForm('service_kszv87o', 'template_w8d1ygx', form.current, {
        publicKey: 'WB6hemUyMI9a2pdW-',
      })
      .then(
        () => {
          setNotification('Message sent successfully!');
          form.current.reset();
          setTimeout(() => setNotification(''), 3000);
        },
        (error) => {
          setNotification('Failed to send message. Please try again.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-form">
      {notification && <div className="notification">{notification}</div>}
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
