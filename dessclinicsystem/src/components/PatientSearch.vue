<template>
    <div class = "container">
        <h1 class="text-center">Search a Patient Result (Sibling to Sibling components)</h1>
        Search: <input type="text" name="searchStr" placeholder="Patient Search" v-model="queryStr"><button @click="handleSearchPatientClick">Go</button>
        {{ NotFound }}
        <table v-if="result" class="table table-striped">
            <thead>
                <th>ID</th>
                <th>Patient ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Address</th>
                <th>Zip Code</th>
                <th>Surgery</th>
                <th>Allergies</th>
                <th>Genetic Disease</th>
                <th>ACTIONS</th>
            </thead>
            <tbody>
                <tr v-for = "patient in patients" v-bind:key = "patient.id">
                    <td> {{ patient.id }}</td>
                    <td> {{ patient.patientId }}</td>
                    <td> {{ patient.firstName }}</td>
                    <td> {{ patient.lastName }}</td>
                    <td> {{ patient.gender }}</td>
                    <td> {{ patient.dob }}</td>
                    <td> {{ patient.mobile }}</td>
                    <td> {{ patient.email }}</td>
                    <td> {{ patient.address }}</td>
                    <td> {{ patient.zipCode }}</td>
                    <td> {{ patient.surgery }}</td>
                    <td> {{ patient.allergies }}</td>
                    <td> {{ patient.geneticDisease }}</td>
                    <td>
                        <button v-on:click="getChild(patient)">Update</button>
                        <button v-on:click="handleDeletePatientClick(patient.id)">Delete</button>
                    </td>
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
            getChild: Function
        },

        data(){
            return {
                result: false,
                queryStr: "",
                NotFound: "",
                patients : [],
                //patient: null
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
            },
            handleDeletePatientClick(id){
            
            console.log("id:"+id);

                        PatientDataService.deletePatient(id)
                        .then(response => {
                            console.log(response.data);
                        }).catch(error => {
                            this.message = error.response.data.message;
                            console.log(error.response.data);
                        })
        
                        alert("Patient Deleted!");


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
        
                    },
        },


    }
</script>