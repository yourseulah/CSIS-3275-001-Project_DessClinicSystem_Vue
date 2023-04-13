<template>
    <div class="container">
        <h1 class="text-center">Appointments</h1>
        <table v-if="appointments" class="table table-striped">
            <thead>
                <th>ID</th>
                <th>Date</th>
                <th>Time</th>
                <th>Name</th>
                <th>Doctor</th>
                <th>Note</th>
                <th>Invoice ID</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <tr v-for="appointment in appointments" v-bind:key="appointment.appointmentId">
                    <td> {{ appointment.appointmentId }}</td>

                    <td> {{ (appointment.visitDate) }}</td>
                    <td> {{ formattedTimes(appointment.visitTime) }}</td>
                    <td> <router-link :to="`/patient/`+appointment.patient.id">
                        {{ appointment.patient.firstName }} {{ appointment.patient.lastName }}
                        </router-link>
                    </td>
                    <td>Dr. {{ appointment.doctor.dLName }}</td>
                    <td> {{ appointment.quickNote }}</td>
                    <td> <router-link :to="`/invoice/` + appointment.invoice.id">
                            {{ appointment.invoice.id }}
                        </router-link>
                    </td>
                    <td> {{ appointment.invoice.status }}</td>
                    <td> {{ appointment.invoice.amount }}</td>
                    <td><button class="btn btn-info btn-lg" @click="deleteAppointment(appointment.appointmentId)"
                            id="cancel">Delete</button></td>
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
    data() {
        return {
            appointments: [],
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
        getAppointments() {
            AppointmentService.getAppointments().then((response) => {
                this.appointments = response.data;

                console.log(this.appointments);

            }).catch(error => {
                this.message = error.response.data.message;
                console.log(error.response.data);
            })
        },

        deleteAppointment(id) {

            let result;
            AppointmentService.deleteAppointment(id)
                .then((response) => {
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

            
            formattedTimes(localTimeObject) {
                return localTimeObject.slice(0,5);
            },
        
        },

    created() {
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
table {
    border-collapse: collapse;
    width: 80%;
    margin: auto;
    border: 1px solid #ddd;
    font-size: 18px;
}

th,
td {
    text-align: center;
    padding: 12px;
}

th {
    background-color: #333333;
    color: white;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

td:first-child {
    border-left: 1px solid #ddd;
}

td:last-child {
    border-right: 1px solid #ddd;
}

tr:last-child td {
    border-bottom: 1px solid #ddd;
}

tbody td {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
}

.container {
    margin: 30px auto;
    border: 1px solid #ddd;
    padding: 30px;
}

.btn {
    border-radius: 5px;
    padding: 10px 20px;
    margin-right: 10px;
}

.btn-info {
    background-color: #17a2b8;
    border-color: #17a2b8;
    color: #fff;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.btn-info:hover {
    background-color: green;
    border-color: #117a8b;
    color: #fff;
    transform: translateY(-2px);
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
</style>