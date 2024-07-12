import React from 'react';

const SalesReport = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sales Report</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          {/* Add filter elements here */}
        </div>
        <p className="mb-4">This report was generated on Thursday July 11, 2024 at 9:22pm. <a href="#" className="text-blue-600">Load a fresh copy</a></p>
        <h3 className="text-l font-bold mb-2">July 11, 2024</h3>
        <p className="mb-4">Summary - 30 invoices (Thursday July 11, 2024 to Thursday July 11, 2024)</p>
        <table className="min-w-full bg-white border-collapse text-xs">
          <thead>
            <tr>
              <th className="py-3 px-3 border-b-2 border-gray-200">Location</th>
              <th className="py-3 px-3 border-b-2 border-gray-200">Purchase Date</th>
              <th className="py-3 px-3 border-b-2 border-gray-200">Patient</th>
              <th className="py-3 px-3 border-b-2 border-gray-200">Item</th>
              <th className="py-3 px-3 border-b-2 border-gray-200">Staff Member</th>
              <th className="py-3 px-3 border-b-2 border-gray-200">Payer</th>
              <th className="py-3 px-3 border-b-2 border-gray-200">Invoice Date</th>
              <th className="py-3 px-3 border-b-2 border-gray-200">Invoice #</th>
              <th className="py-3 px-3 border-b-2 border-gray-200">Status</th>
              <th className="py-3 px-3 border-b-2 border-gray-200">Subtotal</th>
              <th className="py-3 px-3 border-b-2 border-gray-200">Taxes</th>
              <th className="py-3 px-3 border-b-2 border-gray-200">Total</th>
              <th className="py-3 px-3 border-b-2 border-gray-200">Collected</th>
              <th className="py-3 px-3 border-b-2 border-gray-200">Balance</th>
            </tr>
          </thead>
          <tbody>
            {data.map((invoice, idx) => (
              <tr key={idx} className="border-b last:border-none">
                <td className="py-3 px-3">{invoice.location}</td>
                <td className="py-3 px-3">{invoice.purchaseDate}</td>
                <td className="py-3 px-3 text-blue-600">{invoice.patient}</td>
                <td className="py-3 px-3">{invoice.item}</td>
                <td className="py-3 px-3">{invoice.staffMember}</td>
                <td className="py-3 px-3">{invoice.payer}</td>
                <td className="py-3 px-3">{invoice.invoiceDate}</td>
                <td className="py-3 px-3 text-blue-600">{invoice.invoiceNumber}</td>
                <td className="py-3 px-3">{invoice.status}</td>
                <td className="py-3 px-3">{invoice.subtotal}</td>
                <td className="py-3 px-3">{invoice.taxes}</td>
                <td className="py-3 px-3">{invoice.total}</td>
                <td className="py-3 px-3">{invoice.collected}</td>
                <td className="py-3 px-3">{invoice.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReport;
