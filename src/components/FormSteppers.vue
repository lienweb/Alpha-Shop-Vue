<template>
  <div class="main__stepper-container d-flex" data-step="1">
    <div class="stepper__step">
      <div class="stepper__step-circle first">1</div>
      <div class="stepper__step-label active">寄送地址</div>
    </div>
    <div class="stepper__step step__shipping">
      <div class="stepper__step-circle">2</div>
      <span class="stepper__step-line active"></span>
      <div class="stepper__step-label">運送方式</div>
    </div>
    <div class="stepper__step">
      <div class="stepper__step-circle">3</div>
      <span class="stepper__step-line"></span>
      <div class="stepper__step-label">付款資訊</div>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/scss/components/stepper.scss">
</style>
