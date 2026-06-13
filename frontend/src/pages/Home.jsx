import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-text mb-4">
              Join Our Volunteer Community
            </h1>
            <p className="text-lg text-gray-text mb-8">
              Register, participate, and make a difference. Connect with meaningful opportunities and track your impact.
            </p>
            <div className="space-x-4">
              <Link to="/register" className="btn-primary inline-block">Register Now</Link>
              <Link to="/about" className="btn-secondary inline-block">Learn More</Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-gray-500">
              [Professional Volunteer Image]
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="card">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-text">Total Volunteers</div>
            </div>
            <div className="card">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-text">Active Events</div>
            </div>
            <div className="card">
              <div className="text-3xl font-bold text-primary mb-2">10k+</div>
              <div className="text-gray-text">Hours Contributed</div>
            </div>
            <div className="card">
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-gray-text">Certificates Issued</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
