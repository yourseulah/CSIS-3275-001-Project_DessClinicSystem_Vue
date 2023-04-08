<template>
    <div class = "container createPatient">
        <h1>Create an Appointment</h1>
        <!-- <h2 v-if="intoNewAppoint">{{intoNewAppoint}}</h2> -->
        <div class="row">
            <div class="col">
                <label class="form-label">Visit Date:</label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="visitDate" v-model="appointment.visitDate">
            </div>
            <div class="col"></div>
            <div class="col">
                <label class="form-label">Quick Note: </label>
            </div>
            <div class="col">
            <textarea row=2 class="form-control" name="quickNote" v-model="appointment.quickNote"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Visit Time: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="visitTime" v-model="appointment.visitTime">
            </div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>

        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Patient Name: </label>
            </div>
            <div class="col">
                <!-- <input class="form-control" type="text" name="firstName" v-model="appointment.patient.firstName" v-model="appointment.patient.lastName"> -->
                <input class="form-control" type="text" name="firstName" :value="fullName">
            </div>
            <div class="col"></div>
            <div class="col">
                <label class="form-label">Doctor's Transcript: </label>
            </div>
            <div class="col">
                <textarea row=2 class="form-control" name="doctorTranscript" v-model="appointment.doctorTranscript"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Patient ID: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="pId" v-model="patient.patientId">
            </div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Mobile: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="mobile" v-model="patient.mobile">
            </div>
            <div class="col"></div>
            <div class="col">
                <label class="form-label">Paymant Status: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="paymentStatus" v-model="appointment.paymentStatus">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Email: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="email" v-model="patient.email">
            </div>
            <div class="col"></div>
            <div class="col">
                <label class="form-label">Amount:</label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="amount" v-model="appointment.amount">
            </div>
        </div>
        <button class="btn btn-info btn-lg" @click="handleAddAppointmentClick">Book</button> <button class="btn btn-info btn-lg" @click="clearForm">Cancel</button>
    </div>
</template>


<script>
    import AppointmentService from '../services/AppointmentService'

    export default {

        name: 'AllAppointments',
        props: {
            intoNewAppoint: {
            },

        },
        data(){
            return {
                appointments : [],
                appointment: {
                    visitDate: "",
                    visitTime: "",
                },
                patient: {
                        firstName: "",
                        lastName: ""
                }
            }
        },
        computed: {
            fullName() {
                return this.patient.firstName + ' ' + this.patient.lastName;
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
            handleAddAppointmentClick(event){
                event.preventDefault();
                const newAppointment = {
                    // "patient" : this.appointment.patient,
                    "patientId" : this.patient.id,
                    "visitDate" : this.appointment.visitDate,
                    "visitTime" : this.appointment.visitTime,
                    // "mobileNumber" : this.appointment.patient.mobile,
                    // "email" : this.appointment.patient.email,
                    "quickNote" : this.appointment.quickNote,
                    // "doctorTranscript" : this.doctorTranscript,
                    // "paymentStatus" : this.paymentStatus,
                }

                AppointmentService.createAppointment(newAppointment)
                    .then(response => {
                        const newApp = response.data;
                        console.log("New Appointment:");
                        console.log(newApp);
                    })
                    .catch(error => {
                        console.log(error);
                    })

                    alert("Submitted");
                    this.$router.push({name:'AppointmentInfo'});
            },
            clearForm(event){
                event.preventDefault();
                this.appointment.visitDate = "",
                this.appointment.visitTime = "",
                this.appointment.quickNote = "",
                this.appointment.doctorTranscript = "",
                this.appointment.paymentStatus = "",
                this.appointment.amount = "",
                this.appointment.patient = ""
            },
        },
        created(){
            this.getAppointments()
        },
        watch: {
            intoNewAppoint(){
                // this.appointment.patient = this.intoNewAppoint;
                this.patient = this.intoNewAppoint;
            }
        }
    }
</script>

<style scoped>
.btn {
    color: white;
}
.createPatient{
    background-color: lightgray;
}

.form-label{
    background-color: white;
}

.form-control{
    background-color: white;
}
</style>