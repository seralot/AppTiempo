<template>
  <b-form @submit.stop.prevent="changeUrl()">
    <b-form-group id="input-group-1" label="Ubicación: " label-for="input-1">
      <div class="d-flex justify-content-center">
        <b-form-input @input="throttledMethod()" @keyup.enter="changeUrl()" v-model="param"  id="input-1" required placeholder="Ubicación"></b-form-input>
      </div>
    </b-form-group>
    <p v-if="buscando">Buscando...</p>
  </b-form>
</template>

<script>
import {API_KEY, URL} from '../services/services';
import axios from 'axios';
import _ from 'lodash';
export default {
  name: "buscador",
  data () {
    return {
      param: null,
      ciudades: null,
      buscando: false,
      ciudadEncontrada: {
         nombre: null,
         temp: null,
         estado: null,
         icon: null,
         fecha: null}
    }
  },
  mounted (){
    if(this.$route.query.ubicacion){
      this.search(this.$route.query.ubicacion);
    }
    this.throttledMethod();
  },
  methods: {
    changeUrl(){
      this.$router.push({ name: 'detalles', query: { ubicacion: this.param } }).catch(err => { });
    },
    throttledMethod: _.debounce(function() {
      this.changeUrl();
    }, 1000),
    search: function(ubicacion) {
      this.buscando = true
      axios
     .get(URL+ubicacion+
     '&units=metric&lang=es&APPID='+API_KEY)
     .then(response => {
       this.ciudades = response.data;
       this.ciudadEncontrada.nombre = this.ciudades.name;
       this.ciudadEncontrada.temp = this.ciudades.main.temp;
       this.ciudadEncontrada.estado = this.ciudades.weather[0].description;
       this.ciudadEncontrada.icon = this.ciudades.weather[0].icon;
       this.ciudadEncontrada.fecha = this.ciudades.dt;
     }).catch(()=> {
       this.ciudadEncontrada = {
         nombre: null,
         temp: null,
         estado: null,
         icon: null}
     }).finally(() => {
        this.buscando = false
        if (this.ciudadEncontrada.nombre) {
          this.$emit('change', this.ciudadEncontrada)
        } else {
          this.$emit('change', null)
        }
     })
    }
  },
   watch: {
    $route(to, from) {
      if(this.$route.query.ubicacion){
        this.search(this.$route.query.ubicacion)
      }
    }
  }
};
</script>

<style>
</style>