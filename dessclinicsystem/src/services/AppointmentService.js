import http from "../http-common";

class AppointmentService{
    getAppointments(){
        return http.get('/appointments');
    }
    deleteAppointment(id){
        return http.delete(`/appointments/${id}`);
    }
    createAppointment(paymentID, newAppointment){
        return http.post(`/appointments/${paymentID}`, newAppointment);
    }
}

export default new AppointmentService()