<template>
    <div>
        <b-col>
            <b-button variant="info">Crear Tarea</b-button>
        </b-col>
        <b-container class="mt-4 text-center">
            <b-col cols="12" md="8">
                <h1>Tareas</h1>
            </b-col>
            <b-row>
                <b-col cols="12" md="4">
                    <EditarTarea/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
// @ is an alias to /src
//import VisualizarTarea from '@/components/VisualizarTarea.vue'
import EditarTarea from '@/components/EditarTarea.vue'

export default {
  name: 'tarea',
  components: {
    EditarTarea
  }
}
</script>