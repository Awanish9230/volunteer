import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-text mb-8 text-center">Contact Us</h1>
      <div className="max-w-2xl mx-auto card">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-text mb-1">Name</label>
            <input type="text" className="input-field" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-text mb-1">Email</label>
            <input type="email" className="input-field" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-text mb-1">Message</label>
            <textarea className="input-field" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn-primary w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
