<template>
  <div class="main__stepper-container d-flex">
    <div class="stepper__step" v-for="step in steps" :key="step.id" :class="{ 'step__shipping': step.id === 2 }">
      <div class="stepper__step-circle" :class="[{
        'first': step.id === 1,
        'active': step.isActive,
        'checked': step.id <= (currentStep - 1)
      }]">
        {{ step.id }}
      </div>
      <span class="stepper__step-line" :class="{ 'active': step.isActive }" v-show="step.id !== 1"></span>
      <div class="stepper__step-label" :class="{ 'active': step.isActive }">{{ step.title }}</div>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/scss/components/steppers.scss" scoped>
</style>

<script>
export default {
  props: {
    steps: {
      type: Array,
      required: true
    },
    currentStep: {
      type: Number,
      required: true
    }
  }
}
</script>
