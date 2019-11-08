<template>
  <div id="app" class="container">
    <cabecera class="col-md-8 col-12 mx-auto"></cabecera>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
}
</script>

<style lang="scss">
$fuente: Helvetica, Arial, sans-serif;
$margen: 60px;
#app {
  font-family: $fuente;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: $margen;
}
</style>
