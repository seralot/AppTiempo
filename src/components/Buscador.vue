<template>
  <b-form @submit.stop.prevent="search(param)">
    <b-form-group
      class="col-md-8 col-12 mx-auto"
      id="input-group-1"
      label="Ubicación: "
      label-for="input-1"
    >
      <div class="d-flex justify-content-center">
        <b-form-input
          @input="throttledMethod()"
          @keyup.enter="search(param)"
          v-model="param"
          id="input-1"
          required
          placeholder="Ubicación"
        ></b-form-input>
      </div>
    </b-form-group>
    <p v-if="buscando">Buscando...</p>
  </b-form>
</template>

<script>
import { URL } from "@/services/services"
import axios from "axios"
import _ from "lodash"
export default {
  name: "buscador",
  props: {
    ubicacion: String,
    fecha: String,
  },
  data() {
    return {
      param: null,
      ciudades: null,
      buscando: false,
      detalles: [],
    }
  },
  mounted() {
    if (this.ubicacion) {
      this.param = this.ubicacion
      this.search(this.param)
    }
  },
  methods: {
    throttledMethod: _.debounce(function() {
      console.log(this.param)
      this.$emit("update:ubicacion", this.param)
      this.search(this.param)
    }, 1000),
    crearObjeto(nombre, temp, estado, icon, fecha, hora) {
      const ciudad = {
        nombre: nombre,
        temp: temp,
        estado: estado,
        icon: icon,
        fecha: fecha,
        hora: hora,
      }

      this.detalles.push(ciudad)
      console.log(">>>>>", ciudad)
    },
    borrarArray(array) {
      if (array.length != 0) {
        array.splice(0, array.length)
      }
    },
    search: function(ubicacion) {
      this.buscando = true
      axios
        .get(URL + "?city=" + ubicacion + "&day=" + this.fecha)
        .then(response => {
          this.ciudades = response.data
          console.log(response)
          this.detalles = this.ciudades.map(item => {
            return {
              nombre: this.ciudades[0].city,
              temp: item.temp_max,
              temp_max: item.temp_max,
              temp_min: item.temp_min,
              humedad: item.humidity,
              viento: item.wind,
              estado: item.description,
              icon: item.icon,
              fecha: item.datetime,
            }
          })
        })
        .catch(() => {})
        .finally(() => {
          this.buscando = false
          if (this.detalles != 0) {
            this.$emit("change", this.detalles)
            // borramos el array detalles una vez pasamos los datos
            this.detalles = []
          } else {
            this.$emit("change", null)
          }
        })
    },
  },
  watch: {
    fecha: function() {
      this.search(this.ubicacion)
    },
  },
}
</script>

<style></style>
