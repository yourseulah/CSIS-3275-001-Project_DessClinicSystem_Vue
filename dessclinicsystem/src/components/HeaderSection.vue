<template><div class="modal-header navbar">
    <router-link to="/">Home Page</router-link> | <router-link to="/doctorlist">Doctor List</router-link> | 
    <router-link to="/appointmentlist">Appointment List</router-link> | <router-link to="/invoicelist">Invoice List</router-link> |
    <router-link to="/patientInfo">Patient Info</router-link></div>
  </template>
  
<script>
  export default {
    name: 'App',
  }
</script>

<style>
.navbar{
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}
</style>