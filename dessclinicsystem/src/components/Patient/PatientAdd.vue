<template>
    <div class="container createPatient">
        <form v-on:submit.prevent="handleSubmit">
            <h1>{{ Action }} Patient Profile</h1>
            <br />
            <div class="row">
                <div class="col">
                    <label class="form-label">Birth Date:</label>
                </div>
                <div class="col">
                    <input class="form-control" type="date" name="dob" v-model="patient.dob">
                </div>
                <div class="col"></div>
                <div class="col">
                    <label class="form-label">Mobile Phone: </label>
                </div>
                <div class="col">
                    <input placeholder="1234567890" class="form-control" type="text" name="mobile" v-model="patient.mobile">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label">Gender: </label>
                </div>
                <div class="col">
                    <select class="form-select" name="gender" v-model="patient.gender">
                        <option value="Male" selected>Male</option>
                        <option value="Female">Female</option>
                        <option value="Unknown">Unknown</option>
                    </select>
                </div>
                <div class="col"></div>
                <div class="col">
                    <label class="form-label">Email: </label>
                </div>
                <div class="col">
                    <input class="form-control" type="email" name="email" v-model="patient.email">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label">Patient First Name: </label>
                </div>
                <div class="col">
                    <input class="form-control" type="text" name="firstName" v-model="patient.firstName">
                </div>
                <div class="col"></div>
                <div class="col">
                    <label class="form-label">Address: </label>
                </div>
                <div class="col">
                    <input class="form-control" type="text" name="address" v-model="patient.address">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label">Patient Last Name: </label>
                </div>
                <div class="col">
                    <input class="form-control" type="text" name="lastName" v-model="patient.lastName">
                </div>
                <div class="col"></div>
                <div class="col">
                    <label class="form-label">Zip Code: </label>
                </div>
                <div class="col">
                    <input class="form-control" type="text" name="zipCode" v-model="patient.zipCode">
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label">Surgery: </label>
                </div>
                <div class="col">
                    <input class="form-control" type="text" name="surgery" v-model="patient.surgery">
                </div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label">Allergies: </label>
                </div>
                <div class="col">
                    <input class="form-control" type="text" name="allergies" v-model="patient.allergies">
                </div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label">Genetic Disease: </label>
                </div>
                <div class="col">
                    <input class="form-control" type="text" name="geneticDisease" v-model="patient.geneticDisease">
                </div>
                <div class="col"></div>
                <div class="col">
                    <label class="form-label">Patient ID:</label>
                </div>
                <div class="col">
                    <input class="form-control" type="text" name="patientID" v-model="patient.patientId">
                </div>
            </div>
            <div class="button-container">
                <button v-if="showCreate" class="btn btn-info btn-lg">Save</button>
                <button v-if="showUpdate" class="btn btn-info btn-lg" @click="handleUpdatePatientClick">Update</button>
                <button class="btn btn-info btn-lg" @click="clearForm" id="cancel">Cancel</button>
            </div>
        </form>
    </div>
</template>


<script>
/* eslint-disable no-mixed-spaces-and-tabs */

import PatientDataService from '@/services/PatientDataService';

export default {
    name: 'AllPatients',

    props: {
        updatePatient: {

        }
    },

    data() {
        return {
            patient: {
                patientId: "",
                firstName: "",
                lastName: "",
                gender: "Male",
                dob: "",
                mobile: "",
                email: "",
                address: "",
                zipCode: "",
                surgery: "",
                allergies: "",
                geneticDisease: "",
                id: "",
            },
            Action: "Create",
            showUpdate: false,
            showCreate: true,
        };
    },
    methods: {

        handleSubmit() {
            if (this.validateForm()) {
                event.preventDefault();
                const newPatient = this.patient;

                console.log(newPatient);

                PatientDataService.addPatient(newPatient)
                    .then(response => {
                        const newPat = response.data;
                        console.log("New Patient:");
                        console.log(newPat);
                    })
                    .catch(error => {
                        console.log(error);
                    })

                alert("Patient is created");
                this.$router.push({ name: 'PatientInfo' });

            } else {
                alert("Please fill in all required fields and ensure that the email and mobile number are in correct format");
            }

        },
        validateForm() {
            if (!this.patient.dob || !this.patient.mobile || !this.patient.gender || !this.patient.email ||
                !this.patient.firstName || !this.patient.lastName || !this.patient.address || !this.patient.zipCode) {
                return false;
            }


            const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if (!emailRegex.test(this.patient.email)) {
                return false;
            }


            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(this.patient.mobile)) {
                return false;
            }

            return true;
        },

        handleAddPatientClick(event) {
            event.preventDefault();
            const newPatient = this.patient;

            console.log(newPatient);

            PatientDataService.addPatient(newPatient)
                .then(response => {
                    const newPat = response.data;
                    console.log("New Patient:");
                    console.log(newPat);
                })
                .catch(error => {
                    console.log(error);
                })

            alert("Patient is created");
            this.$router.push({ name: 'PatientInfo' });
        },
        clearForm(event) {
            event.preventDefault();
            this.patient = ""
            this.showUpdate = false;
            this.showCreate = true;
            this.Action = "Create";
        },
        handleUpdatePatientClick(event) {
            event.preventDefault();
            PatientDataService.updatePatient(this.patient.id, this.patient)
                .then(response => {
                    const updatedPat = response.data;
                    console.log("Updated Patient:");
                    console.log(updatedPat);

                    alert("Patient is updated");
                    this.$router.push({ name: 'PatientInfo' });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    watch: {
        updatePatient() {
            this.patient = this.updatePatient;
            this.showUpdate = true;
            this.showCreate = false;
            this.Action = "Update";
        }
    }
}
</script>

<style scoped>
.container {

    margin: 0 auto;

}

h1 {
    font-size: 36px;
    margin-bottom: 20px;
    text-align: center;
}


.form-label {
    font-weight: bold;
    margin-bottom: 5px;
}


.form-control {
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
}

.form-select {
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
}

.createPatient {
    animation-name: slideIn;
    animation-duration: 0.5s;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
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



form {
    border: 2px solid #ccc;
    padding: 20px;

}

#cancel:hover {
    background-color: red;

}
</style>