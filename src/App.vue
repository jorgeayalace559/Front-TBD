<template>
<div class="fondo">
    <Navbar/>
    <b-container class="mt-4 text-center">
          <b-row>
              <b-col cols="12" md="8" class="mt-3">
                  <router-view/> 
              </b-col>
              <b-col cols="12" md="4" class="mt-3">
                  <EmergenciasActuales/>
              </b-col>
                  <google-map />
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

import GoogleMap from "./components/GoogleMap";

export default {
  name: "App",
  components: {
    GoogleMap,Navbar, Footer, EmergenciasActuales
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
.fondo{
   background-image: url('assets/amarillo.jpg');
   font-family: 'Righteous', cursive !important; 
}
.barra{
  background-color:#17A589;
}

</style>
