<template>
  <div>
    <b-navbar>
      <b-navbar-brand :to="{name: 'detalles'}">
        <img src="@/assets/logo.png" alt="logo" class="logo">
      </b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item right :to="{name: 'detalles'}">Inicio</b-nav-item>
        <b-nav-item right :to="{name: 'sobremi'}">Sobre mi</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "cabecera"
};
</script>

<style lang="scss">
$tamaño-logo: 4em;
.logo{
  width: $tamaño-logo;
}

</style>