import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import SideBar from '../../../components/SideBar';
import Topbar from '../../../components/TopBar';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Isagi Yoichi',
    start: new Date(2024, 4, 22, 10, 0), // Month is 0-based, so 4 means May
    end: new Date(2024, 4, 22, 11, 0),
    allDay: false,
  },
  {
    title: 'Nagi Seishiro',
    start: new Date(2024, 4, 24, 10, 0),
    end: new Date(2024, 4, 24, 11, 0),
    allDay: false,
  },
  {
    title: 'Kaiser Brown',
    start: new Date(2024, 4, 26, 10, 0),
    end: new Date(2024, 4, 26, 11, 0),
    allDay: false,
  },
  // Add more events as needed
];

const DayScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100 ">
     <div className='flex'>
        <SideBar/>
    <div className='h-full w-full '>
    <div className="flex-1 px-2">
        <Topbar />
        
      </div>
    <div className='p-10'>
    <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Appointments</h1>
        <button className="bg-[#043840] text-white py-2 px-4 rounded">+ New Appointment</button>
      </div>
      <p className="text-gray-600 mb-4">There is the latest update for the last 7 days. Check now.</p>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Calendar
          localizer={localizer}
          events={events}
          onSelectEvent={(e)=>console.log(e)}
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
