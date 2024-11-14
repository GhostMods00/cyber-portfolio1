// src/pages/ContactPage.jsx
import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { SocialLinks } from '../components/contact/SocialLinks';

const ContactPage = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact_Me</h1>
        <p className="text-cyber-primary/70">Let's create something amazing together</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
      
      <div className="py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Or connect with me on_</h2>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactPage;