import React, { useState } from 'react';
import Tabs from './Tabs';
import SummaryReport from './ReportTabs/SummaryReport';
import SalesByStaffReport from './ReportTabs/SalesByStaff';
import TransactionsReport from './ReportTabs/TransactionReport';
import DailyTransactionsReport from './ReportTabs/DailyTransactionReport';
import CompensationReport from './ReportTabs/CompensationReport';
import SideBar from '../../../components/SideBar';
import Topbar from '../../../components/TopBar';
import SalesReport from './ReportTabs/SalesReport';
import ReportChart from './ReportTabs/ReportCharts';

const summaryData = [
  {
    location: 'KWIC Physiotherapy',
    purchaseDate: 'July 11, 2024',
    patient: 'Goran Djukanovic',
    item: 'WSIB MSK POC Care and Outcome Report',
    staffMember: 'Maharshi Trivedi',
    payer: 'WSIB',
    invoiceDate: 'July 11, 2024',
    invoiceNumber: '7940-C01',
    status: 'Paid',
    subtotal: '$50.00',
    taxes: '$0.00',
    total: '$50.00',
    collected: '$50.00',
    balance: '$0.00',
  },
  {
    location: 'KWIC Physiotherapy',
    purchaseDate: 'July 11, 2024',
    patient: 'Goran Djukanovic',
    item: 'WSIB MSK POC Care and Outcome Report',
    staffMember: 'Maharshi Trivedi',
    payer: 'WSIB',
    invoiceDate: 'July 11, 2024',
    invoiceNumber: '7940-C01',
    status: 'Paid',
    subtotal: '$50.00',
    taxes: '$0.00',
    total: '$50.00',
    collected: '$50.00',
    balance: '$0.00',
  },
  {
    location: 'KWIC Physiotherapy',
    purchaseDate: 'July 11, 2024',
    patient: 'Goran Djukanovic',
    item: 'WSIB MSK POC Care and Outcome Report',
    staffMember: 'Maharshi Trivedi',
    payer: 'WSIB',
    invoiceDate: 'July 11, 2024',
    invoiceNumber: '7940-C01',
    status: 'Paid',
    subtotal: '$50.00',
    taxes: '$0.00',
    total: '$50.00',
    collected: '$50.00',
    balance: '$0.00',
  },
  {
    location: 'KWIC Physiotherapy',
    purchaseDate: 'July 11, 2024',
    patient: 'Goran Djukanovic',
    item: 'WSIB MSK POC Care and Outcome Report',
    staffMember: 'Maharshi Trivedi',
    payer: 'WSIB',
    invoiceDate: 'July 11, 2024',
    invoiceNumber: '7940-C01',
    status: 'Paid',
    subtotal: '$50.00',
    taxes: '$0.00',
    total: '$50.00',
    collected: '$50.00',
    balance: '$0.00',
  },
  // Add more entries as needed
];

const salesByStaffData = [
  {
    name: 'Maharshi Trivedi',
    invoices: [
      {
        location: 'KWIC Physiotherapy',
        purchaseDate: 'Thursday July 11, 2024',
        patient: 'Goran Djukanovic',
        item: 'WSIB MSK POC Care and Outcome Report',
        staffMember: 'Maharshi Trivedi',
        payer: 'WSIB',
        invoiceDate: 'Thursday July 11, 2024',
        invoiceNumber: '#7940-C01',
        status: 'Paid',
        subtotal: '$50.00',
        taxes: '$0.00',
        total: '$50.00',
        collected: '$50.00',
        balance: '$0.00',
      },
      // Add more invoices for Maharshi Trivedi
    ],
  },
  {
    name: 'Mr. Aaditya Shastri',
    invoices: [
      {
        location: 'KWIC Physiotherapy',
        purchaseDate: 'Thursday July 11, 2024',
        patient: 'Anne Kinney',
        item: 'Home Visit Subsequent treatment',
        staffMember: 'Mr. Aaditya Shastri',
        payer: 'Patient',
        invoiceDate: 'Thursday July 11, 2024',
        invoiceNumber: '#7942-P01',
        status: 'Unpaid',
        subtotal: '$97.35',
        taxes: '$12.65 HST',
        total: '$110.00',
        collected: '$0.00',
        balance: '$110.00',
      },
      // Add more invoices for Mr. Aaditya Shastri
    ],
  },
  // Add more staff members and their invoices
];

