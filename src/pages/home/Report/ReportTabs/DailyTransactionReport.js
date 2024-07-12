import React from 'react';

const DailyTransactionsReport = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Daily Transactions Report</h2>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Number of Transactions</th>
            <th className="py-2 px-4 border-b">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{row.date}</td>
              <td className="py-2 px-4 border-b">{row.numberOfTransactions}</td>
              <td className="py-2 px-4 border-b">{row.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyTransactionsReport;
