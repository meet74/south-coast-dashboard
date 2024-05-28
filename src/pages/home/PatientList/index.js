import React from 'react';
import SideBar from '../../../components/SideBar';
import Topbar from '../../../components/TopBar';


const PatientList = () => {
  return (
    <div className="flex">
      <SideBar
       />
        <div className="flex-1 ">
            <div >
        <Topbar />
        
      </div>
      <div className="flex-grow p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Patient List</h1>
          <button className="bg-green-600 text-white px-4 py-2 rounded">Add New Patient</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap">25</td>
                <td className="px-6 py-4 whitespace-nowrap">Male</td>
                <td className="px-6 py-4 whitespace-nowrap">2023-05-15</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">View</button>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap">25</td>
                <td className="px-6 py-4 whitespace-nowrap">Male</td>
                <td className="px-6 py-4 whitespace-nowrap">2023-05-15</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">View</button>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap">25</td>
                <td className="px-6 py-4 whitespace-nowrap">Male</td>
                <td className="px-6 py-4 whitespace-nowrap">2023-05-15</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">View</button>
                </td>
              </tr>
              {/* Add more patient rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
        </div>
    </div>
  );
};

export default PatientList;
