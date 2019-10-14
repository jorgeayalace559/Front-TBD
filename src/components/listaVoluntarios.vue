<template>
    <div>
        <b-card title="Selecciona un voluntario">
            <b-row>
                <b-col>
                    <b-form-group @refreshData= "refreshList" v-model="dimension" id="input-group-3" label-for="input-3">
                        <b-form-select
                        id="input-3"
                        v-model="dimension"
                        :options="dimensiones"
                        required
                        ></b-form-select>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group  id="input-group-4" label-for="input-4">
                        <b-form-select v-model="voluntary">
                        <option v-for="option in voluntaries" v-bind:value="option" :key="option.id">
                            {{ option.voluntary.nombre }} {{option.voluntary.apellido}}
                        </option>
                        </b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button @click="saveTaskVoluntary">Confirmar</b-button>
        </b-card>
    </div>
</template>

<script>
import http from "@/http-common.js";

export default {
    props: ["task"],
    data() {
        return {
            voluntaries: [],
            voluntary: null,
            dimension: 'Fuerza',
            dimensiones: [{text: 'Dimensión', value: null},'Fuerza', 'Destreza','Liderazgo','Motivación','Conocimiento']
        };
    },
    methods: {
        retrieveCoordinators() {
        http
            .get("/volunteers/topVolunteers/"+this.dimension)
            .then(response => {
            this.voluntaries = response.data; // JSON are parsed automatically.
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
            });
        },
        refreshList() {
        this.retrieveCoordinators();
        },

        saveTaskVoluntary() {
            console.log(this.task);
        var data = {
            estado: 0,
            voluntary: this.voluntary.voluntary.idVoluntary,
            task: this.$route.params.id
        };
        console.log(data);
        http
            .post("/voluntary_tasks/create", data)
            .then(response => {
            console.log(response.data);
            alert("Se ha seleccionado un voluntario con éxito");
            })
            .catch(e => {
            console.log(e);
            alert("No has completado todos los campos");
            });

        },
    },
    mounted(){
        this.retrieveCoordinators();
    }
}
</script>