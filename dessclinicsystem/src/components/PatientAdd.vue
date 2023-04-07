<template>
    <div class = "container createPatient">
        <h1>Create Patient Profile</h1>
        <div class="row">
            <div class="col">
                <label class="form-label">Birth Date:</label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="dob" v-model="dob">
            </div>
            <div class="col"></div>
            <div class="col">
                <label class="form-label">Mobile Phone: </label>
            </div>
            <div class="col">
            <input class="form-control" type="text" name="mobile" v-model="mobile">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Gender: </label>
            </div>
            <div class="col">
                <select class="form-select" name="gender" v-model="gender">
                <option value="Male" selected>Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option></select>
            </div>
            <div class="col"></div>
            <div class="col">
                <label class="form-label">Email: </label>
            </div>
            <div class="col">
                <input class="form-control" type="email" name="email" v-model="email">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Patient First Name: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="firstName" v-model="firstName">
            </div>
            <div class="col"></div>
            <div class="col">
                <label class="form-label">Address: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="address" v-model="address">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Patient Last Name: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="lastName" v-model="lastName">
            </div>
            <div class="col"></div>
            <div class="col">
                <label class="form-label">Zip Code: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="zipCode" v-model="zipCode">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Surgery: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="surgery" v-model="surgery">
            </div>
            <div class="col"></div><div class="col"></div><div class="col"></div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Allergies: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="allergies" v-model="allergies">
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
                <input class="form-control" type="text" name="geneticDisease" v-model="geneticDisease">
            </div>
            <div class="col"></div>
            <div class="col">
                <label class="form-label">Patient ID:</label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="patientID" v-model="patientId">
            </div>
        </div>
        <button class="btn btn-info btn-lg" @click="handleAddPatientClick">Save</button> <button class="btn btn-info btn-lg" @click="clearForm">Cancel</button>
    </div>
</template>


<script>
/* eslint-disable no-mixed-spaces-and-tabs */

import PatientDataService from '@/services/PatientDataService';

export default {
        name: 'AllPatients',

        data(){
            return {
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
            };
        },
        methods: {
            handleAddPatientClick(event) {
                event.preventDefault();
                const newPatient = {
                    "patientId" : this.patientId,
                    "firstName" : this.firstName,
		            "lastName" : this.lastName,
		            "gender" : this.gender,
		            "dob" : this.dob,
		            "mobile" : this.mobile,
		            "email" : this.email,
		            "address" : this.address,
		            "zipCode" : this.zipCode,
		            "surgery" : this.surgery,
		            "allergies" : this.allergies,
		            "geneticDisease" : this.geneticDisease
                }

                PatientDataService.addPatient(newPatient)
                    .then(response => {
                        const newPat = response.data;
                        console.log("New Patient:");
                        console.log(newPat);
                    })
                    .catch(error => {
                        console.log(error);
                    })

                    alert("Submitted");
                    this.$router.push({name:'PatientInfo'});
            },
            clearForm(event){
                event.preventDefault();
                this.patientId = "",
                this.firstName = "",
                this.lastName = "",
		        this.gender = "Male",
		        this.dob = "",
		        this.mobile = "",
		        this.email = "",
		        this.address = "",
		        this.zipCode = "",
		        this.surgery = "",
		        this.allergies = "",
		        this.geneticDisease = ""
            }
        }
    }
</script>

<style>
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