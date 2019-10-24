<template>
  <div id="details" class="text-center">
    <buscador @change="cargaDatos"></buscador>
    <div v-if="iniciado" >
      <visor :datosCiudad="datosActuales"></visor>
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
        iniciado: false
      }
    },
    methods: {
      cargaDatos (detallesBuscador) {
        this.iniciado = true
        this.datosActuales = detallesBuscador
      },
      ocultar (){
        this.oculto = !this.oculto;
      }
    }
}
</script>

<style lang="scss">
$tamaño-icono: 4em;
.icono{
  width: $tamaño-icono;
}

</style>
