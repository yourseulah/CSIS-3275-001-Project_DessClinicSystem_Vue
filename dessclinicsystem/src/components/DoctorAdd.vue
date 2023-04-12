<template>
    <div class="container createPatient">
        <form v-on:submit.prevent="handleSubmit">
            <h1>{{ Action }} Doctor Profile</h1>
            <br />
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
                        <option value="Unknown">Unknown</option>
                    </select>
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
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div class="col">
                    <label class="form-label">Doctor Last Name: </label>
                </div>
                <div class="col">
                    <input class="form-control" type="text" name="dLName" v-model="doctor.dLName">
                </div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
            </div>
            <div class="button-container">
                <button v-if="showCreate" class="btn btn-info btn-lg" >Save</button>
                <button v-if="showUpdate" class="btn btn-info btn-lg" @click="handleUpdateDoctorClick">Update</button>

                <button class="btn btn-info btn-lg" id="cancel" @click="clearForm">Cancel</button>
            </div>
        </form>
    </div>
</template>


<script>
import DoctorDataService from '@/services/DoctorDataService';

export default {
    name: 'AllDoctors',

    props: {
        updateDoctor: {
            type: Object
        },

    },

    data() {
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

        handleSubmit() {
            if (this.validateForm()) {
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
                    });

                alert("Doctor added successfully!!");

                this.emitRefresh();
            } else {
                alert("Please fill in all required fields and ensure that the date of birth is not in the future and the years of practice is a number.");
            }

        },
        validateForm() {
    
            if (!this.doctor.dFName || !this.doctor.dLName || !this.doctor.dDoB || !this.doctor.major || !this.doctor.dYoP) {
                return false;
            }

            if (new Date(this.doctor.dDoB) > new Date()) {
                return false;
            }

            if (isNaN(parseInt(this.doctor.dYoP))) {
                return false;
            }

            return true;
        },


        emitRefresh() {
            this.$emit('refreshed', 'yes');
        },

        clearForm(event) {
            event.preventDefault();
            this.doctor = "";
            this.showCreate = true;
            this.showUpdate = false;
            this.Action = "Create";
            console.log("clear form");
        },
        
        handleUpdateDoctorClick(event) {
            console.log(this.doctor);

            event.preventDefault();
            DoctorDataService.updateDoctor(this.doctor.dId, this.doctor)
                .then(response => {
                    const updatedDoc = response.data;
                    console.log("Updated Doctor:");
                    console.log(updatedDoc);

                    alert("Doctor updated successfully!");
                    this.$router.push('/doctorlist');
                })
                .catch(error => {
                    console.log(error);
                })
        }


    },
    watch: {
        updateDoctor() {
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

.container {
  
    margin: 0 auto;
   
}

h1 {
    font-size: 36px;
    margin-bottom: 20px;
    text-align: center;
}


.form-label {
    font-weight: bold;
    margin-bottom: 5px;
}


.form-control {
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
}
.form-select {
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
}

.createPatient {
    animation-name: slideIn;
    animation-duration: 0.5s;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
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



form {
  border: 2px solid #ccc; 
  padding: 20px; 

}

#cancel:hover{
    background-color: red;

}



</style>