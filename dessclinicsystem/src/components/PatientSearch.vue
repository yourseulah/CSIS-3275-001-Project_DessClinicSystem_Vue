<template>
    <div class = "container">
        <h1 class="text-center">Search a Patient Result</h1>
        Search: <input type="text" name="searchStr" v-model="queryStr"><button @click="handleSearchPatientClick">Go</button>
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
                <th>ACTION</th>
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
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import PatientDataService from '@/services/PatientDataService';

    export default {
        name: 'AllPatients',
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
    }
</script>