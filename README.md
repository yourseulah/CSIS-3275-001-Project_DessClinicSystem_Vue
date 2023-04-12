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
10. Create a directory vue_demo\src\services
11. Edit vue_demo\src\services\??? (Use axios to call RESTful services)
