import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiCalendar, FiAward, FiCheckCircle } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-text leading-tight mb-6">
              Empower Your <span className="text-primary">Community</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-lg">
              Join our network of dedicated volunteers. Discover meaningful opportunities, track your impact, and make a real difference in the world.
            </p>
            <div className="space-x-4">
              <Link to="/register" className="btn-primary inline-block px-8 py-3 text-lg shadow-lg hover:-translate-y-1 transition-all">Get Started</Link>
              <Link to="/about" className="btn-secondary inline-block px-8 py-3 text-lg hover:-translate-y-1 transition-all bg-white">Learn More</Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative z-10">
            <img 
              src="https://picsum.photos/seed/volunteerhero/800/500" 
              alt="Volunteers planting trees" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
            />
          </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 opacity-50 z-0"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4"><FiUsers className="w-8 h-8 text-primary" /></div>
              <div className="text-4xl font-bold text-gray-text mb-2">500+</div>
              <div className="text-gray-500 font-medium">Active Volunteers</div>
            </div>
            <div className="p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4"><FiCalendar className="w-8 h-8 text-green-500" /></div>
              <div className="text-4xl font-bold text-gray-text mb-2">120+</div>
              <div className="text-gray-500 font-medium">Events Hosted</div>
            </div>
            <div className="p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4"><FiCheckCircle className="w-8 h-8 text-yellow-500" /></div>
              <div className="text-4xl font-bold text-gray-text mb-2">10k+</div>
              <div className="text-gray-500 font-medium">Hours Contributed</div>
            </div>
            <div className="p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4"><FiAward className="w-8 h-8 text-purple-500" /></div>
              <div className="text-4xl font-bold text-gray-text mb-2">300+</div>
              <div className="text-gray-500 font-medium">Certificates Issued</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-text">How It Works</h2>
            <p className="mt-4 text-gray-500">Your journey to making an impact is just three steps away.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-text mb-4">Register Account</h3>
              <p className="text-gray-500">Sign up and create your comprehensive volunteer profile detailing your skills and availability.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-text mb-4">Find Events</h3>
              <p className="text-gray-500">Browse and join community events, charity drives, and clean-ups that match your interests.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-text mb-4">Earn Certificates</h3>
              <p className="text-gray-500">Contribute your hours and automatically receive official PDF certificates for your hard work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-text text-center mb-16">Stories from our Volunteers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-gray-50 flex flex-col items-center text-center p-8 border-t-4 border-primary">
              <img src="https://picsum.photos/seed/sarah/150/150" alt="Sarah" className="w-20 h-20 rounded-full mb-4 shadow-md object-cover" />
              <p className="italic text-gray-600 mb-6">"Volunteering here has completely changed my perspective on community service. The platform makes it incredibly easy to find events where my skills are actually needed."</p>
              <h4 className="font-bold text-gray-text">Sarah Jenkins</h4>
              <span className="text-sm text-primary">Education Volunteer</span>
            </div>
            <div className="card bg-gray-50 flex flex-col items-center text-center p-8 border-t-4 border-green-500">
              <img src="https://picsum.photos/seed/michael/150/150" alt="Michael" className="w-20 h-20 rounded-full mb-4 shadow-md object-cover" />
              <p className="italic text-gray-600 mb-6">"I love how I can track my hours and instantly download certificates for my college applications. It is a win-win for everyone involved!"</p>
              <h4 className="font-bold text-gray-text">Michael Chen</h4>
              <span className="text-sm text-primary">Environmental Activist</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
