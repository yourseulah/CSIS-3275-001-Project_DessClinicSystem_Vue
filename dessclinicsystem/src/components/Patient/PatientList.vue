<template>
    <div class="container">
        <h1 class="text-center">Patients</h1>
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
                    <td> {{ patient.surgery }}</td>
                    <td> {{ patient.allergies }}</td>
                    <td> {{ patient.geneticDisease }}</td>
                    <td>
                        <button class="btn btn-info btn-lg" v-on:click="getChild(patient)">Update</button>
                        <button class="btn btn-info btn-lg" id="cancel"
                            v-on:click="handleDeletePatientClick(patient.id)">Delete</button>
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

    data() {
        return {
            patients: [],
            patient: null,
        }
    },
    methods: {
        retreiveAllPatients() {
            PatientDataService.retreiveAllPatients()
                .then(response => {
                    this.patients = response.data;
                }).catch(error => {
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

            this.retreiveAllPatients()
        },

    },
    created() {
        this.retreiveAllPatients()
    }
}
</script>

<style scoped>
table {
    border-collapse: collapse;
    width: 80%;
    margin: auto;
    border: 1px solid #ddd;
    font-size: 18px;
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

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
</style>