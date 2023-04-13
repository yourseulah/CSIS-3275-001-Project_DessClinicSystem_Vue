<template>
    <div class = "container">
        <h1 class="text-center">Appointment List</h1>
        <table v-if="appointments" class="table table-striped">
            <thead>
                <th>ID</th>
                <th>Delete</th>
                <th>Date</th>
                <th>Time</th>
                <th>Name</th>
                <th>Doctor</th>
                <th>Note</th>
                <th>Invoice ID</th>
                <th>Status</th>
                <th>Amount</th>
            </thead>
            <tbody>
                <tr v-for = "appointment in appointments" v-bind:key = "appointment.appointmentId">
                    <td> {{ appointment.appointmentId }}</td>
                    <td><a class="anchor1" @click="deleteAppointment(appointment.appointmentId)">Delete</a></td>
                    <td> {{ appointment.visitDate }}</td>
                    <td> {{ appointment.visitTime }}</td>
                    <td> <router-link :to="`/patient/`+appointment.patient.id">
                        {{ appointment.patient.firstName }} {{ appointment.patient.lastName }}
                        </router-link>
                    </td>
                    <td>Dr. {{ appointment.doctor.dLName }}</td>
                    <td> {{ appointment.quickNote }}</td>
                    <td> <router-link :to="`/invoice/`+appointment.invoice.id">
                         {{ appointment.invoice.id }} 
                        </router-link>
                    </td>
                    <td> {{ appointment.invoice.status }}</td>
                    <td> {{ appointment.invoice.amount }}</td>
                </tr>
            </tbody>
        </table>
        <h1 v-else>There is no coming appointments!</h1>
    </div>
</template>

<script>
    import AppointmentService from '../services/AppointmentService'
    import DoctorDataService from '@/services/DoctorDataService'

    export default {

        name: 'AllAppointments',
        data(){
            return {
                appointments : [],
                appointment: {},
                patient: {
                    id: "",
                    firstName: "",
                    lastName: ""
                },
                doctors: [],
            }
        },
        props: {
            needRefresh: Object
        },
        methods: {
            getAppointments(){
                AppointmentService.getAppointments().then((response) =>{
                    this.appointments = response.data;

                    console.log(this.appointments);

                }).catch(error => {
                    this.message = error.response.data.message;
                    console.log(error.response.data);
                })
            },

            deleteAppointment(id){
                                
                let result;
                AppointmentService.deleteAppointment(id)
                .then((response) =>{
                    result = response.data;
                }).catch(error => {
                    this.message = error.response.data.message;
                    console.log(error.response.data);
                })
                                
                console.warn(result);
                alert("Appointment Deleted!");

                this.getAppointments()
            },

            getDoctors() {
                DoctorDataService.getDoctors().then((response) =>{
                    this.doctors = response.data;
                    // console.log(this.doctors);
                }).catch(error => {
                    this.message = error.response.data.message;
                    console.log(error.response.data);
                })
            },
        },

        created(){
            this.getAppointments();
        },

        watch: {
            needRefresh() {
                this.getAppointments();
            }
        }
    }
</script>

<style scoped>
.anchor1 {
    color: red;
}
.anchor2 {
    color: #0055ff;
}
</style>