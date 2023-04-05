import http from "../http-common.js";

class LoginService {
    Login(data){
        return http.post("/login", data);
    }
}

export default new LoginService();