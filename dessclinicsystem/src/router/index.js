import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";
import PatientList from "../components/Patient/PatientList.vue";
import AppointmentInfo from "@/components/Appointment/AppointmentInfo";
import AppointmentList from "../components/Appointment/AppointmentList.vue";
import DoctorList from "../components/Doctor/DoctorList.vue";
import InvoiceList from "../components/Invoice/InvoiceList.vue";
import PatientInfo from "../components/Patient/PatientInfo.vue";
import PatientDetails from "@/components/Patient/PatientDetails";
import InvoiceDetails from "../components/Invoice/InvoiceDetails";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
  },
  {
    name: "PatientList",
    path: "/patientlist",
    component: PatientList,
  },
  {
    name: "DoctorList",
    path: "/doctorlist",
    component: DoctorList,
  },
  {
    name: "AppointmentInfo",
    path: "/appointmentinfo",
    component: AppointmentInfo,
  },
  {
    name: "AppointmentList",
    path: "/appointmentlist",
    component: AppointmentList,
  },
  {
    name: "InvoiceList",
    path: "/invoicelist",
    component: InvoiceList,
  },
  {
    name: "PatientInfo",
    path: "/patientinfo",
    component: PatientInfo,
  },
  {
    name: "PatientDetails",
    path: "/patient/:id",
    component: PatientDetails,
  },
  {
    name: "InvoiceDetails",
    path: "/invoice/:id",
    component: InvoiceDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
