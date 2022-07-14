<template>
  <form action="#" class="main__form-control">
    <!-- address -->
    <FormAddress />
    <!-- shipping method -->
    <FormShipment />
    <!-- payment info -->
    <FormPayment />
  </form>
</template>

<style lang="scss" src="">
</style>

<script>
import FormAddress from './FormAddress.vue'
import FormShipment from './FormShipment.vue'
import FormPayment from './FormPayment.vue'

export default {
  components: {
    FormAddress,
    FormShipment,
    FormPayment
  }
}
</script>
