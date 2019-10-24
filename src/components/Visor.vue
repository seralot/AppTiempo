<template>
  <div v-if="datosCiudad" class="col-md-6 col-12 mx-md-auto mx-auto">
    <!-- <b-card  no-body class="overflow-hidden" border-variant="secondary">
      <b-row no-gutters>
         <b-col md="1" class="d-none d-md-flex- d-lg-flex align-items-center"><button class="carousel-control-prev-icon bg-dark"></button></b-col>
        <b-col md="6">
          <b-card-body :title="`${this.datosCiudad[0].nombre}`" :sub-title="this.datosCiudad[0].fecha | fecha">
            <b-card-text>
              <span>{{this.datosCiudad[0].estado | capitalize}}</span>
              <img :src="`http://openweathermap.org/img/wn/${ this.datosCiudad[0].icon }.png`" alt="Estado" >
            </b-card-text>
          </b-card-body>
        </b-col>
          <b-col md="4">
            <h1 class="display-1 mt-3">{{ this.datosCiudad[0].temp | tempEntero }}º</h1>
        </b-col>
        <b-col md="1" class="d-none d-md-flex d-lg-flex align-items-center pl-lg-4 pl-md-2"><button class="carousel-control-next-icon bg-dark"></button></b-col>
      </b-row>
    </b-card>-->
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        controls
        background="#FFFFFF"
        class="carousel"
      >
        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide >
          <div class="row col-md-12 col-12 text-dark">
            <div class="col-12 col-md-6">
              <h1>{{ this.datosCiudad[0].nombre }}</h1>
              <h6>{{ this.datosCiudad[0].fecha | fecha }}</h6>
              <span>{{this.datosCiudad[0].estado | capitalize}}</span>
              <img
                :src="`http://openweathermap.org/img/wn/${ this.datosCiudad[0].icon }.png`"
                alt="Estado"
              />
            </div>
            <div class="col-12 col-md-6">
              <h1 class="display-1 mt-3">{{ this.datosCiudad[0].temp | tempEntero }}º</h1>
            </div>
          </div>

          <!-- sub-title="this.datosCiudad[0].fecha | fecha" -->
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
  <div v-else>
    <p class="bg-danger text-white font-weight-bold rounded">No se encontró la ubicación</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fecha: null
    };
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
    tempEntero: function(value) {
      return parseInt(value);
    },
    fecha: function(value) {
      return value.slice(0, 10);
    }
  }
};
</script>

<style>
.carousel-item{
  min-height: 200px;
}
.carousel-control-next-icon {
  background-image: url("../assets/derecha.png");
}
.carousel-control-prev-icon {
  background-image: url("../assets/izquierda.png");
}

@media screen and (max-width: 750px) {
  .carousel-item {
    min-height: 350px;
  }
}
@media  screen and (min-width: 751px) {
  .carousel-item {
    height: 220px;
  }
}
</style>