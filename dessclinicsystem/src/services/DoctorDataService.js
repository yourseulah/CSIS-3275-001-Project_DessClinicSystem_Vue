import http from "../http-common";

class DoctorDataService {
    deleteDoctor(id){
        return http.delete(`/doctors/${id}`);
    }
    getDoctors(){
        return http.get('/doctors');
    }
}

export default new DoctorDataService();