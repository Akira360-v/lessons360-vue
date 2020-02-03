<template>
  <div id="app">
    <div class="container header_container">
      <div class="header__menu">
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/login">Login</router-link>
          <router-link to="/categories">Categories</router-link>
          <router-link to="/history">history</router-link>
        </div>
        <div class="header__logo">
          <img src="" alt="logo">
        </div>
      </div>
    </div>
    <component :is='layout'>
      <router-view />
    </component>
  </div>
</template>

<script>
  import EmptyLayout from '@/layouts/EmptyLayout'
  import MainLayout from '@/layouts/MainLayout'
  
  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
        console.log(this.$route.meta)
      },
    },
    components: {
      EmptyLayout,
      MainLayout,
    }
  }
</script>

<style lang="sass">
@import '~materialize-css/dist/css/materialize.min.css'
@import 'assets/index.css'

</style>
