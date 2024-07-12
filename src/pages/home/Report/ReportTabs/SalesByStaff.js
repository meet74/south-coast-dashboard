import React from 'react';

const SalesByStaff = ({ data }) => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Sales by Staff Member</h2>
      {data.map((staff, index) => (
        <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">{staff.name}</h3>
          <p className="mb-4">Summary - {staff.invoices.length} invoices</p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-collapse table-auto  text-xs">
              <thead>
                <tr>
                  <th className="py-3 px-3 border-b-2 border-gray-200 bg-gray-100">Location</th>
                  <th className="py-3 px-3 border-b-2 border-gray-200 bg-gray-100">Purchase Date</th>
                  <th className="py-3 px-3 border-b-2 border-gray-200 bg-gray-100">Patient</th>
                  <th className="py-3 px-3 border-b-2 border-gray-200 bg-gray-100">Item</th>
                  <th className="py-3 px-3 border-b-2 border-gray-200 bg-gray-100">Staff Member</th>
                  <th className="py-3 px-3 border-b-2 border-gray-200 bg-gray-100">Payer</th>
                  <th className="py-3 px-3 border-b-2 border-gray-200 bg-gray-100">Invoice Date</th>
                  <th className="py-3 px-3 border-b-2 border-gray-200 bg-gray-100">Invoice #</th>
                  <th className="py-3 px-3 border-b-2 border-gray-200 bg-gray-100">Status</th>
                  <th className="py-3 px-3 border-b-2 border-gray-200 bg-gray-100">Subtotal</th>
                  <th className="py-3 px-3 border-b-2 border-gray-200 bg-gray-100">Taxes</th>
                  <th className="py-3 px-3 border-b-2 border-gray-200 bg-gray-100">Total</th>
                  <th className="py-3 px-3 border-b-2 border-gray-200 bg-gray-100">Collected</th>
                  <th className="py-3 px-3 border-b-2 border-gray-200 bg-gray-100">Balance</th>
                </tr>
              </thead>
              <tbody>
                {staff.invoices.map((invoice, idx) => (
                  <tr key={idx} className="border-b last:border-none">
                    <td className="py-3 px-3 border-b whitespace-wrap">{invoice.location}</td>
                    <td className="py-3 px-3 border-b whitespace-wrap">{invoice.purchaseDate}</td>
                    <td className="py-3 px-3 border-b whitespace-wrap">{invoice.patient}</td>
                    <td className="py-3 px-3 border-b whitespace-wrap">{invoice.item}</td>
                    <td className="py-3 px-3 border-b whitespace-wrap">{invoice.staffMember}</td>
                    <td className="py-3 px-3 border-b whitespace-wrap">{invoice.payer}</td>
                    <td className="py-3 px-3 border-b whitespace-wrap">{invoice.invoiceDate}</td>
                    <td className="py-3 px-3 border-b whitespace-wrap">{invoice.invoiceNumber}</td>
                    <td className="py-3 px-3 border-b whitespace-wrap">{invoice.status}</td>
                    <td className="py-3 px-3 border-b whitespace-wrap">{invoice.subtotal}</td>
                    <td className="py-3 px-3 border-b whitespace-wrap">{invoice.taxes}</td>
                    <td className="py-3 px-3 border-b whitespace-wrap">{invoice.total}</td>
                    <td className="py-3 px-3 border-b whitespace-wrap">{invoice.collected}</td>
                    <td className="py-3 px-3 border-b whitespace-wrap">{invoice.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesByStaff;
