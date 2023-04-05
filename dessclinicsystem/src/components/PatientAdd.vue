
<template>
    <div class = "container">
        <H1 class="text-center">Add a Patient</H1>
        Patient ID: <input type="text" name="patientID" v-model="patientId"><BR />
        First Name: <input type="text" name="firstName" v-model="firstName"><BR />
        Last Name: <input type="text" name="lastName" v-model="lastName"><BR />
		Gender: <select name="gender" v-model="gender"><option value="Male" selected>Male</option>
            <option value="Female">Female</option>
            <option value="Unknown">Unknown</option></select><BR />
		Date of Birth: <input type="text" name="dob" v-model="dob"><BR />
		Mobile Phone: <input type="text" name="mobile" v-model="mobile"><BR />
		Email: <input type="text" name="email" v-model="email"><BR />
		Address: <input type="text" name="address" v-model="address"><BR />
		Zip Code: <input type="text" name="zipCode" v-model="zipCode"><BR />
		Surgery: <input type="text" name="surgery" v-model="surgery"><BR />
		Allergies: <input type="text" name="allergies" v-model="allergies"><BR />
		Genetic Disease: <input type="text" name="geneticDisease" v-model="geneticDisease"><BR />
		<button @click="handleAddPatientClick">Add a new patient</button>
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
            }
        }
    }
</script>