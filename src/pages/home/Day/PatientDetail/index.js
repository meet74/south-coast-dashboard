import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SideBar from '../../../../components/SideBar';
import Topbar from '../../../../components/TopBar';
import { useSelector } from 'react-redux';
import { dayScreenPath } from '../../../../routes/pathNames';
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { firestore } from "../../../../config/firebase";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentDetail = () => {
  const { id } = useParams();
  const appointmentData = useSelector(state => state.appointment);
  const [appointment, setAppointment] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchedAppointment = appointmentData.appointments.find(app => app.appointmentID == id);
    console.log("pat",fetchedAppointment);
    setAppointment(fetchedAppointment || null);
  }, [id, appointmentData.appointments]);

  const handleCancel = async () => {
    try {
      const appointmentRef = doc(firestore, "appointment", "appointment-data");
      const updatedData = appointmentData.appointments.map(data =>
        data.appointmentID == id
          ? { ...data, appointmentStatus: "Cancelled" }
          : data
      );
      toast.info("Appointment Cancelled");
      await updateDoc(appointmentRef, { appointmentData: updatedData });
      
      navigate(dayScreenPath)
    } catch (error) {
      console.error("Error denying appointment:", error);
    }
  };



  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <SideBar />
        <div className="flex-grow">
          <Topbar />
          <div className="p-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h1 className="text-3xl font-bold mb-6 text-gray-800">Appointment Details</h1>
              {appointment ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-gray-700">Patient Information</h2>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                      <p className="mb-2"><strong>Name:</strong> {appointment.appointmentName}</p>
                      <p className="mb-2"><strong>Date:</strong> {appointment.appointmentDate}</p>
                      <p className="mb-2"><strong>Time:</strong> {appointment.appointmentTime}</p>
                      <p className="mb-2"><strong>Duration:</strong> {appointment.duration || 'N/A'}</p>
                      <p className="mb-2"><strong>Status:</strong> <span className="text-green-600">{appointment.appointmentStatus}</span></p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-gray-700">Doctor Information</h2>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                      <p className="mb-2"><strong>Doctor:</strong> {appointment.doctor || 'Dr. John Doe'}</p>
                      <p className="mb-2"><strong>Notes:</strong> {appointment.appointmentMessage || 'No additional notes'}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <h2 className="text-xl font-semibold mb-2 text-gray-700">No Information found</h2>
              )}
              {appointment && (
                <div className="mt-8">
                  <button onClick={()=>handleCancel()} className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-200">Cancel Appointment</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppointmentDetail;
