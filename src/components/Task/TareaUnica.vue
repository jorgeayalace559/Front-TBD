<template>
    <div v-if="this.task">
            <p>Tipo de tarea: {{this.task.type}}</p>
            <p>Cantidad voluntarios: {{this.task.capacity}} </p>
            <p>Descripcion de la tarea: {{this.task.description}}</p>
            <p>Estado: {{this.task.state}}</p>
            <b-row>
                <b-col>    
                    <b-button variant="danger">Rechazar</b-button>
                </b-col>
                <b-col>
                    <b-button variant="success">Aceptar</b-button>
                </b-col>
            </b-row>
    </div>
</template>

<script>
import http from "@/http-common";
 
export default {
  name: "task",
  props: ["task"],
  methods: {
    /* eslint-disable no-console */
    updateActive(status) {
      var data = {
        id: this.customer.id,
        name: this.customer.name,
        age: this.customer.age,
        active: status
      };
 
      http
        .put("/customer/" + this.customer.id, data)
        .then(response => {
          this.customer.active = response.data.active;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteCustomer() {
      http
        .delete("/customer/" + this.customer.id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/');
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>