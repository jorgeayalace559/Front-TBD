<template>
    <div>
        <b-card title="Emergencias Actuales" img-src="https://uecluster.blob.core.windows.net/images/futurosostenible/1513858195_lavas.jpg">
                        <b-list-group>
                            <b-list-group-item v-for="(emergency, index) in emergencies" :key="index">
                                <router-link :to="{
                                        name: 'emergency-details',
                                        params: { emergency: emergency, id: emergency.idEmergency }
                                    }">
                                        {{emergency.description}}
                                </router-link>
                            </b-list-group-item>
                        </b-list-group>
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