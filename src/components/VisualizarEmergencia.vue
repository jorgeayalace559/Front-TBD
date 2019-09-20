<template>
    <div >
        <b-card>
            <h3>Emergencias existentes</h3>
            <p>Se muestran a continuación las emergencias actuales </p>
            <b-card-group deck>
                <b-card v-for="item in emergencias" :key="item.id" img-src="https://cdn-pro.elsalvador.com/wp-content/uploads/2018/10/Indonesia-destruccion_07.jpg" >
                    <h4>{{item.titulo}}</h4>
                    <p>{{item.descripcion}}</p>
                </b-card>
            </b-card-group>
        </b-card>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    data(){
        return {
            
        }
    },
    computed: {
        ...mapState(['emergencias'])
    },
    methods: {

    }
}
</script>