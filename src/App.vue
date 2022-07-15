<template>
  <div id="app" class="container">
    <!-- header -->
    <TheHeader />

    <!-- page -->
    <router-view />

    <!-- footer -->
    <TheFooter />
  </div>
</template>

<style lang="scss" src="@/assets/scss/components/containers.scss">
</style>

<script>
// import '@/assets/scss/global.scss' //sass var fail to compile
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
