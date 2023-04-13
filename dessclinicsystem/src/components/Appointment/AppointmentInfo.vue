<template>
    <div class="container">
        <div class="row">
            <PatientSearch2 class="col-2" :putPatToNewAppoint="getPatName"></PatientSearch2>
            <div class="col-10">
                <div class="row">
                <AppointmentList :needRefresh="newApt"></AppointmentList>
            </div>
            <div class="row">
                <AppointmentCreate :intoNewAppoint="newAppoint" @appt-created-event="newAppCreated"></AppointmentCreate>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
import PatientSearch2 from '../Patient/PatientSearch2.vue';
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
            },
            newApt: null
            }
    },
    methods: {
        getPatName(AppointPatient){
            this.newAppoint = AppointPatient;
        },
        newAppCreated(obj){
            this.newApt = obj;
        }
    }
}

</script>
<style scoped>

</style>