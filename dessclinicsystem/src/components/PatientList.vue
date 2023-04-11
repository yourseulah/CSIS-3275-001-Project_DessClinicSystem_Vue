<template>
    <div class = "container">
        <h1 class="text-center">Patient List</h1>
        <table class="table table-striped">
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
                        <!-- <router-link :to="'/patient/'+patient.id"><button @click="navigate, getChild(childName)" role="link">Update</button></router-link> -->
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
                patients : [],
                patient: null,
            }
        },
        methods: {
            retreiveAllPatients(){
                PatientDataService.retreiveAllPatients()
                .then(response =>{
                    this.patients = response.data;
                }).catch(error => {
                    this.message = error.response.data.message;
                    console.log(error.response.data);
                })
            },

            handleDeletePatientClick(id){

                console.log("id:"+ id);
                        
                PatientDataService.deletePatient(id)
                .then(response => {
                    console.log(response.data);
                }).catch(error => {
                    this.message = error.response.data.message;
                    console.log(error.response.data);
                })

                alert("Patient Deleted!");

                this.retreiveAllPatients()
            },

        },
        created(){
            this.retreiveAllPatients()
        }
    }
</script>