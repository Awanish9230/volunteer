import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../slices/authSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <nav className="bg-white border-b border-gray-border fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">VolunLink</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-text hover:text-primary transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-gray-text hover:text-primary transition-colors font-medium">About Us</Link>
            <Link to="/events" className="text-gray-text hover:text-primary transition-colors font-medium">Events</Link>
            <Link to="/contact" className="text-gray-text hover:text-primary transition-colors font-medium">Contact</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-text font-medium text-sm">Hi, {user.name}</span>
                <Link to={user.role === 'Admin' ? '/admin' : '/volunteer'} className="text-primary hover:text-primary-hover font-medium">Dashboard</Link>
                <button onClick={onLogout} className="btn-secondary">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-primary hover:text-primary-hover font-medium">Login</Link>
                <Link to="/register" className="btn-primary">Register</Link>
              </>
            )}
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-text hover:text-primary hover:bg-gray-light focus:outline-none"
            >
              {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-text hover:text-primary hover:bg-gray-light">Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-text hover:text-primary hover:bg-gray-light">About Us</Link>
            <Link to="/events" className="block px-3 py-2 rounded-md text-base font-medium text-gray-text hover:text-primary hover:bg-gray-light">Events</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-text hover:text-primary hover:bg-gray-light">Contact</Link>
            {user ? (
              <>
                <Link to={user.role === 'Admin' ? '/admin' : '/volunteer'} className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-gray-light">Dashboard</Link>
                <button onClick={onLogout} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-text hover:text-primary hover:bg-gray-light">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-gray-light">Login</Link>
                <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary-hover">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
