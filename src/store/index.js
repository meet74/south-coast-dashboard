import { configureStore, combineReducers } from '@reduxjs/toolkit';
import appointmentReducer from './reducers/appointmentReducer';
import bookedAppointmentReducer from './reducers/bookedAppointmentReducer';




const reducers = combineReducers({
  appointment:appointmentReducer,
  bookedAppointment:bookedAppointmentReducer
});
// creating Store
const store = configureStore({
  reducer: reducers,
});


export default store;
