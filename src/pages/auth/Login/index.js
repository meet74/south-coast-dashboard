import React from 'react';

import BgImage from '../../../assets/images/bg-image.jpg';
import Logo from '../../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { homeScreenPath } from "../../../routes/pathNames";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center relative" style={{ backgroundImage: `url('${BgImage}')`, backgroundSize: "cover" }}>
      {/* Pseudo-element for the overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
        
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md flex z-10 relative">
      
        <div className="w-1/2 p-8 pb-14">
        <div className='flex items-center mb-6'>
            <img src={Logo} className='h-16 w-16'/>
         <h1 className="text-2xl font-bold text-[#8DC53F] ml-4">SouthCoast Physiotherapy</h1>
         </div>
          <h1 className="text-2xl font-bold text-gray-800">Log in to your account</h1>

          <div className="mt-6">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="mt-2 w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="mt-2 w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button onClick={()=>navigate(homeScreenPath)} className="mt-6 w-full py-2 px-4 bg-[#043840] text-white rounded-md hover:bg-[#8DC53F] duration-300">
            Login
          </button>
        </div>
        <div className="w-1/2 bg-[#043840] p-8 flex flex-col justify-center items-center ">
          <h1 className="text-3xl font-bold text-white text-center mb-8">Welcome to Physiotherapy Admin Panel</h1>
          <p className="mt-4 text-white  text-start">
            Manage patient records, appointments, and clinic operations efficiently with our advanced admin panel.
          </p>
          <p className="mt-4 text-white  text-start">
            Designed specifically for physiotherapy professionals to streamline workflows and enhance patient care.
          </p>
          {/* <a href="#" className="mt-6 text-blue-200 underline">Learn More</a> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
