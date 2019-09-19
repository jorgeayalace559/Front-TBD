<template>
  <div id="app">
    <Navbar/>
    <router-view/>  
    <br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
     Navbar, Footer
  }
}
</script>

