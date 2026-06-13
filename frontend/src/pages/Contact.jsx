import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-text mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Have questions about volunteering, hosting an event, or partnering with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          
          {/* Contact Information & Image */}
          <div className="relative bg-primary text-white p-10 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-20 z-0">
              <img 
                src="https://picsum.photos/seed/contactimg/1000/1000" 
                alt="Office teamwork" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Contact Awanish</h2>
              <p className="text-blue-100 mb-12">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-center">
                  <FiPhone className="w-6 h-6 mr-4 text-blue-200" />
                  <span className="text-lg">7390083864</span>
                </div>
                <div className="flex items-center">
                  <FiMail className="w-6 h-6 mr-4 text-blue-200" />
                  <span className="text-lg">awanishverma864@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="w-6 h-6 mr-4 text-blue-200" />
                  <span className="text-lg">Ghaziabad, Uttar Pradesh</span>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500 rounded-full opacity-50 z-0"></div>
            <div className="absolute bottom-12 right-12 w-24 h-24 bg-blue-300 rounded-full opacity-50 z-0"></div>
          </div>

          {/* Contact Form */}
          <div className="p-10 bg-white z-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-text mb-2">First Name</label>
                  <input type="text" className="input-field bg-gray-50 focus:bg-white" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-text mb-2">Last Name</label>
                  <input type="text" className="input-field bg-gray-50 focus:bg-white" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-text mb-2">Email Address</label>
                <input type="email" className="input-field bg-gray-50 focus:bg-white" placeholder="jane@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-text mb-2">Subject</label>
                <input type="text" className="input-field bg-gray-50 focus:bg-white" placeholder="How can we help?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-text mb-2">Message</label>
                <textarea rows="4" className="input-field bg-gray-50 focus:bg-white resize-none" placeholder="Write your message here..."></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-lg mt-4 shadow-lg hover:-translate-y-1 transition-all">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
