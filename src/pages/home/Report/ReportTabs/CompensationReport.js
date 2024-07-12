import React from 'react';

const CompensationReport = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Compensation Report</h2>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">Staff Member</th>
            <th className="py-2 px-4 border-b">Total Compensation</th>
            <th className="py-2 px-4 border-b">Bonus</th>
            <th className="py-2 px-4 border-b">Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{row.staffMember}</td>
              <td className="py-2 px-4 border-b">{row.totalCompensation}</td>
              <td className="py-2 px-4 border-b">{row.bonus}</td>
              <td className="py-2 px-4 border-b">{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompensationReport;
