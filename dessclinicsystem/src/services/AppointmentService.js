import axios from "axios"

const APPOINTMENT_API = 'http://localhost:8080/api/appointments'

class AppointmentService{
    getAppointments(){
        return axios.get(APPOINTMENT_API);
    }
}

export default new AppointmentService()