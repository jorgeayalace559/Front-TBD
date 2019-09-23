<template>
    <div>
        <b-card>
            <b-row>
                <b-col cols="12" md="6">
                    <b-card title="Lista de tareas">
                        <b-list-group-item class="justify-content-between"  v-for="(task, index) in tasks" :key="index">
                            <router-link :to="{
                                    name: 'task-details',
                                    params: { task: task, id: task.id }
                                }">
                                    {{task.type}}
                            </router-link>
                            <span class="badge badge-success badge-pill" v-if="task.state === 1">A</span>
                            <span class="badge badge-danger badge-pill" v-else>N</span>
                        </b-list-group-item>
                    </b-card>
                    <a>Asignada
                      <span class="badge badge-success badge-pill">A</span>
                    </a>
                    <a>&nbsp;&nbsp;&nbsp;No asignada
                      <span class="badge badge-danger badge-pill">N</span>
                    </a>
                    
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

