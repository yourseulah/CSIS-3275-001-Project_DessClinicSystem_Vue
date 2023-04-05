<template>
    <div>
        <PatientSearch></PatientSearch>
        <BR /><BR />
        <PatientAdd></PatientAdd>
        <BR /><BR />
        <PatientDelete></PatientDelete>
        <BR /><BR />
        <PatientUpdate></PatientUpdate>
        <BR /><BR />
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