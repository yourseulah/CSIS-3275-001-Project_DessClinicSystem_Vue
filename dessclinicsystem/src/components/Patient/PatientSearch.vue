<template>
    <div class = "container">
        <h2 class="text-center">Search a Patient</h2>
        Search: <input type="text" name="searchStr" placeholder="Patient Search" v-model="queryStr">
        <button class="btn btn-info btn-lg" @click="handleSearchPatientClick">Go</button>
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
                        <button class="btn btn-info btn-lg" v-on:click="getChild(patient)">Update</button>
                        <button class="btn btn-info btn-lg" id="cancel" v-on:click="handleDeletePatientClick(patient.id)">Delete</button>
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

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

input[type="text"] {
  font-size: 18px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 60%;
  margin-right: 10px;
}



table {
  margin-top: 20px;
  border-collapse: collapse;
  width: 100%;
}

th {
  background-color: #333333;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  text-align: left;
}

td {
  font-size: 16px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

tbody tr:hover {
  background-color: #f5f5f5;
}

button {
  font-size: 16px;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
}



.btn {
    border-radius: 5px;
    padding: 10px 20px;
    margin-right: 10px;
}

.btn-info {
    background-color: #17a2b8;
    border-color: #17a2b8;
    color: #fff;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.btn-info:hover {
    background-color: green;
    border-color: #117a8b;
    color: #fff;
    transform: translateY(-2px);
}
</style>