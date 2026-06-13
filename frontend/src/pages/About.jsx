import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-text mb-8 text-center">About Us</h1>
      <div className="card">
        <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
        <p className="text-gray-text mb-6">
          To empower individuals by connecting them with meaningful volunteer opportunities, fostering a sense of community, and making a lasting positive impact.
        </p>
        <h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
        <p className="text-gray-text mb-6">
          A world where everyone has the opportunity to contribute their time and skills towards building stronger, more resilient communities.
        </p>
      </div>
    </div>
  );
};

export default About;
