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
                <th>Note</th>
                <th>Status</th>
                <th>Amount</th>
            </thead>
            <tbody>
                <tr v-for = "appointment in appointments" v-bind:key = "appointment.appointmentId">
                    <td> {{ appointment.appointmentId }}</td>
                    <td><a class="anchor1" @click="deleteAppointment(appointment.appointmentId)">Delete</a></td>
                    <td> {{ appointment.visitDate }}</td>
                    <td> {{ appointment.visitTime }}</td>
                    <td v-if="appointment.patient"><router-link :to="`/patient/`+appointment.patient.id">{{ appointment.patient.firstName }} {{ appointment.patient.lastName }}</router-link></td>
                    <td v-else></td>
                    <td> {{ appointment.quickNote }}</td>
                    <!-- <td> {{ appointment.doctorTranscript }}</td> -->
                    <td v-if="appointment.paymentStatus===0">Unpaid</td>
                    <td v-else>Paid</td>
                    <!-- <td> {{ appointment.paymentStatus }}</td> -->
                    <td v-if="appointment.amount===0">-</td>
                    <td v-else> {{ appointment.amount }}</td>
                    <!-- <td> {{ appointment.amount }}</td> -->
                </tr>
            </tbody>
        </table>
        <h1 v-else>There is no coming appointments!</h1>
    </div>
</template>


<script>
    import AppointmentService from '../services/AppointmentService'
    // import PatientDataService from '@/services/PatientDataService'

    export default {

        name: 'AllAppointments',
        data(){
            return {
                appointments : []
            }
        },
        methods: {
            getAppointments(){
                AppointmentService.getAppointments().then((response) =>{
                    this.appointments = response.data;
                }).catch(error => {
                    this.message = error.response.data.message;
                    console.log(error.response.data);
                })
            },
            deleteAppointment(id){
                                
                let result;
                result = AppointmentService.deleteAppointment(id);
                                
                console.warn(result);
                alert("Submitted");
                
                this.getAppointments()
            },
        },
        created(){
            this.getAppointments()
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