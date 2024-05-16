import React, { useState } from 'react';
import SideBar from '../../../components/SideBar';
import Topbar from '../../../components/TopBar';

const purchases = [
  { id: 1, item: 'Physical Therapy Session', amount: '$100', date: '2024-05-01' },
  { id: 2, item: 'Massage Therapy', amount: '$80', date: '2024-05-02' },
  { id: 3, item: 'Consultation', amount: '$50', date: '2024-05-03' },
  // Add more purchases as needed
];

const insuranceCompanies = [
  'Health Insurance Co A',
  'Health Insurance Co B',
  'Health Insurance Co C',
  'Health Insurance Co D',
  // Add more insurance companies as needed
];

const reports = [
  'Summary',
  'Daily Transactions',
  'Monthly Transactions',
  'Annual Transactions',
  // Add more report types as needed
];

const PaymentPage = () => {
  const [activeTab, setActiveTab] = useState('Purchases');

  return (
    <div className="flex h-screen bg-gray-50">
      <SideBar />
      <div className="flex flex-col flex-grow">
        <Topbar />
        <div className="p-8">
          <div className="bg-white shadow-md rounded-lg mb-8">
            <div className="flex justify-between items-center border-b p-6">
              <h1 className="text-2xl font-semibold text-gray-800">Payment</h1>
              <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200">+ New Sale</button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-4">
                  <button
                    className={`py-2 px-4 rounded-lg ${activeTab === 'Purchases' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setActiveTab('Purchases')}
                  >
                    Purchases
                  </button>
                  <button
                    className={`py-2 px-4 rounded-lg ${activeTab === 'ClaimSubmission' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setActiveTab('ClaimSubmission')}
                  >
                    Claim Submission
                  </button>
                  <button
                    className={`py-2 px-4 rounded-lg ${activeTab === 'Reports' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setActiveTab('Reports')}
                  >
                    Reports
                  </button>
                </div>
              </div>
              {activeTab === 'Purchases' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">Purchases</h2>
                  <table className="w-full bg-white text-gray-700 rounded-lg shadow overflow-hidden">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-3 text-left">ID</th>
                        <th className="px-4 py-3 text-left">Item</th>
                        <th className="px-4 py-3 text-left">Amount</th>
                        <th className="px-4 py-3 text-left">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {purchases.map((purchase) => (
                        <tr key={purchase.id} className="border-b last:border-none hover:bg-gray-50 transition">
                          <td className="px-4 py-3">{purchase.id}</td>
                          <td className="px-4 py-3">{purchase.item}</td>
                          <td className="px-4 py-3">{purchase.amount}</td>
                          <td className="px-4 py-3">{purchase.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === 'ClaimSubmission' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">Claim Submission</h2>
                  <ul className="space-y-3">
                    {insuranceCompanies.map((company, index) => (
                      <li key={index} className="flex items-center justify-between py-3 border-b last:border-none">
                        <span>{company}</span>
                        <button className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition duration-200">Submit</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'Reports' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">Reports</h2>
                  <ul className="space-y-3">
                    {reports.map((report, index) => (
                      <li key={index} className="flex items-center justify-between py-3 border-b last:border-none">
                        <span>{report}</span>
                        <button className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 transition duration-200">View</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
