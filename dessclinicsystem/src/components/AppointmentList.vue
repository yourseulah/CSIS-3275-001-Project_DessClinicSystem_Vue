<template>
    <div class = "container">
        <h1 class="text-center">Appointment List</h1>
        <table class="table table-striped">
            <thead>
                <th>Appointment ID</th>
                <th>Visit Date</th>
                <th>Visit Time</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Quick Note</th>
                <th>Doctor Transcript</th>
                <th>Payment Status</th>
                <th>Amount</th>
            </thead>
            <tbody>
                <tr v-for = "appointment in appointments" v-bind:key = "appointment.appointmentId">
                    <td> {{ appointment.appointmentId }}</td>
                    <td> {{ appointment.visitDate }}</td>
                    <td> {{ appointment.visitTime }}</td>
                    <td v-if="appointment.patient"> {{ appointment.patient.mobile }}</td>
                    <td v-else></td>
                    <td v-if="appointment.patient"> {{ appointment.patient.email }}</td>
                    <td v-else></td>
                    <td> {{ appointment.quickNote }}</td>
                    <td> {{ appointment.doctorTranscript }}</td>
                    <td> {{ appointment.paymentStatus }}</td>
                    <td> {{ appointment.amount }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    import AppointmentService from '../services/AppointmentService'

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
            }
        },
        created(){
            this.getAppointments()
        }
    }
</script>