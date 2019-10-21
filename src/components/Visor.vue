<template>
  <div v-if="ciudad" >
    <div>
      <b-card
        class="text-left"
        :title="`${ciudad.nombre}`"
        :sub-title="`${this.hora}`">
      <b-card-text>
        <p>{{ciudad.estado | capitalize}}</p>
        <div class="d-flex justify-content-center">
          <img :src="`http://openweathermap.org/img/wn/${ ciudad.icon }.png`" alt="Estado" class="icono mb-1 mr-2 col-4">
          <h1 class="display-1">{{ tempEntero }}º</h1>
        </div>
      </b-card-text>
      </b-card>
     </div>
  </div>
  <div v-else>
     <p class="bg-danger text-white font-weight-bold rounded">No se encontró la ubicación</p> 
  </div>
</template>

<script>
export default {
    data () {
      return {
        fecha: null
      }
    },
    mounted () {
      this.fecha = new Date();
    },
    props: {
        ciudad: Object
    },
    // Computed properties
    computed: {
      // La variable tempEntero devuelve la temperatura de la ciudad sin decimales
      tempEntero: function() {
        return parseInt(this.ciudad.temp);
      },
      hora: function(){
        if(this.fecha){
        return this.fecha.getHours()+":"+this.fecha.getMinutes();
        }else{
          return "";
        }
      }
    },
    // Filtro para poner en mayusculas un string
    filters: {
      capitalize: function(value) {
         return value.toUpperCase();
      }
    }
}
</script>

<style>

</style>