import { ADD_APPOINTMENT, DELETE_APPOINTMENT, SET_APPOINTMENTS } from "../actions/appointmentAction";

const initialState = {
  appointments: [],
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT: {
      const newAppointment = {
        appointmentDate: action.payload.appointmentDate,
        appointmentEmail: action.payload.appointmentEmail,
        appointmentID: action.payload.appointmentID,
        appointmentMessage: action.payload.appointmentMessage,
        appointmentName: action.payload.appointmentName,
        appointmentTime: action.payload.appointmentTime,
        appointmentPhoneNumber: action.payload.appointmentPhoneNumber,
        appointmentStatus: "Confirmed",
      };

      return {
        ...state,
        appointments: [...state.appointments, newAppointment],
      };
    }

    case DELETE_APPOINTMENT: {
      const updatedAppointments = state.appointments.filter(
        (appointment) => appointment.appointmentID !== action.payload
      );
      
      return {
        ...state,
        appointments: updatedAppointments,
      };
    }
    case SET_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
      };

    default:
      return state;
  }
};

export default appointmentReducer;
