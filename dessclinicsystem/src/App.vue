<template>
  <router-link to="/">Home Page</router-link> <br />
  <router-link to="/doctorlist">Doctor List</router-link> <br />
  <router-link to="/appointmentlist">Appointment List</router-link> <br />
  <router-link to="/invoicelist">Invoice List</router-link> <br />
  <router-link to="/patientlist">Patient List</router-link> <br />
  <router-link to="/patientadd">Add a Patient</router-link> <br />
  <router-link to="/patientUpdate">Update a Patient</router-link> <br />
  <router-link to="/patientdelete">Delete an User</router-link> <br />
  <router-link to="/patientInfo">Patient Info</router-link> <br />
  <router-link to="/patientSearch">Search a Patient</router-link> <br />
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>
