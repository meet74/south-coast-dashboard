import React from 'react';

const TransactionsReport = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Transactions Report</h2>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Payer</th>
            <th className="py-2 px-4 border-b">Payment Method</th>
            <th className="py-2 px-4 border-b">Reference Number</th>
            <th className="py-2 px-4 border-b">Applied To</th>
            <th className="py-2 px-4 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{row.date}</td>
              <td className="py-2 px-4 border-b">{row.payer}</td>
              <td className="py-2 px-4 border-b">{row.paymentMethod}</td>
              <td className="py-2 px-4 border-b">{row.referenceNumber}</td>
              <td className="py-2 px-4 border-b">{row.appliedTo}</td>
              <td className="py-2 px-4 border-b">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsReport;
