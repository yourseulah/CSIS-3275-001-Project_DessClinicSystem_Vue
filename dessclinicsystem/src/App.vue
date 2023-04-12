<template>
  <div class="container">
    
    <Header />
  
  <router-view />
  </div>

</template>

<script>
import Header from '@/components/HeaderSection.vue'

export default {
  name: 'App',

  components: {
            Header
        },

}
</script>


<style>

.container{
  max-width: 1000px;
    background-color: #f5f5f5;
    color:#444444;
}

#cancel:hover{
  background-color:red;
}


</style>