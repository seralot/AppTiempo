<template>
  <div id="details" class="text-center">
    <buscador @change="cargaDatos"></buscador>
    <div v-if="iniciado" >
      <visor :datosCiudad="dias"></visor>
      <button class="mt-2 btn btn-lg btn-outline-dark" @click="ocultar()">Mostrar más</button>
      <tabla v-show="oculto" :datosCiudad="datosActuales"></tabla>
    </div>
  </div>
</template>

<script>
 export default{
    data () {
      return {
        oculto: false,
        datosActuales: null,
        dias: [],
        iniciado: false,
        loaded: false,
      }
    },
    methods: {
      cargaDatos (detallesBuscador) {        
        this.iniciado = true
        this.datosActuales = detallesBuscador
        this.borrarArray(this.dias);
        this.infoVisor();
      },
      ocultar (){
        this.oculto = !this.oculto;
      },
      infoVisor (){
        this.dias.push(this.datosActuales[0], this.datosActuales[8], this.datosActuales[16]);
      },
      borrarArray(array){
      if(array.length!=0){
        array.splice(0, array.length);
      }
    },
    }
}
</script>

<style lang="scss">
$tamaño-icono: 4em;
.icono{
  width: $tamaño-icono;
}

</style>
