import React, { useState, useEffect } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../config/firebase";
import { add_appointment } from '../../store/actions/appointmentAction';
import { listenForPendingAppointments } from '../../config/firebaseUtils';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Topbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = listenForPendingAppointments((appointments) => {
      const pendingAppointmentData = appointments.filter(data => data.appointmentStatus === "Pending");
      setNotifications(pendingAppointmentData);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleApprove = async (data) => {
    try {
      const appointmentRef = doc(firestore, "appointment", "appointment-data");
      const updatedData = notifications.map(notification =>
        notification.appointmentID === data.appointmentID
          ? { ...notification, appointmentStatus: "Confirmed" }
          : notification
      );

      await updateDoc(appointmentRef, { appointmentData: updatedData });
     
      setNotifications(notifications.filter(notification => notification.appointmentID !== data.appointmentID));
      toast.success("Appointment approved!");
      setShowNotifications(false)
    } catch (error) {
      console.error("Error approving appointment:", error);
    }
  };

  const handleDeny = async (id) => {
    try {
      const appointmentRef = doc(firestore, "appointment", "appointment-data");
      const updatedData = notifications.map(notification =>
        notification.appointmentID === id
          ? { ...notification, appointmentStatus: "Denied" }
          : notification
      );

      await updateDoc(appointmentRef, { appointmentData: updatedData });
      setNotifications(notifications.filter(notification => notification.appointmentID !== id));
      toast.info("Appointment denied.");
      setShowNotifications(false)
    } catch (error) {
      console.error("Error denying appointment:", error);
    }
  };

  return (
    <div className="relative flex justify-between items-center pl-12 p-4 bg-white shadow-md">
      <div className="flex items-center">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search anything here"
          className="outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
        {notifications.length > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full">
              {notifications.length}
            </span>
          )}
          <FaBell className="text-gray-500 cursor-pointer"  size = {26} onClick={handleNotificationClick} />
        
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">Notifications</h3>
              </div>
              <ul className="max-h-64 overflow-y-auto">
                {notifications.length > 0 ? notifications.map((notification) => (
                  <li key={notification.appointmentID} className="p-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{notification.appointmentName}</p>
                        <p className="text-gray-600 text-sm">
                          {notification.appointmentDate} at {notification.appointmentTime}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          className="bg-green-500 text-white px-2 py-1 rounded"
                          onClick={() => handleApprove(notification)}
                        >
                          Approve
                        </button>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded"
                          onClick={() => handleDeny(notification.appointmentID)}
                        >
                          Deny
                        </button>
                      </div>
                    </div>
                  </li>
                )) : <h4 className="text-lg font-light italic p-8 text-center">No Notifications</h4>}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={require("../../assets/images/user.jpeg")}
            alt="User Avatar"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="text-gray-700">Alexandro</span>
        </div>
        <ToastContainer />
      </div>
    
    </div>
  );
};

export default Topbar;
