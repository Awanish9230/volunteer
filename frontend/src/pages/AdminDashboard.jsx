import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AdminDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  const [volunteers, setVolunteers] = useState([]);
  const [events, setEvents] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        const [volRes, eventRes, certRes] = await Promise.all([
          axios.get('https://volunteer-438c.onrender.com/api/volunteers', config),
          axios.get('https://volunteer-438c.onrender.com/api/events', config),
          axios.get('https://volunteer-438c.onrender.com/api/certificates', config)
        ]);

        setVolunteers(volRes.data);
        setEvents(eventRes.data);
        setCertificates(certRes.data);
      } catch (error) {
        console.error("Error fetching admin data", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user && user.role === 'Admin') {
      fetchData();
    }
  }, [user]);

  if (isLoading) {
    return <div className="text-center py-20 text-gray-500">Loading Dashboard Data...</div>;
  }

  const activeEvents = events.filter(e => e.status !== 'Completed').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-text">Admin Dashboard</h1>
        <p className="text-gray-500">Welcome back, <span className="font-semibold">{user?.name}</span> (Logged in as {user?.role})</p>
      </div>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card border-l-4 border-primary">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Volunteers</h3>
          <p className="text-3xl font-bold text-gray-text mt-2">{volunteers.length}</p>
        </div>
        <div className="card border-l-4 border-green-500">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Events</h3>
          <p className="text-3xl font-bold text-gray-text mt-2">{events.length}</p>
        </div>
        <div className="card border-l-4 border-yellow-500">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Active Events</h3>
          <p className="text-3xl font-bold text-gray-text mt-2">{activeEvents}</p>
        </div>
        <div className="card border-l-4 border-purple-500">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Certificates Generated</h3>
          <p className="text-3xl font-bold text-gray-text mt-2">{certificates.length}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Volunteers Table */}
        <div className="card overflow-hidden">
          <h2 className="text-xl font-bold text-gray-text mb-4 border-b pb-2">Recent Volunteers</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Email</th>
                  <th scope="col" className="px-6 py-3">Phone</th>
                </tr>
              </thead>
              <tbody>
                {volunteers.slice(0, 5).map((vol) => (
                  <tr key={vol._id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{vol.userId?.name || 'N/A'}</td>
                    <td className="px-6 py-4">{vol.userId?.email || 'N/A'}</td>
                    <td className="px-6 py-4">{vol.userId?.phone || 'N/A'}</td>
                  </tr>
                ))}
                {volunteers.length === 0 && (
                  <tr><td colSpan="3" className="px-6 py-4 text-center">No volunteers found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Events Table */}
        <div className="card overflow-hidden">
          <h2 className="text-xl font-bold text-gray-text mb-4 border-b pb-2">Upcoming Events</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">Event Name</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {events.slice(0, 5).map((event) => (
                  <tr key={event._id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{event.title}</td>
                    <td className="px-6 py-4">{new Date(event.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs text-white ${event.status === 'Upcoming' ? 'bg-yellow-500' : event.status === 'Ongoing' ? 'bg-green-500' : 'bg-gray-500'}`}>
                        {event.status || 'Upcoming'}
                      </span>
                    </td>
                  </tr>
                ))}
                {events.length === 0 && (
                  <tr><td colSpan="3" className="px-6 py-4 text-center">No events found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
