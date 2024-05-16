import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="flex justify-between items-center pl-12 p-4 bg-white shadow-md">
      <div className="flex items-center">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search anything here"
          className="outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-500 " />
        <div className="flex items-center space-x-2">
          <img
            src={require("../../assets/images/user.jpeg")}
            alt="User Avatar"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="text-gray-700">Alexandro</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
