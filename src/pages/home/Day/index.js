import React, { useState,useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import SideBar from "../../../components/SideBar";
import Topbar from "../../../components/TopBar";
import { useSelector } from "react-redux";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Isagi Yoichi",
    start: new Date(2024, 4, 22, 10, 0), // Month is 0-based, so 4 means May
    end: new Date(2024, 4, 22, 11, 0),
    allDay: false,
  },
  {
    title: "Nagi Seishiro",
    start: new Date(2024, 4, 24, 10, 0),
    end: new Date(2024, 4, 24, 11, 0),
    allDay: false,
  },
  {
    title: "Kaiser Brown",
    start: new Date(2024, 4, 26, 10, 0),
    end: new Date(2024, 4, 26, 11, 0),
    allDay: false,
  },
  // Add more events as needed
];

const DayScreen = () => {
  const [eventData, seteventData] = useState(events);
  const appointmentData = useSelector((state) => state.appointment);
  

  const addOneHour = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    const date = new Date();
    date.setHours(hours + 1, minutes);
    return date.toTimeString().slice(0, 5);
  };
 


  const convertData = (data) => {
    const tempEvents = [];
    
    if (data) {
      data.forEach((element) => {
        const endDate = addOneHour(element.appointmentTime)
        console.log(element.appointmentDate.split("-"))
        tempEvents.push({
          title: element.appointmentName,
          start: new Date(element.appointmentDate.split("-")[0],element.appointmentDate.split("-")[1], element.appointmentDate.split("-")[2], element.appointmentTime.split(":")[0], element.appointmentTime.split(":")[1]),
          end: new Date(element.appointmentDate.split("-")[0],element.appointmentDate.split("-")[1], element.appointmentDate.split("-")[2], endDate.split(":")[0], endDate.split(":")[1]),
          allDay: false,
        });
      });
      console.log("temo",tempEvents);
      seteventData(tempEvents)
    }
  };

  useEffect(() => {
    if (appointmentData) {
      convertData(appointmentData.appointments)
    }
  
   
  }, [appointmentData.appointments])
  




  

  console.log(appointmentData);
  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="flex">
        <SideBar />
        <div className="h-full w-full ">
          <div className="flex-1">
            <Topbar />
          </div>
          <div className="p-10">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold">Appointments</h1>
              <button className="bg-[#043840] text-white py-2 px-4 rounded">
                + New Appointment
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              There is the latest update for the last 7 days. Check now.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Calendar
                localizer={localizer}
                events={eventData}
                onSelectEvent={(e) => console.log(e)}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 700 }}
                className="bg-white p-4 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayScreen;
