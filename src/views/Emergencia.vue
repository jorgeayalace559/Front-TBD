<template>
    <div>
        <b-container class="mt-4 text-center">
            <b-row>
                <b-col cols="12" md="8">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi optio incidunt, 
                        reprehenderit quae dignissimos esse ducimus, nobis voluptatum voluptatibus exercitationem 
                        alias a non repudiandae? Quos dolores inventore aliquid possimus.</p>
                </b-col>
                <b-col cols="12" md="4">
                    <EmergenciasActuales/>
                </b-col>
            </b-row>
            
            
        </b-container>
        
    </div>
</template>


<script>
// @ is an alias to /src
import EmergenciasActuales from '@/components/EmergenciasActuales.vue'

export default {
  name: 'emergencia',
  components: {
    EmergenciasActuales
  }
}
</script>