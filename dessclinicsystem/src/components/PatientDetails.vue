<template>
    <div v-if="patient">
        <br>
        <div class="itemList">id: {{ patient.id }}</div>
        <br />
        <div class="itemList">Patient ID: {{ patient.patientId }}</div>
        <br />
        <div class="itemList">First Name: {{ patient.firstName }}</div>
        <br />
        <div class="itemList">Last Name: {{ patient.lastName }}</div>
        <br />
        <div class="itemList">Gender: {{ patient.gender }}</div>
        <br />
        <div class="itemList"> DOB: {{ patient.dob }}</div>
        <br />
        <div class="itemList"> Mobile: {{ patient.mobile }}</div>
        <br />
        <div class="itemList">Email: {{ patient.email }}</div>
        <br />
        <div class="itemList">Address: {{ patient.address }}</div>
        <br />
        <div class="itemList">Zipcode: {{ patient.zipCode }}</div>
        <br />
        <div class="itemList">Surgery: {{ patient.surgery }}</div>
        <br />
        <div class="itemList">Allergies: {{ patient.allergies }}</div>
        <br />
        <div class="itemList">Genetic Disease: {{ patient.geneticDisease }}</div>
        <br />
    </div>
</template>

<script>
import PatientDataService from '@/services/PatientDataService';

export default{
    data() {
        return{
            patient: null
        }
    },

    methods: {
        retreivePatient(id){
            // const id = 2;
            PatientDataService.retreivePatient(id)
                .then(response => {
                    this.patient = response.data;
                    console.log(this.patient);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },

    // mounted() {
    //     this.retreivePatient();
    // }

    created(){
        const id = this.$route.params.id;
        this.retreivePatient(id);
    }
}

</script>

<style>

    .itemList{
        size: 30px;
        margin-left: 100px;
        font-size: 20px;
    }

</style>