
<template>
    <div class = "container">
        <H1 class="text-center">Delete a {{ userType }}: <button id="switchDelete" @click="handleSwitchDeleteClick">Switch</button></H1>
        <BR /><BR />{{ userType2 }} ID: <input type="text" name="id" v-model="id"><BR /><BR />
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
                let result;
                if(this.userType === 'doctor')
                {
                    result = DoctorDataService.deleteDoctor(this.id);
                }
                else
                {
                    result = PatientDataService.deletePatient(this.id);
                }
                
                console.warn(result);
                alert("Submitted");
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
            }
        }
    }
</script>