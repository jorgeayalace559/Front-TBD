<template>
    <div id="registroTarea">
        <b-card title="Crea una nueva tarea ahora mismo">
            <p>
                Completa los siguientes datos para crear una nueva tarea
            </p>
            <b-form>
                <b-row>
                    <b-col>
                        <b-form-group v-model="task.type" id="input-group-3" label-for="input-3">
                        <b-form-select
                        id="input-3"
                        v-model="task.type"
                        :options="tipos"
                        required
                        ></b-form-select>
                    </b-form-group>
                    </b-col>
                    
                </b-row>
                <b-row>
                    <b-col cols="12" md="12">
                        <b-form-input type="text" class="form-control" v-model="task.description"  placeholder="Descripción"></b-form-input>
                    </b-col>
                </b-row>
                <br>
                <b-button v-on:click="saveTask" class="text-center" variant="primary">Crear Tarea</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
import http from "@/http-common";

export default {
    data() {
        return {
            task: {
                type: null,
                description: '',
                capacity: 1,
                state: 0
            },
            tipos: [{text: 'Tipo de tarea', value: null},'Primeros auxilios', 'Sacar escombro','Rescate','Atención personal'],
            
        }
    },

    methods: {
        /* eslint-disable no-console */
        saveTask() {
        var data = {
            type: this.task.type,
            description: this.task.description,
            capacity: this.task.capacity,
            state: this.task.state,
            emergency: 1,
            user: 1
        };
        console.log(data);
        http
            .post("/tasks/create", data)
            .then(response => {
            this.task.id = response.data.id;
            console.log(response.data);
            alert("Se ha creado la tarea con éxito");
            location.reload();
            })
            .catch(e => {
            console.log(e);
            alert("No has completado todos los campos");
            });
        },
    }
}
</script>

<style>

.color{
  border-block-color:  rgb(239,228,176)
}
 

</style>