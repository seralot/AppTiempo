<template>
  <div v-if="datosCiudad" class="col-md-6 col-12 mx-md-auto mx-auto">
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :controls="true"
        background="#FFFFFF"
        class="carousel"
        :interval=0
        :class="{ 'hide-prev': isFirstElement(), 'hide-next': isLastElement() }"
      >
        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide v-for="(data, indice) in datosCiudad" :key="indice">
          <div  class="row col-md-12 col-12 text-dark">
            <div class="col-12 col-md-6">
              <h1>{{ data.nombre }}</h1>
              <h6>{{ data.fecha | fecha }}</h6>
              <span>{{data.estado | capitalize}}</span>
              <img
                :src="`http://openweathermap.org/img/wn/${ data.icon }.png`"
                alt="Estado"
              />
            </div>
            <div class="col-12 col-md-6">
              <h1 class="display-1 mt-3">{{ data.temp | tempEntero }}º</h1>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
  <div v-else class="col-md-6 col-12 mx-md-auto mx-auto">
    <p class="bg-danger text-white font-weight-bold rounded">No se encontró la ubicación</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fecha: null,
      slide: 0
    };
  },
  methods:{
    isFirstElement () {
      if(this.slide==0){
        return true
      }else{
        return false
      }
    },
    isLastElement () {
      if(this.slide!=2){
        return false
      }else{
        return true
      }
    },
    init() {
      this.slide=0;
    },
  },
  props: {
    datosCiudad: Array
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
  },
  watch: {
    datosCiudad: function(){
      this.init();
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
.hide-prev .carousel-control-prev {
  display:none;
}
.hide-next .carousel-control-next {
  display:none;
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