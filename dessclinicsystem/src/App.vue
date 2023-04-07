<template>
  <Header />
  <router-view />
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
