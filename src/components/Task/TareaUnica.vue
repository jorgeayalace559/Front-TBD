<template>
    <div v-if="this.task">
      <b-card :title="task.type">
        <b-card>
          <p>{{this.task.description}}</p>
        </b-card>
        <br>
        <b-button v-if="this.task.state === 0"
        :to="{
                name: 'task-voluntary',
                params: {task: task, id:task.id}
                }"
        variant="primary">Asignar tarea</b-button>&nbsp;&nbsp;&nbsp;
        <b-button variant="danger" v-on:click="deleteTask()">Eliminar Tarea</b-button>
      </b-card>
        <router-view></router-view>
    </div>
</template>

<script>
import http from "@/http-common";
 
export default {
  name: "task",
  props: ["task"],
  methods: {
    /* eslint-disable no-console */
    updateTask(status) {
      var data = {
        id: this.tasks.id,
        name: this.tasks.name,
        age: this.tasks.age,
        active: status
      };
 
      http
        .put("/tasks/" + this.customer.id, data)
        .then(response => {
          console.log(response.data);
          console.log("Tarea actualizada con éxito");
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