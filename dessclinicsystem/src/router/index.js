import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";
import PatientList from "../components/PatientList.vue";
import AppointmentInfo from "@/components/AppointmentInfo"
import AppointmentList from "../components/AppointmentList.vue";
import AppointmentCreate from "../components/AppointmentCreate.vue";
import DoctorList from "../components/DoctorList.vue";
import InvoiceList from "../components/InvoiceList.vue";
import PatientInfo from "../components/PatientInfo.vue";
import PatientAdd from "../components/PatientAdd.vue";
import PatientUpdate from "../components/PatientUpdate.vue";
import PatientUpdate2 from "../components/PatientUpdate2.vue";
import PatientDelete from "../components/PatientDelete.vue";
import PatientSearch from "../components/PatientSearch.vue";
import PatientSearch2 from "../components/PatientSearch2.vue";
import PatientDetails from "@/components/PatientDetails";
import InvoiceDetails from "../components/InvoiceDetails";

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
        name: "AppointmentInfo",
        path: "/appointmentinfo",
        component: AppointmentInfo
    },
    {
        name: "AppointmentList",
        path: "/appointmentlist",
        component: AppointmentList
    },
    {
        name: "AppointmentCreate",
        path: "/appointmentcreate",
        component: AppointmentCreate
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
        path: "/patients/:id",
        component: PatientUpdate
    },
    {
        name: "PatientUpdate2",
        path: "/patients2/:id",
        component: PatientUpdate2
    },
    {
        name: "PatientSearch",
        path: "/patientSearch",
        component: PatientSearch
    },
    {
        name: "PatientSearch2",
        path: "/patientSearch2",
        component: PatientSearch2
    },
    {
        name: "PatientDetails",
        path: "/patient/:id",
        component: PatientDetails
    },
    {
        name: "InvoiceDetails",
        path: "/invoice/:id",
        component: InvoiceDetails
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;