const transactionsData = [
  {
    date: 'July 11, 2024',
    payer: 'Sunlife',
    paymentMethod: 'Insurer Direct deposit',
    referenceNumber: '12345',
    appliedTo: 'Invoice #7939-C01',
    amount: '$100.00',
  },
  {
    date: 'July 11, 2024',
    payer: 'Sunlife',
    paymentMethod: 'Insurer Direct deposit',
    referenceNumber: '12345',
    appliedTo: 'Invoice #7939-C01',
    amount: '$100.00',
  },
  {
    date: 'July 11, 2024',
    payer: 'Sunlife',
    paymentMethod: 'Insurer Direct deposit',
    referenceNumber: '12345',
    appliedTo: 'Invoice #7939-C01',
    amount: '$100.00',
  },
  {
    date: 'July 11, 2024',
    payer: 'Sunlife',
    paymentMethod: 'Insurer Direct deposit',
    referenceNumber: '12345',
    appliedTo: 'Invoice #7939-C01',
    amount: '$100.00',
  },
  // Add more entries as needed
];

const dailyTransactionsData = [
  {
    date: 'July 11, 2024',
    numberOfTransactions: 15,
    totalAmount: '$1500.00',
  },
  {
    date: 'July 11, 2024',
    numberOfTransactions: 15,
    totalAmount: '$1500.00',
  },
  {
    date: 'July 11, 2024',
    numberOfTransactions: 15,
    totalAmount: '$1500.00',
  },
  {
    date: 'July 11, 2024',
    numberOfTransactions: 15,
    totalAmount: '$1500.00',
  },
  // Add more entries as needed
];

const compensationData = [
  {
    staffMember: 'Maharshi Trivedi',
    totalCompensation: '$1000.00',
    bonus: '$200.00',
    total: '$1200.00',
  },
  {
    staffMember: 'Maharshi Trivedi',
    totalCompensation: '$1000.00',
    bonus: '$200.00',
    total: '$1200.00',
  },
  {
    staffMember: 'Maharshi Trivedi',
    totalCompensation: '$1000.00',
    bonus: '$200.00',
    total: '$1200.00',
  },
  {
    staffMember: 'Maharshi Trivedi',
    totalCompensation: '$1000.00',
    bonus: '$200.00',
    total: '$1200.00',
  },
  // Add more entries as needed
];

const salesData = [
  {
    location: 'KWIC Physiotherapy',
    purchaseDate: 'Thursday July 11, 2024',
    patient: 'Goran Djukanovic',
    item: 'WSIB MSK POC Care and Outcome Report',
    staffMember: 'Maharshi Trivedi',
    payer: 'WSIB',
    invoiceDate: 'Thursday July 11, 2024',
    invoiceNumber: '#7940-C01',
    status: 'Paid',
    subtotal: '$50.00',
    taxes: '$0.00',
    total: '$50.00',
    collected: '$50.00',
    balance: '$0.00',
  },
  {
    location: 'KWIC Physiotherapy',
    purchaseDate: 'Thursday July 11, 2024',
    patient: 'Sierra Hansen',
    item: 'MIG Block2 (5-8weeks)',
    staffMember: 'Maharshi Trivedi',
    payer: 'Wawanesa Insurance',
    invoiceDate: 'Thursday July 11, 2024',
    invoiceNumber: '#7941-C01',
    status: 'No Charge',
    subtotal: '$0.00',
    taxes: '$0.00',
    total: '$0.00',
    collected: '$0.00',
    balance: '$0.00',
  },
  // Add more sales data as needed
];


const ReportPage = () => {
  const [activeTab, setActiveTab] = useState('Reports');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'Reports':
        return <ReportChart />;
      case 'Summary':
        return <SummaryReport data={summaryData}/>;
      case 'Sales':
        return <SalesReport data={salesData}/>;
      case 'Sales by Staff':
        return <SalesByStaffReport data={salesByStaffData}/>;
      case 'Transactions':
        return <TransactionsReport data={transactionsData}/>;
      case 'Daily Transactions':
        return <DailyTransactionsReport data={dailyTransactionsData}/>;
      case 'Compensation':
        return <CompensationReport data={compensationData}/>;
      default:
        return <SummaryReport data={summaryData}/>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      <div className="flex-grow">
        <Topbar />
        <div className="p-6">
          <Tabs
            tabs={['Reports','Summary','Sales', 'Sales by Staff', 'Transactions', 'Daily Transactions', 'Compensation']}
            onSelect={setActiveTab}
          />
          {renderActiveTab()}
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
