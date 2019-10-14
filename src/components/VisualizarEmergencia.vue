<template>
    <div >
        <b-card>
            <h3>Emergencias existentes</h3>
            <p>Se muestran a continuación las emergencias actuales </p>
                <b-list-group-item v-for="(emergency, index) in emergencies" :key="index">
                    <router-link :to="{
                            name: 'emergency-details',
                            params: { emergency: emergency, id: emergency.idEmergency }
                        }">
                            {{emergency.type}}:&nbsp;&nbsp;{{emergency.description}}
                    </router-link>
                    <span class="badge badge-success badge-pill" v-if="emergency.status === 1">A</span>
                    <span class="badge badge-danger badge-pill" v-else>N</span>
                </b-list-group-item>
                <router-view @refreshData="refreshList" ></router-view>
        </b-card>
    </div>
</template>

<script>
import http from "@/http-common.js";

export default {
    name: "VisualizarEmergencia",

    data(){
        return {
            emergencies: []
        };
    },
    computed: {

    },
    methods: {
        /* eslint-disable no-console */
        retrieveEmergencies() {
        http
            .get("/emergencies")
            .then(response => {
            this.emergencies = response.data; // JSON are parsed automatically.
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
            });
        },
        refreshList() {
        this.retrieveEmergencies();
        }
        /* eslint-enable no-console */
    },
    mounted(){
        this.refreshList();
    }
}
</script>