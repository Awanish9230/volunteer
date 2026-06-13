import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import VolunteerDashboard from './pages/VolunteerDashboard';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      '/': 'Home | Volunteer Registration System',
      '/about': 'About Us | Volunteer Registration System',
      '/contact': 'Contact | Volunteer Registration System',
      '/events': 'Events | Volunteer Registration System',
      '/login': 'Login | Volunteer Registration System',
      '/register': 'Register | Volunteer Registration System',
      '/admin': 'Admin Dashboard | Volunteer Registration System',
      '/volunteer': 'Volunteer Dashboard | Volunteer Registration System',
    };

    document.title = routeTitles[location.pathname] || 'Volunteer Registration System';
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <Router>
        <DynamicTitle />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="events" element={<Events />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="volunteer" element={<VolunteerDashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
