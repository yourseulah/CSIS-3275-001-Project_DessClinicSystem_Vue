import http from "../http-common";

class AppointmentService{
    getAppointments(){
        return http.get('/appointments');
    }
    deleteAppointment(id){
        return http.delete(`/appointments/${id}`);
    }
    createAppointment(newAppointment){
        return http.post(`/appointments`, newAppointment);
    }
}

export default new AppointmentService()