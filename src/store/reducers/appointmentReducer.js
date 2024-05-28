import { ADD_APPOINTMENT } from "../actions/appointmentAction";

const initialState = {
  appointments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT: {
      const newAppointment = {
        appointmentDate: action.data.appointmentDate,
        appointmentEmail: action.data.appointmentEmail,
        appointmentID: action.data.appointmentID,
        appointmentMessage: action.data.appointmentMessage,
        appointmentName: action.data.appointmentName,
        appointmentTime: action.data.appointmentTime,
        appoiontmentPhoneNumber: action.data.appoiontmentPhoneNumber,
      };

      const oldAppointments = [...state.appointments];
      oldAppointments.push(newAppointment)
      return {
        ...state,
        appointments: oldAppointments,
      };
    }
    default:
      return state;
  }
};
