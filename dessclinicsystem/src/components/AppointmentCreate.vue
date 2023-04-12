<template>
    <div class = "container createPatient">
        <h1>Create an Appointment</h1>
        <br/>
        <!-- <h2 v-if="intoNewAppoint">{{intoNewAppoint}}</h2> -->
        <div class="row">
            <div class="col">
                <label class="form-label">Visit Date:</label>
            </div>
            <div class="col">
                <select class="form-control" :value=appointment.visitDate v-model="appointment.visitDate">
                    <option v-for="option in dates" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
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
                <select class="form-control" v-model="appointment.visitTime">
                    <option v-for="option in timeSlots" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
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
                <input v-if="patient" class="form-control" type="text" name="firstName" :value="fullName">
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
            <div class="col">
                <label class="form-label">Doctor: </label>
            </div>
            <div class="col">
                <select v-if="doctors" class="form-control" v-model="appointment.doctorId">
                    <option v-for="doctor in doctors" :key="doctor.dId" :value="doctor.dId">Dr. {{ doctor.dFName }} {{ doctor.dLName }}</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Mobile: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="mobile" v-model="patient.mobile">
            </div>
            <div class="col"></div><div class="col"></div><div class="col"></div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Email: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="email" v-model="patient.email">
            </div>
            <div class="col"></div><div class="col"></div><div class="col"></div>
        </div>
        <!-- Payment details -->
            <div class="row">
                <div class="col">
                    <h2>Payment:</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label">Payment status: </label>
                </div>
                <div class="col">
                    <select class="form-control" SELECTED value="Pending" v-model="payment.paymentStatus">
                        <option value="Paid">PAID</option>
                        <option value="Pending">PENDING</option>
                        <option value="Unknown">UNKNOWN</option>
                    </select>
                </div>
                <div class="col"></div>
                <div class="col">
                    <label class="form-label">Invoice creation date: </label>
                </div>
                <div class="col">
                <input class="form-control" type="text" name="paymentDate" v-model="payment.currentDate">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label">Payment method: </label>
                </div>
                <div class="col">
                    <select class="form-control" v-model="payment.paymentMethod">
                        <option value="VISA">VISA</option>
                        <option value="MASTERCARD">MASTERCARD</option>
                        <option value="OTHER">OTHER</option>
                    </select>
                </div>
                <div class="col"></div>
                <div class="col">
                    <label class="form-label">Insurance company: </label>
                </div>
                <div class="col">
                    <select class="form-control" v-model="payment.insuranceCompany">
                        <option value="CGC CANADA">CGC CANADA</option>
                        <option value="BC HEALTH">BC HEALTH</option>
                        <option value="OTHER">OTHER</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label">Amount: </label>
                </div>
                <div class="col">
                    <input class="form-control" type="text" name="amount" v-model="payment.amount">
                </div><div class="col"></div><div class="col"></div><div class="col"></div>
            </div>
        <button class="btn btn-info btn-lg" @click="handleAddAppointmentClick">Book</button> <button class="btn btn-info btn-lg" @click="clearForm">Cancel</button>
    </div>
</template>


<script>
    import AppointmentService from '../services/AppointmentService'
    import InvoiceService from '../services/InvoiceService'
    import DoctorDataService from '@/services/DoctorDataService'

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
                    visitDate: new Date().toISOString().substr(0, 10),
                },
                patient: {
                    firstName: "",
                    lastName: ""
                },                
                payment:{
                    currentDate: new Date().toISOString().substr(0, 10),
                    paymentMethod: '',
                    paymentStatus: 'Pending',
                    insuranceCompany: '',
                    payment: ""
                },
                timeSlots: [],
                dates: [],

                doctors: [],
                doctor: {

                },

                paymentID: 0
            }    
        },

        computed: {
            fullName() {
                // if (typeof patient === 'undefined') return "";
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
                    "patient" : this.patient,
                    "visitDate" : this.appointment.visitDate,
                    "visitTime" : this.appointment.visitTime,
                    "quickNote" : this.appointment.quickNote,
                    "doctorId" : this.appointment.doctorId,
                }    

                const newInvoice = {
                    "paymentDate": this.payment.currentDate,
                    "method": this.payment.paymentMethod,
                    "amount": this.payment.amount,
                    "status": this.payment.paymentStatus,
                    "insuranceCompany": this.payment.insuranceCompany
                }

                InvoiceService.createInvoice(newInvoice)
                    .then(response =>{
                        const newApp = response.data;
                        this.paymentID = response.data.id;
                        console.log(newApp);


                            AppointmentService.createAppointment(this.paymentID, newAppointment)
                            .then(response => {
                                const newApp = response.data;
                                console.log("New Appointment:");
                                console.log(newApp);
                            })
                            .catch(error => {
                                console.log(error);
                            })

                            alert("New appointment created");
                            alert("New invoice created");
                            this.$router.push({name:'AppointmentInfo'});

                    })
                    .catch(error => {
                        console.log(error);
                    })
                    
                this.$forceUpdate();
                // this.$router.push({name:'AppointmentInfo'});
            },

            clearForm(event){

                event.preventDefault();
                // this.appointment.visitDate = "",
                this.appointment.visitTime = "",
                this.appointment.quickNote = "",
                this.appointment.doctorTranscript = "",
                this.appointment.patient = "",
                this.appointment.doctorId = ""
                
                //Payment options
                this.payment.paymentMethod = "",
                this.payment.paymentStatus = "Pending",
                this.payment.insuranceCompany = "",
                this.payment.amount = ""
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
            this.getAppointments()
        },
        watch: {
            intoNewAppoint(){
                // this.appointment.patient = this.intoNewAppoint;
                this.patient = this.intoNewAppoint;
            }
        },
        mounted() {

            const startDate = new Date();
            startDate.setHours(9); // Start at 9:00 AM
            startDate.setMinutes(0);

            for (let i = 1; i < 20; i++) {
            const label = startDate.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            });
            const value = label;
            this.timeSlots.push({ label, value });

            startDate.setMinutes(startDate.getMinutes() + 30); // Increment by 30 minutes
            }

            startDate.setHours(0, 0, 0, 0);

            for (let i = 0; i < 30; i++) {
                const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
                const year = date.getFullYear();
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const day = date.getDate().toString().padStart(2, '0');
                const value = `${year}-${month}-${day}`;
                const label = value;
                this.dates.push({ label, value });
            }

            this.getDoctors();
        },
    }
</script>

<style scoped>
.btn {
    color: white;
    margin-right: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.createPatient{
    background-color: lightgray;
}

.form-label{
    background-color: lightgray;
}

.form-control{
    background-color: white;
}
</style>