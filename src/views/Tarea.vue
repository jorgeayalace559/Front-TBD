<template>
    <div>
        <b-container class="mt-4 text-center">
            <b-col cols="12" md="8">
                <h1>Tareas Propuestas</h1>
            </b-col>
            <b-row>
                <b-col cols="12" md="4">
                    <VisualizarTarea/>
                </b-col>
            </b-row>
        </b-container>
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
    VisualizarTarea
  }
}
</script>