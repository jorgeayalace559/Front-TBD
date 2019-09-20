<template>
  <div class="home">
    <RegistroUsuario/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegistroUsuario from '@/components/RegistroUsuario.vue'

export default {
  name: 'home',
  components: {
    RegistroUsuario
  }
}
</script>
