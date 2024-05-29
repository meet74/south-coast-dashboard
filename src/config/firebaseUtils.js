import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from './firebase';

export const listenForAppointments = (callback) => {
    const appointmentsCollection = collection(firestore, 'appointment');
    
    return onSnapshot(appointmentsCollection, (snapshot) => {
        const appointmentsList = snapshot.docs.map(doc => doc.data().appointmentData).flat();
        console.log(appointmentsList);
        const confirmedAppointments = appointmentsList.filter(data => 
            data.appointmentStatus === "Confirmed" || data.appointmentStatus === "Cancelled"
        );
        console.log(confirmedAppointments);
        callback(confirmedAppointments);
    });
};

export const listenForPendingAppointments = (callback) => {
    const appointmentsCollection = collection(firestore, 'appointment');
    
    return onSnapshot(appointmentsCollection, (snapshot) => {
        const appointmentsList = snapshot.docs.map(doc => doc.data().appointmentData).flat();
        console.log(appointmentsList);
        const confirmedAppointments = appointmentsList.filter(data => 
            data.appointmentStatus === "Pending"
        );
        console.log(confirmedAppointments);
        callback(confirmedAppointments);
    });
};
