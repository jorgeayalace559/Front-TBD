<template>
    <div v-if="this.task">
      <b-card :title="task.type">
        <b-card>
          <p>{{this.task.description}}</p>
        </b-card>
        <br>
        <b-button v-if="this.task.state === 0" variant="primary">Asignar tarea</b-button>&nbsp;&nbsp;&nbsp;
        <b-button variant="danger" v-on:click="deleteTask()">Eliminar Tarea</b-button>
      </b-card>
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
    deleteTask() {
      http
        .delete("/tasks/" + this.task.id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/tareas');
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>