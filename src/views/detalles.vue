<template>
  <div id="details" class="text-center">
    <buscador @change="cargaDatos" :ubicacion.sync="query.ubicacion"></buscador>
    <div v-if="iniciado" >
      <visor :datosCiudad="dias" :fecha.sync="query.fecha"></visor>
      <button v-if="this.dias.length>0" class="mt-2 btn btn-lg btn-outline-dark boton" @click="ocultar()">Mostrar más</button>
      <tabla v-show="oculto" :datosCiudad="datosActuales"></tabla>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      oculto: false,
      btn: false,
      datosActuales: null,
      dias: [],
      iniciado: false,
      loaded: false,
      query: {
        ubicacion: null,
        fecha: null,
      }
    }
  },
  beforeMount (){
    this.query.ubicacion = this.$route.query.ubicacion
    this.query.fecha = this.$route.query.fecha
  },
  methods: {
    changeUrl(){
      this.$router.push({ name: 'detalles', query: this.query }).catch(err => { });
    },
    cargaDatos (detallesBuscador) {
      this.iniciado = true
      this.datosActuales = detallesBuscador
      this.dias=[]
      if(detallesBuscador){
        this.infoVisor();
      }else{
        this.dias = [];
      }
    },
    ocultar (){
      this.oculto = !this.oculto;
    },
    ocultarBtn (){
      if(this.dias!=0){
        this.btn = !this.btn;
      }
    },
    infoVisor (){
      this.dias.push(this.datosActuales[0], this.datosActuales[8], this.datosActuales[16]);
    }
  },
  watch: {
    dias: function(){
      this.ocultarBtn();
    },
    query: {
      handler() {
        this.changeUrl();
      },
      deep: true
    }
  }
};
</script>

<style lang="scss">
$tamaño-icono: 4em;
.icono{
  width: $tamaño-icono;
}

</style>
