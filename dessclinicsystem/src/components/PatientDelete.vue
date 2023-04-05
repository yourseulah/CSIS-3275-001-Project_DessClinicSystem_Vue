
<template>
    <div class = "container">
        <h1 class="text-center">Delete a {{ userType }}: <button id="switchDelete" @click="handleSwitchDeleteClick">Switch</button></h1>
        <br /><br />{{ userType2 }} ID: <input type="text" name="id" v-model="id"><br /><br />
		<button @click="handleDeletePatientClick">{{ btnLabel }}</button>
    </div>
</template>


<script>
/* eslint-disable no-mixed-spaces-and-tabs */
import PatientDataService from "@/services/PatientDataService";
import DoctorDataService from "@/services/DoctorDataService";

    export default {
        name: 'AllPatients',

        data(){
            return {
                id: "",
                userType: "patient",
                userType2: "Patient",
                btnLabel: "Delete a Patient",
                action: "showDoctorBtn"
            };
        },

        methods: {
            handleDeletePatientClick(event){
                event.preventDefault();

                if(this.userType === 'doctor')
                {
                    DoctorDataService.deleteDoctor(this.id)
                        .then(response => {
                            const updatedPat = response.data;
                            console.log("Updated Doctor:");
                            console.log(updatedPat);
                        })
                        .catch(error => {
                        console.log(error);
                        })
                }
                else
                {
                    PatientDataService.deletePatient(this.id)
                        .then(response => {
                            const updatedPat = response.data;
                            console.log("Updated Patient:");
                            console.log(updatedPat);
                        })
                        .catch(error => {
                        console.log(error);
                        })
                }
                
                alert("Submitted");

                //this.$router.push({name:'PatientInfo'});
            },

            handleSwitchDeleteClick(event){
                event.preventDefault();
                if(this.action === 'showDoctorBtn') {
                    this.action = 'showPatientBtn';
                    this.userType = 'doctor';
                    this.userType2 = 'Doctor';
                    this.btnLabel='Delete a Doctor';
                } else {
                    this.action = 'showDoctorBtn';
                    this.userType = 'patient';
                    this.userType2 = 'Patient';
                    this.btnLabel='Delete a Patient';
                }
            },
        }
    }
</script>