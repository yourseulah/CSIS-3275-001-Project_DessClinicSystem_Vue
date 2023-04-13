<template>
  <div class="container">
    <Header />

    <div class="heading">
      <h1>Welcome to Clinical Management System</h1>
    </div>
    <div class="box">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/patientInfo">Patients</router-link>
      <router-link class="nav-link" to="/appointmentinfo">Appointments</router-link>
      <router-link class="nav-link" to="/doctorlist">Doctors</router-link>
      <router-link class="nav-link" to="/invoicelist">Invoices</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HomePage",
}
</script>

<style scoped>
.heading {
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
}

.heading h1 {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 100px;
  text-align: center;
  font-size: 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #333;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 10px;
  font-weight: bold;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  background-color: #333;
  color: #fff;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #555;
}
</style>