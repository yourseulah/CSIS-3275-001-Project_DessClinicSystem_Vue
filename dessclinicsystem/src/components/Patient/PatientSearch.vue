<template>
    <div class="container">
        <div class="divtext">
            <h2 class="text-center">Search a Patient</h2>
        Search: <input type="text" name="searchStr" placeholder="Patient Search" v-model="queryStr">
        <button class="btn btn-info btn-lg" @click="handleSearchPatientClick">Go</button>
        {{ NotFound }}

        </div>
    <div class="divtable">
    
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
                <th>ACTIONS</th>
            </thead>
            <tbody>
                <tr v-for="patient in patients" v-bind:key="patient.id">
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

                    <td>
                        <button class="btn btn-info btn-sm" v-on:click="getChild(patient)">
                            Update</button>
                        <button class="btn btn-info btn-sm" id="cancel"
                            v-on:click="handleDeletePatientClick(patient.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</template>

<script>
import PatientDataService from '@/services/PatientDataService';

export default {
    name: 'AllPatients',

    props: {
        getChild: Function
    },

    data() {
        return {
            result: false,
            queryStr: "",
            NotFound: "",
            patients: [],
        }
    },
    methods: {
        handleSearchPatientClick(event) {
            event.preventDefault();
            PatientDataService.searchPatient(this.queryStr)
                .then(response => {
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
        handleDeletePatientClick(id) {

            console.log("id:" + id);

            PatientDataService.deletePatient(id)
                .then(response => {
                    console.log(response.data);
                }).catch(error => {
                    this.message = error.response.data.message;
                    console.log(error.response.data);
                })

            alert("Patient Deleted!");


            PatientDataService.searchPatient(this.queryStr)
                .then(response => {
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
table {
    border-collapse: collapse;
    width: 80%;
    margin: auto;
    border: 1px solid #ddd;
    font-size: 15px;
}

th,
td {
    text-align: center;
    padding: 12px;
}

th {
    background-color: #333333;
    color: white;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

td:first-child {
    border-left: 1px solid #ddd;
}

td:last-child {
    border-right: 1px solid #ddd;
}

tr:last-child td {
    border-bottom: 1px solid #ddd;
}

tbody td {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
}

.container {
    margin: 30px auto;
    border: 1px solid #ddd;
    padding: 30px;
}

.btn {
    border-radius: 5px;
    /* padding: 10px 20px; */
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

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.divtext{
    text-align: center;
    margin:50px;
}

.divtext input[type="text"] {
  height: 60px;
  width: 500px; 
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

</style>