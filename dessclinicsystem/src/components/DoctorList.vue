<template>
    <div class = "container">
        <h1 class="text-center">Doctor List</h1>
        <table class="table table-striped">
            <thead>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Specialty</th>
                <th>Years of Practice</th>
                <th>ACTIONS</th>
            </thead>
            <tbody>
                <tr v-for = "doctor in doctors" v-bind:key = "doctor.dId">
                    <td> {{ doctor.dId }}</td>
                    <td> {{ doctor.dFName }}</td>
                    <td> {{ doctor.dLName }}</td>
                    <td> {{ doctor.gender }}</td>
                    <td> {{ doctor.dDoB }}</td>
                    <td> {{ doctor.major }}</td>
                    <td> {{ doctor.dYoP }}</td>
                    <td>
                        <button v-on:click="getChild(doctor)">Update</button>
                        <button v-on:click="handleDeleteDoctorClick(doctor.dId)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <doctor-add @refreshed="refreshPage" :updateDoctor="doctor"></doctor-add>
</template>


<script>
    import DoctorDataService from '../services/DoctorDataService'
    import DoctorAdd from '@/components/DoctorAdd.vue'

    export default {
        name: 'DoctorList',

        components:{
            DoctorAdd
        },

        data(){
            return {
                doctors : [],
                doctor: null
            }
        },
        methods: {
            getChild(doctor){
                this.doctor=doctor;
            },
            getDoctors(){
                DoctorDataService.getDoctors().then((response) =>{
                    this.doctors = response.data;
                }).catch(error => {
                    this.message = error.response.data.message;
                    console.log(error.response.data);
                })
            },
            handleDeleteDoctorClick(id){

                console.log("id:"+ id);
        
                DoctorDataService.deleteDoctor(id)
                .then(response => {
                    console.log(response.data);
                }).catch(error => {
                    this.message = error.response.data.message;
                    console.log(error.response.data);
                })

                alert("Doctor Deleted!");
                this.refreshPage()
            },
            refreshPage(){
                this.getDoctors();
            }
        },

        created(){
            this.getDoctors()
        },

    }
</script>