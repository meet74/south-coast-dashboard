import React, { useState,useEffect } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import { add_appointment } from '../../store/actions/appointmentAction';
import { useDispatch } from 'react-redux';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../config/firebase"; // Ensure your Firebase config is correctly imported

const Topbar = () => {

  useEffect(() => {
    const fetchAppointments = async () => {
      const appointmentsCollection = collection(firestore, "appointment");
      const appointmentsSnapshot = await getDocs(appointmentsCollection);
      const appointmentsList = appointmentsSnapshot.docs.map(doc => doc.data());
      console.log(appointmentsList[0].appointmentData);
     
      setNotifications(appointmentsList[0].appointmentData);
    };

    fetchAppointments();
  }, []);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications,setNotifications] = useState([]);
  const dispatch = useDispatch();

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleApprove = (data) => {
    dispatch(add_appointment(data))
    setShowNotifications(false)
   
  };
  console.log("topbar",notifications);

  const handleDeny = (id) => {
    console.log(`Denied appointment ID: ${id}`);
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
          <FaBell className="text-gray-500 cursor-pointer" onClick={handleNotificationClick} />
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">Notifications</h3>
              </div>
              <ul className="max-h-64 overflow-y-auto">
                {notifications.map((notification) => (
                  <li key={notification.id} className="p-4 border-b border-gray-200">
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
                ))}
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
      </div>
    </div>
  );
};

export default Topbar;
