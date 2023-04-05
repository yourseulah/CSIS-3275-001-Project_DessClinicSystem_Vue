
<template>
    <div class = "container">
        <h1 class="text-center">Add a Patient</h1>
        Patient ID: <input type="text" name="patientID" v-model="patientId"><br />
        First Name: <input type="text" name="firstName" v-model="firstName"><br />
        Last Name: <input type="text" name="lastName" v-model="lastName"><br />
		Gender: <select name="gender" v-model="gender"><option value="Male" selected>Male</option>
            <option value="Female">Female</option>
            <option value="Unknown">Unknown</option></select><br />
		Date of Birth: <input type="text" name="dob" v-model="dob"><br />
		Mobile Phone: <input type="text" name="mobile" v-model="mobile"><br />
		Email: <input type="text" name="email" v-model="email"><br />
		Address: <input type="text" name="address" v-model="address"><br />
		Zip Code: <input type="text" name="zipCode" v-model="zipCode"><br />
		Surgery: <input type="text" name="surgery" v-model="surgery"><br />
		Allergies: <input type="text" name="allergies" v-model="allergies"><br />
		Genetic Disease: <input type="text" name="geneticDisease" v-model="geneticDisease"><br />
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