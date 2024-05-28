import React from 'react';
import SideBar from '../../../../components/SideBar';
import Topbar from '../../../../components/TopBar';

const EmployeeDetail = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col flex-grow bg-gray-100 ">
        <Topbar />
        <div className="p-8  bg-gray-100 h-full">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Aaditya Shastri</h1>
                <p className="text-sm text-gray-500">Physiotherapist</p>
              </div>
              <div className="flex space-x-4">
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                  Print Day Sheet
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  Send Password Reset Email
                </button>
                <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
                  Send Welcome Email
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile</h2>
                  <div className="space-y-4">
                    <p className="text-gray-600"><strong>Name:</strong> Aaditya Shastri</p>
                    <p className="text-gray-600"><strong>Discipline:</strong> Physiotherapy</p>
                    <p className="text-gray-600"><strong>Email:</strong> shastriaditya1@gmail.com <span className="bg-green-200 text-green-800 py-1 px-2 rounded ml-2">Verified</span></p>
                    <p className="text-gray-600"><strong>Username / Logins:</strong> shastriaditya1@gmail.com</p>
                    <p className="text-gray-600"><strong>Last Login:</strong> Tuesday, May 14, 2024 10:01 AM</p>
                    <p className="text-gray-600"><strong>2-Step Verification:</strong> <span className="text-red-500">Inactive</span></p>
                    <p className="text-gray-600"><strong>Mobile:</strong> (226) 752-8320</p>
                    <p className="text-gray-600"><strong>Work:</strong> (548) 889-3432</p>
                    <p className="text-gray-600"><strong>Address:</strong> 245 Lena Crescent 803, Cambridge ON N1R 8P7, CA</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">Calendar Addresses</h2>
                  <p className="text-gray-600">Subscribe to your calendars in Google Calendar, Apple Calendar, or Outlook.</p>
                  <a href="#" className="text-blue-500 underline mt-2 block">Set up private calendar URLs</a>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300">
                Manage Shifts
              </button>
              <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300">
                View Schedule
              </button>
              <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300">
                View Day Sheet / Dashboard
              </button>
              <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
