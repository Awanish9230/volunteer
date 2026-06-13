import React from 'react';

const Events = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-text mb-8 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card">
          <div className="h-40 bg-gray-200 rounded-t-lg -mx-6 -mt-6 mb-4 flex items-center justify-center text-gray-500">
            [Event Image]
          </div>
          <h3 className="text-xl font-bold text-gray-text mb-2">Community Clean-up</h3>
          <p className="text-gray-text mb-4 text-sm">Join us in cleaning the local park and making our community beautiful.</p>
          <button className="btn-primary w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Events;
