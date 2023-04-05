<template>
    <div>
        <H1 v-if="patient">Hello {{ patient.firstName }} {{ patient.lastName }}<BR /></H1>
        <H4 v-if="patient">Gender: {{ patient.gender }}<BR />
        DOB: {{ patient.dob }}<BR />
        Mobile: {{ patient.mobile }}<BR />
        Email: {{ patient.email }}<BR />
        Address: {{ patient.address }}<BR />
        Zipcode: {{ patient.zipCode }}<BR />
        Surgery: {{ patient.surgery }}<BR />
        Allergies: {{ patient.allergies }}<BR />
        Genetic Disease: {{ patient.geneticDisease }}<BR />
        </H4>
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
        retreivePatient(){
            const id = 2;
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

    mounted() {
        this.retreivePatient();
    }
}

</script>