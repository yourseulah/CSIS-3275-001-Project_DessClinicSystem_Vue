import http from "../http-common";

class PatientDataService {
    retreivePatient(id) {
        return http.get(`/patients/${id}`);
    }
    retreiveAllPatients(){
        return http.get('/patients');
    }
    deletePatient(id){
        return http.delete(`/patients/${id}`);
    }
    updatePatient(id, updatedPatient){
        return http.put(`/patients/${id}`, updatedPatient);
    }
    addPatient(newPatient){
        return http.post(`/patients`, newPatient);
    }
    searchPatient(queryStr){
        return http.get(`/patients`, {
            params: { searchStr: queryStr},
        });
    }
}

export default new PatientDataService();