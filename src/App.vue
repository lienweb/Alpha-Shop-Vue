<template>
  <div id="app" class="container">
    <!-- header -->
    <TheHeader />

    <!-- page -->
    <main>
      <router-view />
    </main>

    <!-- footer -->
  </div>
</template>

<style lang="scss" src="@/assets/scss/components/containers.scss">
</style>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>
