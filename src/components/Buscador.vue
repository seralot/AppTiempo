<template>
  <b-form @submit.stop.prevent="changeUrl()">
    <b-form-group class="col-md-6 col-12 mx-auto" id="input-group-1" label="Ubicación: " label-for="input-1">
      <div class="d-flex justify-content-center">
        <b-form-input @input="throttledMethod()" @keyup.enter="changeUrl()" v-model="param"  id="input-1" required placeholder="Ubicación"></b-form-input>
      </div>
    </b-form-group>
    <p v-if="buscando">Buscando...</p>
  </b-form>
</template>

<script>
import {API_KEY, URL} from '@/services/services';
import axios from 'axios';
import _ from 'lodash';
export default {
  name: "buscador",
  data () {
    return {
      param: null,
      ciudades: null,
      buscando: false,
      detalles: []
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
  
    borrarArray(array){
      if(array.length!=0){
        array.splice(0, array.length);
      }
    },
    search: function(ubicacion) {
      this.buscando = true
      axios
     .get(URL+ubicacion+
     '&units=metric&lang=es&APPID='+API_KEY)
     .then(response => {
        this.ciudades = response.data;
        console.log(response)
        this.detalles = this.ciudades.list.map((item) => {
          return {
            nombre: this.ciudades.city.name,
            temp: item.main.temp,
            temp_max: item.main.temp_max,
            temp_min: item.main.temp_min,
            humedad: item.main.humidity,
            viento: item.wind.speed,
            estado: item.weather[0].description,
            icon: item.weather[0].icon,
            fecha: item.dt_txt
          }
        });
      }).catch(()=> {

     }).finally(() => {
        this.buscando = false
        if (this.detalles!=0) {
          this.$emit('change', this.detalles)
          // borramos el array detalles una vez pasamos los datos
          this.borrarArray(this.detalles)
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