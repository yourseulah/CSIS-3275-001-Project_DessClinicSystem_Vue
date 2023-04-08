<template>
    <div class = "container">
        <!-- <input type="text" name="searchStr" placeholder="Patient Search" v-model="queryStr"><button @click="handleSearchPatientClick">Go</button> -->
        <input type="text" name="searchStr" placeholder="Patient Search" v-model="queryStr" @keyup.enter="handleSearchPatientClick">
        <table v-if="result" class="table table-striped">
            <thead>
                <th>Name</th>
                <!-- <th>action</th> -->
            </thead>
            <tbody>
                <tr v-for = "patient in patients" v-bind:key = "patient.id">
                    <td v-on:click="putPatToNewAppoint(patient)"> {{ patient.firstName }} {{ patient.lastName }}</td>
                    <!-- <td> -->
                        <!-- <router-link :to="'/patient/'+patient.id">Update</router-link> -->
                        <!-- <router-link :to="'/patient/'+patient.id"><button @click="navigate" role="link">Update</button></router-link> -->
                        <!-- <button v-on:click="getChild(patient)">Update</button>
                        <button v-on:click="handleDeletePatientClick(patient.id)">Delete</button> -->
                    <!-- </td> -->
                    <!-- <td><button v-on:click="putPatToNewAppoint(patient)">Set New Appointment</button></td> -->
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
                // patient: null
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