<template>
  <div class="main__stepper-container d-flex">
    <div class="stepper__step" v-for="step in steps" :key="step.id">
      <div class="stepper__step-circle">{{ step.id }}</div>
      <span class="stepper__step-line" :class="{ active: step.isActive }"></span>
      <div class="stepper__step-label">{{ step.title }}</div>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/scss/components/steppers.scss" scoped>
</style>

<script>
/*
TODO
first: stepper_step=/circle=first/ label=active, line=none
second: stepper_step=step__shipping/circle=first/ line=active,
third: stepper_step=/circle=/
*/
export default {
  props: {
    steps: {
      type: Array,
      required: true
    }
  }
}
</script>
