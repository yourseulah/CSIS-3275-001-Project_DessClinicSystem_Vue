<template>
  <div class="navbar">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link to="/patientInfo">Patients</router-link>
    <router-link to="/appointmentinfo">Appointments</router-link>
    <router-link to="/doctorlist">Doctors</router-link>
    <router-link to="/invoicelist">Invoices</router-link>

  </div>
</template>
  
<script>
export default {
  name: 'App',
}
</script>

<style>
.navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial, sans-serif;
  text-align: center;
  font-weight: bold;
  color: white;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}

.navbar a.active {
  background-color: #4CAF50;
  color: white;
}
</style>