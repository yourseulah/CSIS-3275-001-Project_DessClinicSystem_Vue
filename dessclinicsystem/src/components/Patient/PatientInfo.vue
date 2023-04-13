<template>
    <div>
        <PatientAdd :updatePatient="childName"></PatientAdd>
        <br /><br />
        <PatientSearch :getChild="getChildName"></PatientSearch>
        <br /><br />
        
        
        
    </div>
</template>

<script>
import PatientSearch from './PatientSearch.vue';
import PatientAdd from './PatientAdd.vue';


export default {
    components: {
        PatientSearch,
        PatientAdd
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