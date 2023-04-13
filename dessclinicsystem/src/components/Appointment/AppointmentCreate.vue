<template>
    <div class="container createPatient">
        <h1>Create an Appointment</h1>
        <br />
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
                    <option v-for="option in timeSlots" :key="option.value" :value="option.value">{{ option.label }}
                    </option>
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
                <input v-if="patient" class="form-control" disabled type="text" name="firstName" :value="fullName">
            </div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <!-- <div class="col">
                <label class="form-label">Doctor's Transcript: </label>
            </div>
            <div class="col">
                <textarea row=2 class="form-control" name="doctorTranscript" v-model="appointment.doctorTranscript"></textarea>
            </div> -->
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Patient ID: </label>
            </div>
            <div class="col">
                <input class="form-control" disabled type="text" name="pId" v-model="patient.patientId">
            </div>
            <div class="col"></div>
            <div class="col">
                <label class="form-label">Doctor: </label>
            </div>
            <div class="col">
                <select v-if="doctors" class="form-control" v-model="doctor.dId">
                    <option v-for="doctor in doctors" :key="doctor.dId" :value="doctor.dId">
                        Dr. {{ doctor.dFName }} {{ doctor.dLName }}
                    </option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Mobile: </label>
            </div>
            <div class="col">
                <input class="form-control" disabled type="text" name="mobile" v-model="patient.mobile">
            </div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Email: </label>
            </div>
            <div class="col">
                <input class="form-control" disabled type="text" name="email" v-model="patient.email">
            </div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
        </div>
        <!-- Payment details -->
        <div class="row">
            <div class="col">
                <h1>Payment:</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Payment status: </label>
            </div>
            <div class="col">
                <select class="form-control" v-model="payment.paymentStatus">
                    <option value="Paid">PAID</option>
                    <option value="Pending" select="selected">PENDING</option>
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
                    <option value="AMEX">AMEX</option>
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
                    <option value="AVIVA CANADA">AVIVA CANADA</option>
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
            </div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
        </div>
        <div class="buttons">
            <button class="btn btn-info btn-lg" @click="handleAddAppointmentClick">Book</button>
            <button class="btn btn-info btn-lg" @click="clearForm" id="cancel">Cancel</button>
        </div>
    </div>
</template>

<script>
import AppointmentService from '../../services/AppointmentService'
import InvoiceService from '../../services/InvoiceService'
import DoctorDataService from '@/services/DoctorDataService'

export default {

    name: 'AllAppointments',
    props: {
        intoNewAppoint: {
        },
    },
    data() {
        return {
            appointments: [],
            appointment: {
                visitDate: new Date().toISOString().substr(0, 10),
            },
            patient: {
                firstName: "",
                lastName: ""
            },
            payment: {
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
                dId: ""
            },
            paymentID: 0
        }
    },

    computed: {
        fullName() {
            return this.patient.firstName + ' ' + this.patient.lastName;
        }
    },

    methods: {
        getAppointments() {
            AppointmentService.getAppointments().then((response) => {
                this.appointments = response.data;
            }).catch(error => {
                this.message = error.response.data.message;
                console.log(error.response.data);
            })
        },

        handleAddAppointmentClick(event) {

            if (!this.patient.firstName | !this.appointment.visitTime | !this.doctor.dId) {
                alert("Please select a patient from top left of the screen, select a doctor and visit time before proceeding to book the appointment");
            }
            else {
                event.preventDefault();

                const newAppointment = {
                    "patient": this.patient,
                    "visitDate": this.appointment.visitDate,
                    "visitTime": this.appointment.visitTime,
                    "quickNote": this.appointment.quickNote,
                    "doctor": this.doctor,
                }

                const newInvoice = {
                    "paymentDate": this.payment.currentDate,
                    "method": this.payment.paymentMethod,
                    "amount": this.payment.amount,
                    "status": this.payment.paymentStatus,
                    "insuranceCompany": this.payment.insuranceCompany
                }

                InvoiceService.createInvoice(newInvoice)
                    .then(response => {
                        const newInv = response.data;
                        this.paymentID = response.data.id;
                        console.log("invoice from springboot:");
                        console.log(newInv);

                        console.log("passing to springboot");
                        console.log(newAppointment);

                        AppointmentService.createAppointment(this.paymentID, newAppointment)
                            .then(response => {

                                const newApp = response.data;
                                console.log("coming from to springboot");
                                console.log(newApp);

                                alert("New appointment created");
                                alert("New invoice created");

                                this.$emit('appt-created-event', newApp);
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }

        },

        clearForm(event) {

            event.preventDefault();
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
            DoctorDataService.getDoctors().then((response) => {
                this.doctors = response.data;
            }).catch(error => {
                this.message = error.response.data.message;
                console.log(error.response.data);
            })
        },
    },
    created() {
        this.getAppointments()
    },
    watch: {
        intoNewAppoint() {
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
.container {
    max-width: 800px;
    margin: 0 auto;
}


h1 {
    font-size: 32px;
    margin-bottom: 24px;
    text-align: center;
}

.form-label {
    font-size: 18px;
    font-weight: bold;
}

.form-control {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    padding: 8px 16px;
}

.form-select {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    padding: 8px 16px;
}

.btn {
    height: 48px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 4px;
    margin-right: 16px;
}

.btn-info {
    background-color: #17a2b8;
    color: #fff;
}

.row {
    margin-bottom: 16px;
}

.col {
    padding: 0 8px;
}

.btn-info:hover {
    background-color: green;
    border-color: #117a8b;
    color: #fff;
    transform: translateY(-2px);
}

.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
}</style>