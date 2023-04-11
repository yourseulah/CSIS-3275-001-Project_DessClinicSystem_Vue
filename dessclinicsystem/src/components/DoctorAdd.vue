<template>
    <div class = "container createPatient">
        <h1>Create Doctor Profile</h1>
        <div class="row">
            <div class="col">
                <label class="form-label">Birth Date:</label>
            </div>
            <div class="col">
                <input class="form-control" type="text" name="dDoB" v-model="doctor.dDoB">
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

        <button class="btn btn-info btn-lg" @click="handleAddDoctorClick">Save</button>
        <button class="btn btn-info btn-lg" @click="handleUpdateDoctorClick">Update</button>
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
                this.doctor = ""
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
                this.doctor = this.updateDoctor;
            }
        }
    }
</script>

<style scoped>
.btn {
    color: white;
    margin: 10px;
}

.createPatient{
    background-color: lightgray;
}

.form-label{
    background-color: white;
}

.form-control{
    background-color: white;
}
</style>