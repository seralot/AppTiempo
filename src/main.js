import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


import Buscador from '@/components/Buscador.vue';
import Cabecera from '@/components/Cabecera.vue';
import Visor from '@/components/Visor.vue';
import Tabla from '@/components/Tabla.vue';


Vue.use(BootstrapVue);

Vue.config.app = process.env;
Vue.config.productionTip = false;

Vue.component('buscador', Buscador)
Vue.component('cabecera', Cabecera)
Vue.component('visor', Visor)
Vue.component('tabla', Tabla)



new Vue({
    router,
    Buscador,
    Cabecera,
    Visor,
    Tabla,
    render: h => h(App),
}).$mount('#app')