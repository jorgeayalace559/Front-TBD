<template>
    <div>
        <b-card title="Súmate como voluntario">
            <p>
                Completa los siguientes datos e inscríbete como voluntario en tu región.
            </p>
            <b-form>
                <b-row>
                    <b-col cols="12" md="4">
                        <b-form-input type="text" class="form-control" v-model="form.nombre" placeholder="Nombre"></b-form-input>
                    </b-col>
                    <b-col cols="12" md="4">
                        <b-form-input type="text" class="form-control" v-model="form.apellidoPaterno"  placeholder="Apellido paterno"></b-form-input>
                    </b-col>
                    <b-col cols="12" md="4">
                        <b-form-input type="text" class="form-control" v-model="form.apellidoMaterno"  placeholder="Apellido materno"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col cols="12" md="4">
                        <b-form-group v-model="form.genero" id="input-group-3" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.genero"
                            :options="generos"
                            required
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" md="4">
                        <b-form-input type="text" class="form-control" v-model="form.rut" placeholder="RUT"></b-form-input>
                    </b-col>
                    <b-col cols="12" md="4">
                        <b-form-input type="text" class="form-control" v-model="form.correo" placeholder="Correo electrónico"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-6">
                    <b-col cols="12" md="4">
                        <b-form-input type="number" class="form-control" v-model="form.celular" placeholder="Celular: +569"></b-form-input>
                    </b-col>
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
                        <b-form-group v-model="form.comunaSeleccionada" id="input-group-3" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.comunaSeleccionada"
                            :options="regionSeleccionada.comunas"
                            required
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
                <br>
                    <b-button class="text-center" variant="primary">Registrarme</b-button>
            </b-form>
            <span>{{form.nombreRegionSeleccionada}}</span>
        </b-card>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    data(){
        return {
            regionSeleccionada: '',
            form: {
            nombre: '',
            apellidoMaterno: '',
            apellidoPaterno: '',
            rut: '',
            correo: '',
            celular: null,
            genero: null,
            region: null,
            regionSeleccionada: '',
            comunaSeleccionada: null
            },
            generos: [{text: 'Selecciona tu sexo', value: null},'Hombre', 'Mujer','Ninguno']
        }
    },
    computed: {
        ...mapState(['regiones'])
    },
    methods: {

    }
}
</script>
