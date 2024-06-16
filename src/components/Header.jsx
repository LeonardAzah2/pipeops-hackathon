import React from 'react';

const Header = () => {
  return (
    <div className="bg-white py-4 px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-gray-500">Good Morning</h1>
        <p className="text-xl font-semibold">Welcome Back!</p>
      </div>
      <div className="flex items-center space-x-3">
        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
        <div className="text-center md:text-right">
          <p className="font-semibold">John Adewale</p>
          <p className="text-sm text-gray-500">Patient</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
