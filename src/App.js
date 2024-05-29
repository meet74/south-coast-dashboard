import React, { useEffect } from 'react';
import './App.css';
import RouterNav from './routes';
import { useDispatch } from 'react-redux';
import { listenForAppointments } from './config/firebaseUtils';
import { setAppointments } from './store/actions/appointmentAction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = listenForAppointments((confirmedAppointments) => {
      console.log("app", confirmedAppointments);
      dispatch(setAppointments(confirmedAppointments));
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <RouterNav />
  );
}

export default App;
