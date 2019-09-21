<template>
    <div class="tarea">
        <RegistroTarea/>
        <br>
        <VisualizarTarea/>
    </div>
</template>

<script>
// @ is an alias to /src
//import VisualizarTarea from '@/components/VisualizarTarea.vue'
import RegistroTarea from '@/components/RegistroTarea.vue'
import VisualizarTarea from '@/components/VisualizarTarea.vue'

export default {
  name: 'tarea',
  components: {
    RegistroTarea, VisualizarTarea
  }
}
</script>