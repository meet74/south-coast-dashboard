import React,{useEffect,useState} from "react";
import SideBar from "../../../components/SideBar";


import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import Topbar from "../../../components/TopBar";
import { useDispatch } from "react-redux";
import { add_appointment } from "../../../store/actions/appointmentAction";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {

  

  const data = {
    labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"],
    datasets: [
      {
        label: "New Patients",
        data: [20, 30, 40, 50, 60, 70, 80],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Old Patients",
        data: [10, 20, 30, 40, 50, 60, 70],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Patients Survey",
      },
    },
  };

  const doughnutData = {
    labels: ["Face To Face", "E-Consult", "Available"],
    datasets: [
      {
        data: [100, 50, 99],
        backgroundColor: ["#FF6384", "#36A2EB", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#4BC0C0"],
        borderColor: ["#ffffff", "#ffffff", "#ffffff"],
        borderWidth: 2,
      },
    ],
  };

  const doughnutOptions = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
      title: {
        display: true,
        text: "Appointment Review",
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
    cutout: "60%",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <SideBar />
        <div className="flex-grow">
          <Topbar />
          <div className="p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg">Today's Patients</h2>
                <p className="text-3xl font-bold">231</p>
                <p>18% Higher Than Last Month</p>
              </div>
              <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg">Appointments</h2>
                <p className="text-3xl font-bold">122</p>
                <p>21% Higher Than Last Month</p>
              </div>
              <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg">Today's Operations</h2>
                <p className="text-3xl font-bold">28</p>
                <p>37% Higher Than Last Month</p>
              </div>
              <div className="bg-orange-500 text-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg">Online Appointment</h2>
                <p className="text-3xl font-bold">42</p>
                <p>10% Higher Than Last Month</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4">Patients Survey</h2>
                <div className="h-64 md:h-80 rounded-lg">
                  <Line data={data} options={options} />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4">Appointment Review</h2>
                <div className="h-80 flex items-center justify-center rounded-lg">
                  <Doughnut data={doughnutData} options={doughnutOptions} />
                </div>
                <button className="mt-4 w-full py-2 bg-[#043840] text-white rounded-md">
                  Modify Availability
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4">Today's Appointment</h2>
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="py-2">Patient Name</th>
                      <th className="py-2">Gender</th>
                      <th className="py-2">Last Visit</th>
                      <th className="py-2">Diseases</th>
                      <th className="py-2">Report</th>
                      <th className="py-2">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2">John Doe</td>
                      <td className="py-2">Male</td>
                      <td className="py-2">12/05/2016</td>
                      <td className="py-2">
                        <span className="bg-red-200 text-red-600 py-1 px-2 rounded">
                          Fever
                        </span>
                      </td>
                      <td className="py-2">
                        <a href="#" className="text-blue-500">
                          Report
                        </a>
                      </td>
                      <td className="py-2">
                        <button className="bg-blue-500 text-white py-1 px-3 rounded">
                          Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">Sarah Smith</td>
                      <td className="py-2">Female</td>
                      <td className="py-2">12/05/2016</td>
                      <td className="py-2">
                        <span className="bg-green-200 text-green-600 py-1 px-2 rounded">
                          Cholera
                        </span>
                      </td>
                      <td className="py-2">
                        <a href="#" className="text-blue-500">
                          Report
                        </a>
                      </td>
                      <td className="py-2">
                        <button className="bg-blue-500 text-white py-1 px-3 rounded">
                          Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">Airi Satou</td>
                      <td className="py-2">Male</td>
                      <td className="py-2">12/05/2016</td>
                      <td className="py-2">
                        <span className="bg-yellow-200 text-yellow-600 py-1 px-2 rounded">
                          Jaundice
                        </span>
                      </td>
                      <td className="py-2">
                        <a href="#" className="text-blue-500">
                          Report
                        </a>
                      </td>
                      <td className="py-2">
                        <button className="bg-blue-500 text-white py-1 px-3 rounded">
                          Details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4">Patients Group</h2>
                <ul>
                  <li className="py-2 flex justify-between">
                    <span>Cholesterol</span>
                    <span>5 Patients</span>
                  </li>
                  <li className="py-2 flex justify-between">
                    <span>Diabetic</span>
                    <span>14 Patients</span>
                  </li>
                  <li className="py-2 flex justify-between">
                    <span>Low Blood Pressure</span>
                    <span>10 Patients</span>
                  </li>
                  <li className="py-2 flex justify-between">
                    <span>Hypertension</span>
                    <span>21 Patients</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
