import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="lg:hidden p-4 bg-white shadow-md">
        <button onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
      <div className={`fixed lg:static lg:block bg-white shadow-md h-full z-50 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="p-6 text-xl font-semibold">HealthHelp</div>
        <nav className="mt-10">
          <Link to="/dashboard" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
            Dashboard
          </Link>
          <Link to="/health-info" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
            Health Info
          </Link>
          <Link to="/appointments" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
            Appointments
          </Link>
          <Link to="/prescriptions" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
            Prescriptions
          </Link>
          <Link to="/messages" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
            Messages
          </Link>
          <Link to="/health-metrics" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
            Health Metrics
          </Link>
          <Link to="/settings" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
            Settings
          </Link>
          <Link to="/feedback" className="flex items-center py-2 px-6 text-gray-700 hover:bg-gray-200">
            Feedback & Support
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
