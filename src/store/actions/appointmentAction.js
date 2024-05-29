export const ADD_APPOINTMENT = "ADD_APPOINTMENT";
export const DELETE_APPOINTMENT = "DELETE_APPOINTMENT";
export const SET_APPOINTMENTS = "SET_APPOINTMENTS";

/**
 * Action creator for adding an appointment.
 *
 * @param {Object} appointment - The appointment data to be added.
 * @returns {Object} The action object with type and payload.
 */
export const add_appointment = (appointment) => ({
  type: ADD_APPOINTMENT,
  payload: appointment,
});

/**
 * Action creator for deleting an appointment.
 *
 * @param {string} appointmentId - The ID of the appointment to be deleted.
 * @returns {Object} The action object with type and payload.
 */
export const deleteAppointment = (appointmentId) => ({
  type: DELETE_APPOINTMENT,
  payload: appointmentId,
});

/**
 * Action creator for setting multiple appointments.
 *
 * @param {Array} appointments - The list of appointments to be set.
 * @returns {Object} The action object with type and payload.
 */
export const setAppointments = (appointments) => ({
  type: SET_APPOINTMENTS,
  payload: appointments,
});
