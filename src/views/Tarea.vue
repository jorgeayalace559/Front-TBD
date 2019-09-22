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
import RegistroTarea from '@/components/Task/RegistroTarea.vue'
import VisualizarTarea from '@/components/Task/VisualizarTarea.vue'

export default {
  name: 'tarea',
  components: {
    VisualizarTarea, RegistroTarea
  }
}
</script>