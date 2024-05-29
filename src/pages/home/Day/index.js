import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "../../../components/SideBar";
import Topbar from "../../../components/TopBar";
import { appointmentDetaiScreenPath } from "../../../routes/pathNames";

const localizer = momentLocalizer(moment);

const DayScreen = () => {
  const [eventData, setEventData] = useState([]);
  const appointmentData = useSelector((state) => state.appointment);
  const navigate = useNavigate();

  const addOneHour = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    const date = new Date();
    date.setHours(hours + 1, minutes);
    return date.toTimeString().slice(0, 5);
  };

  const convertData = (data) => {
    var tempEvents = []
    if (data) {
       data.map((element) => {
        const endDate = addOneHour(element.appointmentTime);
        tempEvents.push({
          id: element.appointmentID,
          title: element.appointmentName,
          start: new Date(
            element.appointmentDate.split("-")[0],
            element.appointmentDate.split("-")[1] - 1,
            element.appointmentDate.split("-")[2],
            element.appointmentTime.split(":")[0],
            element.appointmentTime.split(":")[1]
          ),
          end: new Date(
            element.appointmentDate.split("-")[0],
            element.appointmentDate.split("-")[1] - 1,
            element.appointmentDate.split("-")[2],
            endDate.split(":")[0],
            endDate.split(":")[1]
          ),
          allDay: false,
          status: element.appointmentStatus,
        })

      });
      setEventData(tempEvents);
    }
  };

  useEffect(() => {
    if (appointmentData) {
      convertData(appointmentData.appointments);
    }
  }, [appointmentData.appointments]);

  const eventStyleGetter = (event) => {
    const backgroundColor = event.status === "Confirmed" ? "green" : "red";
    const style = {
      backgroundColor,
      borderRadius: "5px",
      opacity: 0.8,
      color: "white",
      border: "0px",
      display: "block",
    };
    return {
      style,
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      <div className="flex-grow">
        <Topbar />
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
              onSelectEvent={(e) => navigate(`${appointmentDetaiScreenPath}/${e.id}`)}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 700 }}
              className="bg-white p-4 rounded-lg shadow-md"
              eventPropGetter={eventStyleGetter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayScreen;
