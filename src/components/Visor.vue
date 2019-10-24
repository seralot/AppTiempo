<template>
  <div v-if="datosCiudad" >
    <b-card  no-body class="overflow-hidden" border-variant="secondary">
      <b-row no-gutters>
        <b-col md="7">
          <b-card-body :title="`${this.datosCiudad[0].nombre}`" :sub-title="this.datosCiudad[0].fecha | fecha">
            <b-card-text>
              <span>{{this.datosCiudad[0].estado | capitalize}}</span>
              <img :src="`http://openweathermap.org/img/wn/${ this.datosCiudad[0].icon }.png`" alt="Estado" >
            </b-card-text>
          </b-card-body>
        </b-col>
          <b-col md="5">
            <h1 class="display-1 mt-3">{{ this.datosCiudad[0].temp | tempEntero }}º</h1>
        </b-col>
      </b-row>
    </b-card>

  </div>
  <div v-else>
     <p class="bg-danger text-white font-weight-bold rounded">No se encontró la ubicación</p>
  </div>
</template>

<script>
export default {
    data () {
      return {
        fecha: null,
      }
    },
    props: {
        datosCiudad: Array
    },
    // Computed properties
    computed: {
      /*hora: function(){
        if(this.ciudad.fecha){
          let fecha = new Date(this.ciudad.fecha*1000);
          return fecha.getHours()+":"+fecha.getMinutes();
        }else{
          return "";
        }
      }*/
    },
    // Filtro para poner en mayusculas un string
    filters: {
      capitalize: function(value) {
         return value.toUpperCase();
      },
      tempEntero: function(value){
        return parseInt(value);
      },
      fecha: function(value){
        return value.slice(0,10);
      }
    }
}
</script>

<style>
</style>