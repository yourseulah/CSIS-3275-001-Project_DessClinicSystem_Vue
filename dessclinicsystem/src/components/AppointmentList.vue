<template>
    <div class = "container">
        <H1 class="text-center">Appointment List</H1>
        <table class="table table-striped">
            <thead>
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
                    <td> {{ appointment.visitDate }}</td>
                    <td> {{ appointment.visitTime }}</td>
                    <td> {{ appointment.mobileNumber }}</td>
                    <td> {{ appointment.email }}</td>
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