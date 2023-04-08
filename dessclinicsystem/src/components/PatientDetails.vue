<template>
    <!-- <div v-if="patient"> -->
    <div>
        <h2>
        Patient ID: {{ patient.patientId }}<br />
        First Name: {{ patient.firstName }}<br />
        Last Name: {{ patient.lastName }}<br />
        Gender: {{ patient.gender }}<br />
        DOB: {{ patient.dob }}<br />
        Mobile: {{ patient.mobile }}<br />
        Email: {{ patient.email }}<br />
        Address: {{ patient.address }}<br />
        Zipcode: {{ patient.zipCode }}<br />
        Surgery: {{ patient.surgery }}<br />
        Allergies: {{ patient.allergies }}<br />
        Genetic Disease: {{ patient.geneticDisease }}<br />
        </h2>
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