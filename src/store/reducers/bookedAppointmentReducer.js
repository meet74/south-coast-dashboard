import { ADD_BOOKED_APPOINTMENT, DELETE_BOOKED_APPOINTMENT } from "../actions/bookedAppointmentAction";

const initialState = {
  bookedAppointments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKED_APPOINTMENT: {
      const newAppointment = {
        appointmentDate: action.data.appointmentDate,
        appointmentEmail: action.data.appointmentEmail,
        appointmentID: action.data.appointmentID,
        appointmentMessage: action.data.appointmentMessage,
        appointmentName: action.data.appointmentName,
        appointmentTime: action.data.appointmentTime,
        appoiontmentPhoneNumber: action.data.appoiontmentPhoneNumber,
      };

      const oldAppointments = [...state.bookedAppointments];
      oldAppointments.push(newAppointment)
      return {
        ...state,
        bookedAppointments: oldAppointments,
      };
    }
    case DELETE_BOOKED_APPOINTMENT:
        const oldAppointments = [...state.bookedAppointments];
        const newAppointments = oldAppointments.filter(appo=>appo.appointmentID!==action.id)
        return {
            ...state,
            bookedAppointments: newAppointments,
          };
    default:
      return state;
  }
};
