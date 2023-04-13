<template>
  <div v-if="patient">
    <table class="patient-table">
      <tr>
        <td>Id:</td>
        <td>{{ patient.id }}</td>
      </tr>
      <tr>
        <td>Patient ID:</td>
        <td>{{ patient.patientId }}</td>
      </tr>
      <tr>
        <td>First Name:</td>
        <td>{{ patient.firstName }}</td>
      </tr>
      <tr>
        <td>Last Name:</td>
        <td>{{ patient.lastName }}</td>
      </tr>
      <tr>
        <td>Gender:</td>
        <td>{{ patient.gender }}</td>
      </tr>
      <tr>
        <td>DOB:</td>
        <td>{{ patient.dob }}</td>
      </tr>
      <tr>
        <td>Mobile:</td>
        <td>{{ patient.mobile }}</td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>{{ patient.email }}</td>
      </tr>
      <tr>
        <td>Address:</td>
        <td>{{ patient.address }}</td>
      </tr>
      <tr>
        <td>Zipcode:</td>
        <td>{{ patient.zipCode }}</td>
      </tr>
      <tr>
        <td>Surgery:</td>
        <td>{{ patient.surgery }}</td>
      </tr>
      <tr>
        <td>Allergies:</td>
        <td>{{ patient.allergies }}</td>
      </tr>
      <tr>
        <td>Genetic Disease:</td>
        <td>{{ patient.geneticDisease }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import PatientDataService from '@/services/PatientDataService';

export default {
  data() {
    return {
      patient: null
    }
  },

  methods: {
    retreivePatient(id) {
      PatientDataService.retreivePatient(id)
        .then(response => {
          this.patient = response.data;
          console.log(this.patient);
        })
        .catch(error => {
          console.log(error);
        })
    }
  },

  created() {
    const id = this.$route.params.id;
    this.retreivePatient(id);
  }
}

</script>

<style>
.patient-table {
  margin: 0 auto;
  border-collapse: collapse;
  font-size: 16px;
}

.patient-table td {
  padding: 10px;
  border: 1px solid #ccc;
}

.patient-table td:first-child {
  font-weight: bold;
  background-color: #f5f5f5;
}
</style>