<template>
    <div class = "container">
        <input type="text" name="searchStr" placeholder="Select Patient" v-model="queryStr" @keyup.enter="handleSearchPatientClick">
        <table v-if="result" class="table table-striped">
            <thead>
                <th>Name</th>
            </thead>
            <tbody>
                <tr v-for = "patient in patients" v-bind:key = "patient.id">
                    <td v-on:click="putPatToNewAppoint(patient)"> {{ patient.firstName }} {{ patient.lastName }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import PatientDataService from '@/services/PatientDataService';

    export default {
        name: 'AllPatients',

        props: {
            putPatToNewAppoint: Function
        },

        data(){
            return {
                result: false,
                queryStr: "",
                NotFound: "",
                patients : [],
            }
        },
        methods: {
            handleSearchPatientClick(event){
                event.preventDefault();
                PatientDataService.searchPatient(this.queryStr)
                    .then(response =>{
                    this.result = true;
                    this.patients = response.data;
                    this.NotFound = "";
                }).catch(error => {
                    this.result = false;
                    this.NotFound = "Found no match...";
                    this.message = error.response.data.message;
                    console.log(error.response.data);
                })
            }
        },

        handleDeletePatientClick(id){
                    
        let result;
        result = PatientDataService.deletePatient(id);
    
        console.warn(result);
        alert("Submitted");

        },
    }
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

input[type="text"] {
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  font-size: 14px;
}

th {
  text-align: left;
  background-color: #f2f2f2;
  padding: 8px;
}

td {
  border: 1px solid #ddd;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

td:first-child {
  font-weight: bold;
}

td:hover {
  cursor: pointer;
  background-color: #ccc;
}

</style>