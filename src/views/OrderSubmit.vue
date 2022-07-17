<template>
  <main class="mx-4 mb-9">
    <h1 class="mb-6">結帳</h1>
    <!-- stepper -->
    <FormSteppers :steps="steps" :current-step="currentStep" />

    <div class="main__content-container">
      <form class="main__form-control" @submit.stop.prevent="handleSubmit">
        <!-- form -->
        <FormAddress v-show="currentStep === 1" :initial-form="order" />
        <FormShipment v-show="currentStep === 2" :initial-form="order" />
        <FormPayment v-show="currentStep === steps.length" :initial-form="order" />

        <!-- btn -->
        <div class="main__btn-control d-flex">
          <button type="button" class="btn previous" :class="{ 'd-none': currentStep === 1 }"
            :style="{ visibility: currentStep === 1 ? 'hidden' : 'visible' }"
            @click.stop.prevent="handlePreviousButtonClick">&#8592; 上一步</button>
          <button type="button" class="btn active next" v-if="currentStep !== steps.length"
            @click.stop.prevent="handleNextButtonClick">下一步 &#8594;
          </button>
          <button type="submit" class="btn active submit" v-else>確認下單</button>
        </div>
      </form>
      <!-- cart -->
      <ShoppingCart :initial-form="order" @after-calc="afterCalc" />
    </div>
  </main>
</template>

<style lang="scss" src="@/assets/scss/layout/forms.scss" scoped>
</style>
<style lang="scss" src="@/assets/scss/components/buttons.scss" scoped>
</style>

<script>
import FormSteppers from '../components/FormSteppers.vue'
import FormAddress from './FormAddress.vue'
import FormShipment from './FormShipment.vue'
import FormPayment from './FormPayment.vue'
import ShoppingCart from '../components/ShoppingCart.vue'

export default {
  components: {
    FormSteppers,
    FormAddress,
    FormShipment,
    FormPayment,
    ShoppingCart
  },
  data () {
    return {
      steps: [
        {
          id: 1,
          title: '寄送地址',
          isActive: true,
          pathName: 'submit-address'
        },
        {
          id: 2,
          title: '運送方式',
          isActive: false,
          pathName: 'submit-shipping'
        },
        {
          id: 3,
          title: '付款資訊',
          isActive: false,
          pathName: 'submit-payment'
        }
      ],
      currentStep: 1,
      formPath: 'root',
      order: {
        salutation: 'mister',
        name: '',
        phone: '',
        email: '',
        billingCity: '',
        billingAddress: '',
        shippingFee: 0,
        cardHolder: '',
        cardNumber: '',
        expireDate: '',
        CVV: '',
        totalPrice: 0
      }
    }
  },
  methods: {
    activeStep () {
      this.steps = this.steps.map(step => {
        return {
          ...step,
          isActive: step.id <= this.currentStep
        }
      })
    },
    formValidate () {
      console.log('validate')
    },
    afterButtonClick ({ step, currentPath }) {
      // const { step, currentPath } = formStep
      this.currentStep = step
      this.activeStep()
      // this.formPath = currentPath
    },
    afterCalc (total) {
      this.order.totalPrice = total
    },
    // buttons
    handlePreviousButtonClick () {
      this.currentStep -= 1
      this.activeStep()
    },
    handleNextButtonClick () {
      this.currentStep += 1
      this.activeStep()
    },
    handleSubmit (e) {
      this.validateForm()
      console.log(JSON.stringify(this.order, null, 4))

      this.initForm()
      this.activeStep()
    },
    initForm () {
      this.currentStep = 1
      this.order = {
        salutation: 'mister',
        name: '',
        phone: '',
        email: '',
        billingCity: '',
        billingAddress: '',
        shippingFee: 0,
        cardHolder: '',
        cardNumber: '',
        expireDate: '',
        CVV: '',
        totalPrice: 0
      }
    },
    validateForm () {
      console.log('validate form data')
    }
  }
}

</script>
