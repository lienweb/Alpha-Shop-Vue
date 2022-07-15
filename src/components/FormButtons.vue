<template>
  <div class="main__btn-control d-flex">
    <button type="button" class="btn previous" :class="{ 'd-none': currentStep === 1 }"
      :style="{ visibility: currentStep === 1 ? 'hidden' : 'visible' }"
      @click.stop.prevent="handlePreviousButtonClick">&#8592; 上一步</button>
    <button type="button" class="btn active next" v-if="currentStep !== totalSteps"
      @click.stop.prevent="handleNextButtonClick">下一步 &#8594;
    </button>
    <button type="submit" class="btn active submit" v-else @submit.stop.prevent="handleSubmitButtonClick">確認下單</button>
  </div>
</template>

<style lang="scss" src="@/assets/scss/components/buttons.scss" scoped>
</style>

<script>
export default {
  props: {
    initalStep: {
      type: Number,
      default: 1
    },
    totalSteps: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      currentStep: this.initalStep
    }
  },
  methods: {
    handlePreviousButtonClick () {
      this.currentStep -= 1
      this.$emit('after-button-click', this.currentStep)
    },
    handleNextButtonClick () {
      this.currentStep += 1
    },
    handleSubmitButtonClick () {
      this.currentStep = 1
    }
  }
}
</script>
