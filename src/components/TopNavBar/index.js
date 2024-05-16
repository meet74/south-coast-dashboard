import React from 'react';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <div className="flex items-center space-x-4">
        <Link to="/summary" className="text-gray-600 hover:text-gray-800">Summary</Link>
        <Link to="/daily-transactions" className="text-gray-600 hover:text-gray-800">Daily Transactions</Link>
        <Link to="/monthly-transactions" className="text-gray-600 hover:text-gray-800">Monthly Transactions</Link>
        <Link to="/annual-transactions" className="text-gray-600 hover:text-gray-800">Annual Transactions</Link>
      </div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search..." className="border rounded py-1 px-2"/>
        <img src="user-avatar.jpg" alt="User Avatar" className="w-8 h-8 rounded-full"/>
      </div>
    </div>
  );
};

export default TopNavbar;
