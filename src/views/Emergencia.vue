<template>
    <div>
        <b-container class="mt-4 text-center">
            <b-row>
                <b-col cols="12" md="8" class="mt-3">
                    <Registro/>
                </b-col>
                <b-col cols="12" md="4" class="mt-3">
                    <EmergenciasActuales/>
                </b-col>
            </b-row>
            
            
        </b-container>
        
    </div>
</template>


<script>
// @ is an alias to /src
import EmergenciasActuales from '@/components/EmergenciasActuales.vue'
import Registro from '@/components/Registro.vue'

export default {
  name: 'emergencia',
  components: {
    EmergenciasActuales, Registro
  }
}
</script>