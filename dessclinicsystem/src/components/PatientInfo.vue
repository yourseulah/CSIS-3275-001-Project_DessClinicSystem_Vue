<template>
    <div>
        <PatientSearch></PatientSearch>
        <br /><br />
        <PatientAdd></PatientAdd>
        <br /><br />
        <PatientDelete></PatientDelete>
        <br /><br />
        <PatientUpdate></PatientUpdate>
        <br /><br />
        <PatientList></PatientList>
    </div>
</template>

<script>
import PatientSearch from './PatientSearch.vue';
import PatientAdd from './PatientAdd.vue';
import PatientDelete from './PatientDelete.vue';
import PatientUpdate from './PatientUpdate.vue';
import PatientList from './PatientList.vue';

export default{
    components: {
        PatientSearch,
        PatientAdd,
        PatientDelete,
        PatientUpdate,
        PatientList
    },
}

</script>