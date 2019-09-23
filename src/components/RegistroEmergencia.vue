<template>
    <div class="registroEmergencia">
        <b-card title="Registra tu emergencia ahora mismo">
            <p>
                Completa los siguientes datos para registrar una nueva emergencia
            </p>
            <b-form>
                <b-row>
                    <b-col cols="12" md="4">
                        <b-form-input type="text" class="form-control" v-model="emergency.description" placeholder="Descripción"></b-form-input>
                    </b-col>
                    <b-col cols="12" md="4">
                        <b-form-input type="number" class="form-control" v-model="emergency.capacity" placeholder="Número de voluntarios"></b-form-input>
                    </b-col>
                    <b-col cols="12" md="4">
                        <b-form-group v-model="emergency.type" id="input-group-3" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="emergency.type"
                            :options="tiposEmergencias"
                            required
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="mt-6">
                    <b-col cols="12" md="6">
                        <b-form-group id="input-group-4" label-for="input-4">
                            <b-form-select v-model="regionSeleccionada">
                            <option v-for="option in regiones" v-bind:value="option" :key="option.id">
                                {{ option.region }}
                            </option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" md="6">
                        <b-form-group  v-model="direction.district" id="input-group-2" label-for="input-2">
                            <b-form-select
                            id="input-2"
                            v-model="direction.district"
                            :options="regionSeleccionada.comunas"
                            required
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12" md="6">
                        <b-form-input type="text" class="form-control" v-model="direction.street" placeholder="Calle"></b-form-input>
                    </b-col>
                    <b-col cols="12" md="6">
                        <b-form-input type="number" class="form-control" v-model="direction.number"  placeholder="Número calle"></b-form-input>
                    </b-col>
                </b-row>
                <br>
                    <b-button @click="saveEmergency" class="text-center" variant="primary">Guardar</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
import http from "@/http-common";
import {mapState} from 'vuex';

export default {
    data(){
        return {
            regionSeleccionada: '',
            emergency: {
                id: 0,
                description: '',
                capacity: null,
                type: null,
                status: 0
            },
            direction: {
                street: null,
                number: null,
                district: null,
                district_id: null,
                emergency: null,
                idDistrict: null
            },
            tiposEmergencias: [{text: 'Tipo de emergencia', value: null},'Incendio', 'Tsunami','Forestal'],
            colores: [{text: 'Color alerta', value: null},'Rojo', 'Amarillo','Verde'],
            dataEmergencyOut: []
        }
    },
    computed: {
        ...mapState(['regiones'])
    },
    methods: {
        /* eslint-disable no-console */
        saveEmergency() {
        var dataEmergency = {
            type: this.emergency.type,
            description: this.emergency.description,
            capacity: this.emergency.capacity,
            status: this.emergency.status,
            user: 1
        };
        http
            .post("/emergencies/create", dataEmergency)
            .then(response => {
            this.emergency.id = response.data.idEmergency;
            console.log(response.data);
            this.getDistrict();
            })
            .catch(e => {
            console.log(e);
            alert("No has completado todos los campos");
            });

        },
        getDistrict(){
            http
                .get("/districtByName/"+this.direction.district)
                .then(response => {
                    this.direction.idDistrict = response.data.id;
                    console.log(this.direction.idDistrict);
                    this.saveDirection();
                })
                .catch(e => {
                    console.log(e);
                });
        },
        saveDirection(){
            var dataDirection = {
                street: this.direction.street,
                number: this.direction.number,
                district: this.direction.idDistrict,
                emergency: this.emergency.id,
                voluntary: 1
            };
            console.log(dataDirection);
            http
                .post("/direction/create", dataDirection)
                .then(response => {
                console.log(response.data);
                alert("Se ha creado la emergencia con éxito");
                location.reload();
                })
                .catch(e => {
                console.log(e);
                alert("No has completado todos los campos");
                });
        }
    }
}
</script>

