import http from "../http-common";

class DoctorDataService {
    deleteDoctor(id){
        return http.delete(`/doctors/${id}`);
    }
    getDoctors(){
        return http.get('/doctors');
    }
    addDoctor(newDoctor){
        return http.post(`/doctors`, newDoctor);
    }
    updateDoctor(id, updatedDoctor){
        return http.put(`/doctors/${id}`, updatedDoctor);
    }
}

export default new DoctorDataService();