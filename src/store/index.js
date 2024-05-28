import { configureStore, combineReducers } from '@reduxjs/toolkit';
import appointmentReducer from './reducers/appointmentReducer';




const reducers = combineReducers({
  appointment:appointmentReducer
});
// creating Store
const store = configureStore({
  reducer: reducers,
});


export default store;
