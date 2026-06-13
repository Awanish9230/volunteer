import React from 'react';
import { FiHeart, FiGlobe, FiShield } from 'react-icons/fi';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-80 bg-gray-900 flex items-center justify-center">
        <img 
          src="https://picsum.photos/seed/aboutbanner/2000/800" 
          alt="Community volunteering" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">About VolunLink</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">Connecting passionate individuals with causes that matter.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="card p-10 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <FiHeart className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-text mb-4">Our Mission</h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              To empower individuals by connecting them with meaningful volunteer opportunities, fostering a sense of community, and making a lasting positive impact. We believe that everyone has something valuable to contribute.
            </p>
          </div>
          <div className="card p-10 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <FiGlobe className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-text mb-4">Our Vision</h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              A world where everyone has the opportunity to contribute their time and skills towards building stronger, more resilient communities. We strive to be the global bridge between goodwill and action.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-text mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-text mb-2">Integrity</h3>
              <p className="text-gray-500">We operate with transparency, honesty, and accountability in everything we do.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-text mb-2">Compassion</h3>
              <p className="text-gray-500">Empathy drives our decisions and how we treat our volunteers and partners.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiGlobe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-text mb-2">Inclusivity</h3>
              <p className="text-gray-500">We build diverse communities where everyone is welcome and respected.</p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-text text-center mb-12">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="overflow-hidden rounded-2xl mb-4">
                <img src="https://picsum.photos/seed/awanish/400/400" alt="CEO" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-text">Awanish</h3>
              <p className="text-primary">Founder & CEO</p>
            </div>
            <div className="text-center group">
              <div className="overflow-hidden rounded-2xl mb-4">
                <img src="https://picsum.photos/seed/elena/400/400" alt="COO" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-text">Elena Rodriguez</h3>
              <p className="text-primary">Chief Operations Officer</p>
            </div>
            <div className="text-center group">
              <div className="overflow-hidden rounded-2xl mb-4">
                <img src="https://picsum.photos/seed/marcus/400/400" alt="CTO" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-text">Marcus Johnson</h3>
              <p className="text-primary">Head of Technology</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
