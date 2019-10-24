<template>
    <div id="details" class="text-center">
    <buscador @change="cargaDatos"></buscador>
    <div v-if="iniciado" >
      <tabla :datosCiudad="datosActuales"></tabla>
    </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        datosActuales: null,
        iniciado: false
      }
    },
    methods: {
      cargaDatos (detallesBuscador) {
        this.iniciado = true
        this.datosActuales = detallesBuscador
      }
    }
}
</script>

<style>

</style>