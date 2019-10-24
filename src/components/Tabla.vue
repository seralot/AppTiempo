<template>
    <table class="table mt-4">
        <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Temperatura</th>
            <th colspan="2">Estado</th>
        </tr>
        <tr v-for="(data, indice) in datosCiudad" :key="indice">
            <td>{{ data.fecha | fecha }}</td>
            <td>{{ data.fecha | hora }}</td>
            <td>{{ data.temp | tempEntero }}</td>
            <td>{{ data.estado }}</td>
            <td><img :src="`http://openweathermap.org/img/wn/${ data.icon }.png`" alt="Estado" ></td>
        </tr>
    </table>
</template>

<script>
export default {
    name: 'tabla',
    props: {
        datosCiudad: Array
    },
    mounted (){
        console.log(this.datosCiudad);
        // let tempTable = [];
        // this.datosCiudad.forEach( function(data) {
        //     data.horas.forEach()
        // })

    },
    filters: {
      tempEntero: function(value){
        return parseInt(value)+' º';
      },
      fecha: function(value){
        return value.slice(0,10);
      },
      hora: function(value){
        return value.slice(10);
      }
    }
}
</script>

<style>

</style>
