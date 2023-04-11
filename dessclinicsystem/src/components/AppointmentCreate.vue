<template>
    <div class = "container createPatient">
        <h1>Create an Appointment</h1>
        <!-- <h2 v-if="intoNewAppoint">{{intoNewAppoint}}</h2> -->
        <div class="row">
            <div class="col">
                <label class="form-label">Visit Date:</label>
            </div>
            <div class="col">
                <select class="form-control" v-model="appointment.visitDate">
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
                    <select class="form-control" v-model="payment.paymentStatus">
                        <option value="Paid">PAID</option>
                        <option value="Pending">PENDING</option>
                        <option value="Unknown">UNKNOWN</option>
                    </select>
                </div>
                <div class="col"></div>
                <div class="col">
                    <label class="form-label">Payment date: </label>
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
                    <input class="form-control" type="text" name="amount" v-model="appointment.amount">
                </div><div class="col"></div><div class="col"></div><div class="col"></div>
            </div>
        <button class="btn btn-info btn-lg" @click="handleAddAppointmentClick">Book</button> <button class="btn btn-info btn-lg" @click="clearForm">Cancel</button>
    </div>
</template>


<script>
    import AppointmentService from '../services/AppointmentService'
    import InvoiceService from '../services/InvoiceService'


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

                },
                patient: {
                    firstName: "",
                    lastName: ""
                },                
                payment:{
                    currentDate: new Date().toISOString().substr(0, 10),
                    paymentMethod: '',
                    paymentStatus: '',
                    insuranceCompany: '',
                },
                timeSlots: [],
                dates: [],
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
                    // "patient" : this.appointment.patient,
                    "patient" : this.patient,
                    // "patientId" : this.patient.id,
                    "visitDate" : this.appointment.visitDate,
                    "visitTime" : this.appointment.visitTime,
                    // "patientName" : this.patient.firstName+' '+this.patient.lastName,
                    // "mobileNumber" : this.appointment.patient.mobile,
                    // "email" : this.appointment.patient.email,
                    "quickNote" : this.appointment.quickNote,
                    // "doctorTranscript" : this.doctorTranscript,
                    // "paymentStatus" : this.paymentStatus,
                }

                const newInvoice = {
                    "paymentDate": this.payment.currentDate,
                    "method": this.payment.paymentMethod,
                    "amount": this.appointment.amount,
                    "status": this.payment.paymentStatus,
                    "insuranceCompany": this.payment.insuranceCompany,
                    "yearsOfPractice": 10
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
                
                InvoiceService.createInvoice(newInvoice)
                    .then(response =>{
                        const newApp = response.data;
                        const paymentID = response.data.id;
                        console.log(newApp);
                        console.log('Payment id:', paymentID);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                    alert("New invoice created");

                this.$forceUpdate();
                // this.$router.push({name:'AppointmentInfo'});
            },

            clearForm(event){
                event.preventDefault();
                this.appointment.visitDate = "",
                this.appointment.visitTime = "",
                this.appointment.quickNote = "",
                this.appointment.doctorTranscript = "",
                this.appointment.paymentStatus = "",
                this.appointment.amount = "",
                this.appointment.patient = "",
                
                //Payment options
                this.appointment.payment.paymentMethod = "",
                this.appointment.payment.paymentStatus = "",
                this.appointment.payment.insuranceCompany = ""
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
        },
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