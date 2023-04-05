
<template>
    <div class = "container">
        <H1 class="text-center">Update a Patient</H1>
        ID: <input type="text" name="id" v-model="patient.id"><BR />
        Patient ID: <input type="text" name="patientId" v-model="patient.patientId"><BR />
        First Name: <input type="text" name="firstName" v-model="patient.firstName"><BR />
        Last Name: <input type="text" name="lastName" v-model="patient.lastName"><BR />
		Gender: <select name="gender" v-model="patient.gender"><option value="Male" selected>Male</option>
            <option value="Female">Female</option>
            <option value="Unknown">Unknown</option></select><BR />
		Date of Birth: <input type="text" name="dob" v-model="patient.dob"><BR />
		Mobile Phone: <input type="text" name="mobile" v-model="patient.mobile"><BR />
		Email: <input type="text" name="email" v-model="patient.email"><BR />
		Address: <input type="text" name="address" v-model="patient.address"><BR />
		Zip Code: <input type="text" name="zipCode" v-model="patient.zipCode"><BR />
		Surgery: <input type="text" name="surgery" v-model="patient.surgery"><BR />
		Allergies: <input type="text" name="allergies" v-model="patient.allergies"><BR />
		Genetic Disease: <input type="text" name="geneticDisease" v-model="patient.geneticDisease"><BR />
		<button @click="handleUpdatePatientClick">Update a patient</button>
    </div>
</template>


<script>
/* eslint-disable no-mixed-spaces-and-tabs */

import PatientDataService from '@/services/PatientDataService';

export default {
        name: 'AllPatients',
        data(){
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
                }
            };
        },
        methods: {
            handleUpdatePatientClick(event) {
                event.preventDefault();
                const updatedPatient = {
                    "id" : this.id,
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

                PatientDataService.updatePatient(this.Id, updatedPatient)
                    .then(response => {
                        const updatedPat = response.data;
                        console.log("Updated Patient:");
                        console.log(updatedPat);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
        },
        async mounted() {

            console.warn(this.$route.params.id);

            //if (!this.$route.params.id){
                const result = await PatientDataService.retreivePatient(this.$route.params.id);
                console.warn(result.data);
                this.patient = result.data
            //}
            
        }
    }
</script>