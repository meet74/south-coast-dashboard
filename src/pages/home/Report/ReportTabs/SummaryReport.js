import React from 'react';

const SummaryReport = ({data}) => {
    
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Summary Report</h2>
      <table className="min-w-full bg-white text-xs">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-3 border-b">Location</th>
            <th className="py-2 px-3 border-b">Purchase Date</th>
            <th className="py-2 px-3 border-b">Patient</th>
            <th className="py-2 px-3 border-b">Item</th>
            <th className="py-2 px-3 border-b">Staff Member</th>
            <th className="py-2 px-3 border-b">Payer</th>
            <th className="py-2 px-3 border-b">Invoice Date</th>
            <th className="py-2 px-3 border-b">Invoice #</th>
            <th className="py-2 px-3 border-b">Status</th>
            <th className="py-2 px-3 border-b">Subtotal</th>
            <th className="py-2 px-3 border-b">Taxes</th>
            <th className="py-2 px-3 border-b">Total</th>
            <th className="py-2 px-3 border-b">Collected</th>
            <th className="py-2 px-3 border-b">Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-3 border-b">{row.location}</td>
              <td className="py-2 px-3 border-b">{row.purchaseDate}</td>
              <td className="py-2 px-3 border-b">{row.patient}</td>
              <td className="py-2 px-3 border-b">{row.item}</td>
              <td className="py-2 px-3 border-b">{row.staffMember}</td>
              <td className="py-2 px-3 border-b">{row.payer}</td>
              <td className="py-2 px-3 border-b">{row.invoiceDate}</td>
              <td className="py-2 px-3 border-b">{row.invoiceNumber}</td>
              <td className="py-2 px-3 border-b">{row.status}</td>
              <td className="py-2 px-3 border-b">{row.subtotal}</td>
              <td className="py-2 px-3 border-b">{row.taxes}</td>
              <td className="py-2 px-3 border-b">{row.total}</td>
              <td className="py-2 px-3 border-b">{row.collected}</td>
              <td className="py-2 px-3 border-b">{row.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SummaryReport;
