<template>
    <div>
        <!-- <h3 v-if="patientForUpdate">{{ patientForUpdate.id }}</h3> -->
        <h3 v-if="childName">(Child to Parent) User Name : {{ childName.id }}</h3>
        <PatientSearch :getChild="getChildName"></PatientSearch>
        <br /><br />
        <PatientAdd :updatePatient="childName"></PatientAdd>
        <br /><br />
        <PatientDelete></PatientDelete>
        <br /><br />
        <PatientUpdate2 :updatePatient="childName"></PatientUpdate2>
        <br /><br />
        <PatientList :getChild="getChildName"></PatientList>
    </div>
</template>

<script>
import PatientSearch from './PatientSearch.vue';
import PatientAdd from './PatientAdd.vue';
import PatientDelete from './PatientDelete.vue';
import PatientUpdate2 from './PatientUpdate2.vue';
import PatientList from './PatientList.vue';

export default{
    components: {
        PatientSearch,
        PatientAdd,
        PatientDelete,
        PatientUpdate2,
        PatientList
    },

    data(){
        return{
            childName: null
        }
    },

    methods: {
        getChildName(childName){
            this.childName = childName;
        }
    }

    // data() {
    //     return {
    //         patientForUpdate: {}
    //     }
    // },

    // methods: {
    //     setPatientForUpdate(patientForUpdate) {
    //         this.patientForUpdate = patientForUpdate;
    //     }
    // }
}

</script>