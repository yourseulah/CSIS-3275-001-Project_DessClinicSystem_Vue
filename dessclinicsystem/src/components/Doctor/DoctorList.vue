<template>
    <div class = "container">
        <h1 class="text-center">Available Doctors</h1>
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
                        <button class="btn btn-info btn-lg" v-on:click="getChild(doctor)">Update</button>
                        <button v-on:click="handleDeleteDoctorClick(doctor.dId)" class="btn btn-info btn-lg" id="cancel">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <doctor-add @refreshed="refreshPage" :updateDoctor="doctor"></doctor-add>
</template>


<script>
    import DoctorDataService from '../../services/DoctorDataService'
    import DoctorAdd from '@/components/Doctor/DoctorAdd.vue'

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

<style scoped>
table {
    border-collapse: collapse;
    width: 80%;
    margin: auto;
    border: 1px solid #ddd;
    font-size: 18px;
}

th, td {
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