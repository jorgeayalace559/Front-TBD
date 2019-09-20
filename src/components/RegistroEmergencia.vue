<template>
    <div class="registroEmergencia">
        <b-card title="Registra tu emergencia ahora mismo">
            <p>
                Completa los siguientes datos para registrar una nueva emergencia
            </p>
            <b-form>
                <b-row>
                    <b-col cols="12" md="4">
                        <b-form-input type="text" class="form-control" v-model="form.titulo" placeholder="Título"></b-form-input>
                    </b-col>
                    <b-col cols="12" md="4">
                        <b-form-input type="number" class="form-control" v-model="form.cantidadVoluntarios" placeholder="Cantidad de voluntarios"></b-form-input>
                    </b-col>
                    <b-col cols="12" md="4">
                        <b-form-group v-model="form.tipo" id="input-group-3" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.tipo"
                            :options="tiposEmergencias"
                            required
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="mt-6">
                    <b-col cols="12" md="4">
                        <b-form-group id="input-group-4" label-for="input-4">
                            <b-form-select v-model="regionSeleccionada">
                            <option v-for="option in regiones" v-bind:value="option" :key="option.id">
                                {{ option.region }}
                            </option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" md="4">
                        <b-form-group  v-model="form.comuna" id="input-group-2" label-for="input-2">
                            <b-form-select
                            id="input-2"
                            v-model="form.comuna"
                            :options="regionSeleccionada.comunas"
                            required
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" md="4">
                        <b-form-group  v-model="form.color" id="input-group-4" label-for="input-4">
                            <b-form-select
                            id="input-4"
                            v-model="form.color"
                            :options="colores"
                            required
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12" md="6">
                        <b-form-input type="text" class="form-control" v-model="form.calle" placeholder="Calle"></b-form-input>
                    </b-col>
                    <b-col cols="12" md="6">
                        <b-form-input type="number" class="form-control" v-model="form.numeroCalle"  placeholder="Número calle"></b-form-input>
                    </b-col>
                </b-row>
                <br>
                <b-row>
                    <b-col cols="12" md="12">
                        <b-form-input type="text" class="form-control" v-model="form.descripcion"  placeholder="Descripción"></b-form-input>
                    </b-col>
                </b-row>
                <br>
                    <b-button @click="actualizarRegion" class="text-center" variant="primary">Guardar</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';

export default {
    data(){
        return {
            regionSeleccionada: '',
            form: {
            titulo: '',
            descripcion: '',
            cantidadVoluntarios: null,
            tipo: null,
            calle: null,
            numeroCalle: null,
            region: null,
            comuna:null,
            estado: false,
            color: null
            },
            tiposEmergencias: [{text: 'Tipo de emergencia', value: null},'Incendio', 'Tsunami','Forestal'],
            colores: [{text: 'Color alerta', value: null},'Rojo', 'Amarillo','Verde']
        }
    },
    computed: {
        ...mapState(['regiones'])
    },
    methods: {
        ...mapMutations(['llenarRegiones']),
        ...mapActions(['obtenerRegiones']),
        actualizarRegion: function () {
            this.form.region = this.regionSeleccionada.region
        }
    }
}
</script>

