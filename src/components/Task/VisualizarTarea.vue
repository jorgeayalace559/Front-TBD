<template>
    <div>
        <b-card title="Tareas">
            <b-row>
                <b-col cols="12" md="6">
                    <b-card title="Lista de tareas">
                        <a v-for="(task, index) in tasks" :key="index">
                            <router-link :to="{
                                    name: 'task-details',
                                    params: { task: task, id: task.id }
                                }">
                                    {{task.type}}
                            </router-link>
                        </a>                        
                    </b-card>
                </b-col>
                <b-col cols="12" md="6">
                        <router-view @refreshData="refreshList" ></router-view>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
import http from "@/http-common.js";
 
export default {
  name: "visualizarTareas",
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveTasks() {
      http
        .get("/tasks")
        .then(response => {
          this.tasks = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveTasks();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrieveTasks();
  }
};
</script>

