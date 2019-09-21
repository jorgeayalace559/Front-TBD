<template>
    <div>
        <b-container class="mt-4 text-center">
            <b-col cols="12" md="8">
                <h1>Mis tareas</h1>
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
import EditarTarea from '@/components/EditarTarea.vue'

export default {
  name: 'tarea',
  components: {
    EditarTarea
  }
}
</script>