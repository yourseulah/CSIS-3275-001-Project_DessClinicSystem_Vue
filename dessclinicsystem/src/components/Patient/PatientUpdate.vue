
<template>
    <div class = "container">
        <h1 class="text-center">Update a Patient</h1>
        ID: <input type="text" name="id" v-model="patient.id"><br />
        Patient ID: <input type="text" name="patientId" v-model="patient.patientId"><br />
        First Name: <input type="text" name="firstName" v-model="patient.firstName"><br />
        Last Name: <input type="text" name="lastName" v-model="patient.lastName"><br />
		Gender: <select name="gender" v-model="patient.gender"><option value="Male" selected>Male</option>
            <option value="Female">Female</option>
            <option value="Unknown">Unknown</option></select><br />
		Date of Birth: <input type="text" name="dob" v-model="patient.dob"><br />
		Mobile Phone: <input type="text" name="mobile" v-model="patient.mobile"><br />
		Email: <input type="text" name="email" v-model="patient.email"><br />
		Address: <input type="text" name="address" v-model="patient.address"><br />
		Zip Code: <input type="text" name="zipCode" v-model="patient.zipCode"><br />
		Surgery: <input type="text" name="surgery" v-model="patient.surgery"><br />
		Allergies: <input type="text" name="allergies" v-model="patient.allergies"><br />
		Genetic Disease: <input type="text" name="geneticDisease" v-model="patient.geneticDisease"><br />
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
                PatientDataService.updatePatient(this.patient.id, this.patient)
                    .then(response => {
                        const updatedPat = response.data;
                        console.log("Updated Patient:");
                        console.log(updatedPat);

                        this.$router.push({name:'PatientInfo'});
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
        },
        async mounted() {

            console.warn(this.$route.params.id);

            const result = await PatientDataService.retreivePatient(this.$route.params.id);
            console.warn(result.data);
            this.patient = result.data;
        }
    }
</script>