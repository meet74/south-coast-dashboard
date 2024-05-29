import React from 'react';
import { Line,Bar } from 'react-chartjs-2';
import SideBar from '../../../components/SideBar';
import TopNavBar from '../../../components/TopNavBar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const reports = [
  { id: 1, title: 'Daily Summary', value: '150 appointments', icon: '📅' },
  { id: 2, title: 'Monthly Revenue', value: '$12,000', icon: '💰' },
  { id: 3, title: 'New Patients', value: '45', icon: '🩺' },
];

const transactions = [
    { id: 1, date: '2024-05-01', amount: '$100', status: 'Completed' },
    { id: 2, date: '2024-05-02', amount: '$80', status: 'Pending' },
    { id: 3, date: '2024-05-03', amount: '$50', status: 'Completed' },
    // Add more transaction data as needed
  ];

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Monthly Revenue',
      data: [5000, 10000, 15000, 20000, 25000, 30000],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
  ],
};

const barData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Daily Transactions',
        data: [10, 20, 30, 40, 50],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Revenue',
    },
  },
};

const ReportPage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <SideBar />
      <div className="flex flex-col flex-grow">
        <TopNavBar />
        <div className="p-8">
          <div className="bg-white shadow-md rounded-lg mb-8">
            <div className="p-6 border-b">
              <h1 className="text-2xl font-semibold text-gray-800">Reports</h1>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.map((report) => (
                <div key={report.id} className="bg-white shadow p-4 rounded-lg flex items-center">
                  <span className="text-4xl">{report.icon}</span>
                  <div className="ml-4">
                    <h2 className="text-lg font-bold">{report.title}</h2>
                    <p className="text-gray-600">{report.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg mb-8">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-700">Transaction Details</h2>
            </div>
            <div className="p-6">
              <table className="w-full text-left table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b last:border-none hover:bg-gray-50 transition">
                      <td className="px-4 py-2">{transaction.id}</td>
                      <td className="px-4 py-2">{transaction.date}</td>
                      <td className="px-4 py-2">{transaction.amount}</td>
                      <td className="px-4 py-2">{transaction.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-700">Monthly Overview</h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:space-x-6">
                <div className="flex-1">
                  <Line data={data} options={options} />
                </div>
                <div className="flex-1">
                <Bar data={barData} options={options} />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
