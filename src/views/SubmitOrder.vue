<template>
  <main class="mx-4 mb-9">
    <h1 class="mb-6">結帳</h1>
    <!-- stepper -->
    <FormSteppers :steps="steps" />
    <div class="main__content-container">
      <!-- form -->
      <FormSubmit />
      <!-- btn -->
      <!-- <div class="main__btn-control d-flex">
        <button type="button" class="btn d-none previous">&#8592; 上一步</button>
        <button type="button" class="btn active next" v-if="currentStep !== steps.length">下一步 &#8594;
        </button>
        <button type="submit" class="btn active submit d-none" v-else>確認下單</button>
      </div> -->
      <FormButtons :initial-step="currentStep" :total-steps="steps.length" @after-button-click="afterButtonClick" />
    </div>
  </main>
</template>

<style lang="scss" src="@/assets/scss/layout/forms.scss">
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
  },
  data () {
    return {
      steps: [
        {
          id: 1,
          title: '寄送地址',
          isActive: false
        },
        {
          id: 2,
          title: '運送方式',
          isActive: false
        },
        {
          id: 3,
          title: '付款資訊',
          isActive: false
        }
      ],
      currentStep: 1
    }
  },
  methods: {
    afterButtonClick (step) {
      this.currentStep = step
    }
  }
}

</script>
