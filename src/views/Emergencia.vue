<template>
    <div class="emergencia">
        <RegistroEmergencia/>
        <br>
        <VisualizarEmergencia/>

    </div>
</template>


<script>
// @ is an alias to /src
import RegistroEmergencia from '@/components/RegistroEmergencia.vue'
import VisualizarEmergencia from '@/components/VisualizarEmergencia.vue'

export default {
  name: 'home',
  components: {
    RegistroEmergencia, VisualizarEmergencia
  }
}
</script>