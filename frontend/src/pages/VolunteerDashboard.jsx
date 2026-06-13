import React from 'react';

const VolunteerDashboard = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar Placeholder */}
      <aside className="w-64 bg-white border-r border-gray-border flex flex-col hidden md:flex">
        <div className="p-6 border-b border-gray-border">
          <h2 className="text-xl font-bold text-primary">Volunteer Panel</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded-md bg-gray-light text-primary font-medium">Dashboard</a>
          <a href="#" className="block px-4 py-2 rounded-md text-gray-text hover:bg-gray-light hover:text-primary">Profile</a>
          <a href="#" className="block px-4 py-2 rounded-md text-gray-text hover:bg-gray-light hover:text-primary">My Events</a>
          <a href="#" className="block px-4 py-2 rounded-md text-gray-text hover:bg-gray-light hover:text-primary">Certificates</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-light p-8">
        <h1 className="text-3xl font-bold text-gray-text mb-8">Welcome, Volunteer!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card border-t-4 border-primary">
            <h3 className="text-sm font-semibold text-gray-500 uppercase">Events Joined</h3>
            <p className="text-3xl font-bold text-gray-text mt-2">12</p>
          </div>
          <div className="card border-t-4 border-green-500">
            <h3 className="text-sm font-semibold text-gray-500 uppercase">Volunteer Hours</h3>
            <p className="text-3xl font-bold text-gray-text mt-2">48 hrs</p>
          </div>
          <div className="card border-t-4 border-purple-500">
            <h3 className="text-sm font-semibold text-gray-500 uppercase">Certificates</h3>
            <p className="text-3xl font-bold text-gray-text mt-2">3</p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-gray-text mb-4 border-b pb-2">Pending Activities</h2>
          <div className="text-gray-500 text-sm text-center py-10">No pending activities at the moment.</div>
        </div>
      </main>
    </div>
  );
};

export default VolunteerDashboard;
