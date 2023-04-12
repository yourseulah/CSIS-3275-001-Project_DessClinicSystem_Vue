# CSIS-3275-001-Project_DessClinicSystem_Vue

## Inital Commit
1. Created Vue.js project 
```
vue create dessclinicsystem
```
2. Install vue-router, axios, bootstrap 
- vue-router : map the path to different vue components 
- axios : a module for making HTTP requests to different endpoints.
- bootstrap : a free and open-source CSS framework 
```
npm install vue-router
npm install axios
npm install bootstrap
```
3. Run the server
```
npm run serve
```
4. Test in browser http://localhost:8081
5. Edit vue_demo\src\router\index.js (for specifying the URL/Component mapping) 
6. Edit vue_demo\src\main.js (importing router)
7. Open vue_demo\public\index.html In Vue.js, there is only one HTML. It is called Single Page Application(SPA)
9. Edit vue_demo\src\App.vue (the master component)
10. Create http-common.js to import axios and declare baseURL of springboot
```
import axios from "axios"
export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    }
})
```
11. Create a directory vue_demo\src\services
12. Create relevant vue_demo\src\services\{}.js and improt http-common.js and methods to call RESTful services
