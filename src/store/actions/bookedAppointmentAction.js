export const ADD_BOOKED_APPOINTMENT = "ADD_BOOKED_APPOINTMENT"
export const DELETE_BOOKED_APPOINTMENT = "DELETE_BOOKED_APPOINTMENT"

export const book_appointment = (appointment) => {

    return{
        type:ADD_BOOKED_APPOINTMENT,
        appointment
    }
}

export const delete_booked_appointment = (id) =>{

    return{
        type:DELETE_BOOKED_APPOINTMENT,
        id
    }
}