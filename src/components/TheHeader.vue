<template>
  <header>
    <TheLogo />
    <Navbar />
  </header>
</template>

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
