import React from 'react';

import { employeedetailScreenPath } from '../../../routes/pathNames';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../../components/SideBar';
import Topbar from '../../../components/TopBar';

const employees = [
  { name: "John Doe", position: "Physiotherapist", department: "Physical Therapy", email: "johndoe@example.com", phone: "123-456-7890" },
  { name: "Jane Smith", position: "Receptionist", department: "Front Desk", email: "janesmith@example.com", phone: "123-456-7891" },
  { name: "Sam Wilson", position: "Assistant", department: "Physical Therapy", email: "samwilson@example.com", phone: "123-456-7892" },
  // Add more employees as needed
];

const EmployeeList = () => {

  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col flex-grow">
        <Topbar />
        <div className="p-8 bg-gray-50 h-full">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold mb-6">Staff</h1>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">Name</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">Position</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">Department</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">Email</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">Phone</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {employees.map((employee, index) => (
                    <tr onClick={()=>navigate(employeedetailScreenPath)} key={index} className="hover:bg-gray-100">
                      <td className="px-6 py-4 border-b border-gray-300">{employee.name}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{employee.position}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{employee.department}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{employee.email}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{employee.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
