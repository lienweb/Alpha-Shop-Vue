<template>
  <main class="mx-4 mb-9">
    <h1 class="mb-6">結帳</h1>
    <!-- stepper -->
    <FormSteppers />
    <div class="main__content-container">
      <!-- form -->
      <FormSubmit />
      <!-- btn -->
      <FormButtons />
    </div>
  </main>
</template>

<style lang="scss" src="">
</style>

<script>
import FormSteppers from '../components/FormSteppers.vue'
import FormSubmit from '../components/FormSubmit.vue'
import FormButtons from '../components/FormButtons.vue'

export default {
  components: {
    FormSteppers,
    FormSubmit,
    FormButtons
  }
}

</script>
