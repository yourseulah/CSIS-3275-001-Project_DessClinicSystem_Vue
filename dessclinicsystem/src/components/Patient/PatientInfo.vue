<template>
    <div>
        <PatientSearch :getChild="getChildName"></PatientSearch>
        <br /><br />
        <PatientAdd :updatePatient="childName"></PatientAdd>
        <br /><br />
        <PatientList :getChild="getChildName"></PatientList>
    </div>
</template>

<script>
import PatientSearch from './PatientSearch.vue';
import PatientAdd from './PatientAdd.vue';
import PatientList from './PatientList.vue';

export default {
    components: {
        PatientSearch,
        PatientAdd,
        PatientList
    },

    data() {
        return {
            childName: null
        }
    },

    methods: {
        getChildName(childName) {
            this.childName = childName;
        }
    }

}

</script>