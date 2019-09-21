<template>
<div>
    <Navbar/>
    <b-container class="mt-4 text-center">
          <b-row>
              <b-col cols="12" md="8" class="mt-3">
                  <router-view/> 
              </b-col>
              <b-col cols="12" md="4" class="mt-3">
                  <EmergenciasActuales/>
              </b-col>
          </b-row>
      </b-container> 
    <br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import EmergenciasActuales from './components/EmergenciasActuales.vue'

export default {
  name: 'app',
  components: {
     Navbar, Footer, EmergenciasActuales
  }
}
</script>