import http from "../http-common";

class AppointmentService{
    getAppointments(){
        return http.get('/appointments');
    }
    deleteAppointment(id){
        return http.delete(`/appointments/${id}`);
    }
}

export default new AppointmentService()