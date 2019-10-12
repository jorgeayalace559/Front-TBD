import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use (VueGoogleMaps,{ 
  load:{ 
    key:"AIzaSyC38DImzDWUz1pimDNKhL8zHyJCuHRB9B8", 
    libraries : "places"
  }
});

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});

<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0b2BrHx6vESTYTmPM-LDYcnCXia62Dqk&callback=initMap">
</script>