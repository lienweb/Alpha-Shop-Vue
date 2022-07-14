<template>
  <header>
    <input type="checkbox" class="header__hamburger d-none" id="navbar-toggle" />
    <TheLogo />
    <Navbar />
  </header>
</template>

<style lang="scss" src="@/assets/scss/layout/header.scss">
</style>

<script>
import Navbar from './Navbar.vue'
import TheLogo from './TheLogo.vue'

export default {
  components: {
    Navbar,
    TheLogo
  }
}
</script>
