import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // We map event titles to specific image categories for visual variety
  const getEventImage = (index) => {
    const images = [
      "https://picsum.photos/seed/event0/600/400",
      "https://picsum.photos/seed/event1/600/400",
      "https://picsum.photos/seed/event2/600/400",
      "https://picsum.photos/seed/event3/600/400",
      "https://picsum.photos/seed/event4/600/400"
    ];
    return images[index % images.length];
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('https://volunteer-438c.onrender.com/api/events');
        setEvents(res.data);
      } catch (error) {
        console.error("Error fetching events", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-50 py-16 border-b border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-text mb-4">Upcoming Events</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover opportunities to get involved. From local clean-ups to global charity drives, find the perfect event to dedicate your time to.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isLoading ? (
          <div className="text-center text-gray-500 py-20">Loading events...</div>
        ) : events.length === 0 ? (
          <div className="text-center text-gray-500 py-20">No events found right now. Check back later!</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={event._id} className="card group hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                  <img 
                    src={getEventImage(index)} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md text-white ${event.status === 'Upcoming' ? 'bg-yellow-500' : event.status === 'Ongoing' ? 'bg-green-500' : 'bg-gray-500'}`}>
                      {event.status || 'Upcoming'}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-text mb-3">{event.title}</h3>
                <p className="text-gray-500 mb-6 flex-grow">{event.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <FiCalendar className="mr-2 text-primary" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FiMapPin className="mr-2 text-red-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FiClock className="mr-2 text-yellow-500" />
                    <span>{event.requiredHours} Hours Credit</span>
                  </div>
                </div>

                <button className="btn-primary w-full py-3 mt-auto">Register for Event</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
