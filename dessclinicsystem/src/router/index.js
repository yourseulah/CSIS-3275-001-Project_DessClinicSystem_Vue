import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";
import PatientList from "../components/PatientList.vue";
import AppointmentList from "../components/AppointmentList.vue";
import DoctorList from "../components/DoctorList.vue";
import InvoiceList from "../components/InvoiceList.vue";
import PatientAdd from "../components/PatientAdd.vue";
import PatientUpdate from "../components/PatientUpdate.vue";
import PatientUpdate2 from "../components/PatientUpdate2.vue";
import PatientDelete from "../components/PatientDelete.vue";
import PatientInfo from "../components/PatientInfo.vue";
import PatientSearch from "../components/PatientSearch.vue";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: HomePage
    },
    {
        name: "PatientList",
        path: "/patientlist",
        component: PatientList
    },
    {
        name: "DoctorList",
        path: "/doctorlist",
        component: DoctorList
    },
    {
        name: "AppointmentList",
        path: "/appointmentlist",
        component: AppointmentList
    },
    {
        name: "InvoiceList",
        path: "/invoicelist",
        component: InvoiceList
    },
    {
        name: "PatientAdd",
        path: "/patientadd",
        component: PatientAdd
    },
    {
        name: "PatientDelete",
        path: "/patientdelete",
        component: PatientDelete
    },
    {
        name: "PatientInfo",
        path: "/patientinfo",
        component: PatientInfo
    },
    {
        name: "PatientUpdate",
        path: "/patient/:id",
        component: PatientUpdate
    },
    {
        name: "PatientUpdate2",
        path: "/patient/:id",
        component: PatientUpdate2
    },
    {
        name: "PatientSearch",
        path: "/patientSearch",
        component: PatientSearch
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;