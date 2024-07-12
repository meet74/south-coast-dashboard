import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_appointment } from '../../../../store/actions/appointmentAction';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { firestore } from '../../../../config/firebase';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from '../../../../components/SideBar';
import Topbar from '../../../../components/TopBar';
import { useNavigate } from 'react-router-dom';
import { dayScreenPath } from '../../../../routes/pathNames';

const AddAppointment = () => {
  const [formData, setFormData] = useState({
    appointmentName: '',
    appointmentEmail: '',
    appointmentPhone: '',
    appointmentDate: new Date(),
    appointmentTime: '',
    appointmentMessage: '',
  });
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCurrentDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const getRoundedTime = (inputtime) => {
    inputtime.setMinutes(inputtime.getMinutes() < 30 ? 0 : 60);
    inputtime.setSeconds(0);
    inputtime.setMilliseconds(0);
    return inputtime.toTimeString().slice(0, 5);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
   
    setFormData((prevState) => ({
      ...prevState,
      appointmentDate: date,
    }));
  };

  const handleTimeChange = (e) => {
    const time = e.target.value;
    const roundedTime = getRoundedTime(new Date(`1970-01-01T${time}:00`));
    setFormData((prevState) => ({
      ...prevState,
      appointmentTime: roundedTime,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentID = `apt-${Date.now()}`;
    const currentDate = getCurrentDate(formData.appointmentDate);
    console.log("date",currentDate);
    const newAppointment = { ...formData,appointmentDate:currentDate, appointmentID, appointmentStatus: 'Confirmed' };

    try {
      const appointmentRef = doc(firestore, 'appointment', 'appointment-data');
      await updateDoc(appointmentRef, {
        appointmentData: arrayUnion(newAppointment),
      });

     
      navigate(dayScreenPath);
      toast.success('Appointment added successfully!');
      setFormData({
        appointmentName: '',
        appointmentEmail: '',
        appointmentPhone: '',
        appointmentDate: new Date(),
        appointmentTime: '',
        appointmentMessage: '',
      });
    } catch (error) {
      toast.error('Error adding appointment.');
      console.error('Error adding appointment:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      <div className="flex-grow">
        <Topbar />
        <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
          <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Add New Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="appointmentName" className="block text-sm font-medium text-gray-700">Patient Name</label>
                <input
                  type="text"
                  name="appointmentName"
                  value={formData.appointmentName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="appointmentEmail" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="appointmentEmail"
                  value={formData.appointmentEmail}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="appointmentPhone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="appointmentPhone"
                  value={formData.appointmentPhone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="(123) 456-7890"
                  required
                />
              </div>
              <div>
                <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700">Appointment Date</label>
                <DatePicker
                  selected={new Date(formData.appointmentDate)}
                  onChange={handleDateChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700">Appointment Time</label>
                <input
                  type="time"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleTimeChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="appointmentMessage" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="appointmentMessage"
                  value={formData.appointmentMessage}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Please provide any relevant details..."
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit" className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Add Appointment
                </button>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
