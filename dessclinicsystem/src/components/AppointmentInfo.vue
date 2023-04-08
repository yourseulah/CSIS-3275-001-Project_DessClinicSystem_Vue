<template>
    <div class="container">
        <!-- <h3 v-if="newAppoint">(Child to Parent) Patient ID : {{ newAppoint.id }}</h3> -->
        <div class="row">
            <PatientSearch2 class="col-2" :putPatToNewAppoint="getPatName"></PatientSearch2>
            <div class="col-10">
                <div class="row">
                <AppointmentList ></AppointmentList>
            </div>
            <div class="row">
                <AppointmentCreate :intoNewAppoint="newAppoint"></AppointmentCreate>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
import PatientSearch2 from './PatientSearch2.vue';
import AppointmentList from './AppointmentList.vue';
import AppointmentCreate from './AppointmentCreate.vue';

export default{
    components: {
        PatientSearch2,
        AppointmentList,
        AppointmentCreate
    },
    data(){
        return{
            newAppoint: {
                // patient: null
            },
            }
    },
    methods: {
        getPatName(AppointPatient){
            // this.newAppoint.patient = AppointPatient;
            this.newAppoint = AppointPatient;
        }
    }
}

</script>
<style scoped>

</style>