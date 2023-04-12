<template>
    <div class = "container createPatient">
        <h1>{{ Action }} Doctor Profile</h1>
        <br/>
        <div class="row">
            <div class="col">
                <label class="form-label">Birth Date:</label>
            </div>
            <div class="col">
                <input class="form-control" type="date" name="dDoB" v-model="doctor.dDoB">
            </div>
            <div class="col"></div>
            <div class="col">
                <label class="form-label">Specialty: </label>
            </div>
            <div class="col">
            <input class="form-control" type="text" name="major" v-model="doctor.major">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Gender: </label>
            </div>
            <div class="col">
                <select class="form-select" name="gender" v-model="doctor.gender">
                <option value="Male" selected>Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option></select>
            </div>
            <div class="col"></div>
            <div class="col">
                <label class="form-label">Years of Practice: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="dYoP" v-model="doctor.dYoP">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Doctor First Name: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="dFName" v-model="doctor.dFName">
            </div>
            <div class="col"></div><div class="col"></div><div class="col"></div>
        </div>
        <div class="row">
            <div class="col">
                <label class="form-label">Doctor Last Name: </label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="dLName" v-model="doctor.dLName">
            </div>
            <div class="col"></div><div class="col"></div><div class="col"></div>
        </div>

        <button v-if="showCreate" class="btn btn-info btn-lg" @click="handleAddDoctorClick">Save</button>
        <button v-if="showUpdate" class="btn btn-info btn-lg" @click="handleUpdateDoctorClick">Update</button>
        <button class="btn btn-info btn-lg" @click="clearForm">Cancel</button>
    </div>
</template>


<script>
/* eslint-disable no-mixed-spaces-and-tabs */

import DoctorDataService from '@/services/DoctorDataService';

export default {
        name: 'AllDoctors',

        props: {
            updateDoctor: {
                // id: ""
            },
            
        },

        data(){
            return {
                doctor: {
                    dId: "",
                    dFName: "",
		            dLName: "",
		            gender: "Male",
		            dDoB: "",
		            major: "",
		            dYoP: "",
                },
                showCreate: true,
                showUpdate: false,
                Action: "Create"
            };
        },
        methods: {
            handleAddDoctorClick(event) {
                event.preventDefault();
                const newDoctor = this.doctor;

                console.log(newDoctor);

                DoctorDataService.addDoctor(newDoctor)
                    .then(response => {
                        const newDoc = response.data;
                        console.log("New Doctor:");
                        console.log(newDoc);
                    })
                    .catch(error => {
                        console.log(error);
                    })

                    alert("Submitted");

                    this.emitRefresh();
            },
            emitRefresh() {
                this.$emit('refreshed','yes');
            },
            clearForm(event){
                event.preventDefault();
                this.doctor = "";
                this.showCreate = true;
                this.showUpdate = false;
                this.Action = "Create";
                console.log("clear form");
            },
            handleUpdateDoctorClick(event){
                console.log(this.doctor);

                event.preventDefault();
                DoctorDataService.updateDoctor(this.doctor.dId, this.doctor)
                    .then(response => {
                        const updatedDoc = response.data;
                        console.log("Updated Doctor:");
                        console.log(updatedDoc);

                        alert("Doctor is updated");
                        this.$router.push('/doctorlist');
                    })
                    .catch(error => {
                        console.log(error);
                    })
                }
        },
        watch: {
            updateDoctor(){
                // alert("something new");
                console.log("update doctor");
                this.doctor = this.updateDoctor;
                this.showUpdate = true;
                this.showCreate = false;
                this.Action = "Update";
            }
        }
    }
</script>

<style scoped>
.btn {
    color: white;
    margin-right: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.createPatient{
    background-color: lightgray;
}

.form-label{
    background-color: lightgray;
}

.form-control{
    background-color: white;
}
</style>