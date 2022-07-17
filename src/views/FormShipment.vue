<template>
  <div class="form__part">
    <h2 class="main__content-title my-6">運送方式</h2>
    <div class="form__row shipping d-flex px-5 py-4" v-for="method in shippingMethods" :key="method.id"
      :class="{ 'checked': method.isActive }">
      <div class="form__col d-flex">
        <input type="radio" name="shipping-method" :checked="method.isActive" :value="method.fee"
          :class="{ 'checked': method.isActive }" v-model="shippingFee" :id="method.id"
          @click.stop.prevent="handleMethodClick($event, method.id)">
        <div class="ml-5">
          <label :for="method.id">{{ method.name }}</label>
          <p>{{ method.duration }}</p>
        </div>
      </div>
      <span>{{ method.fee ? method.fee : '免費' }}</span>
    </div>
  </div>

</template>

<style lang="scss" src="@/assets/scss/layout/forms.scss" scoped>
</style>

<script>
const dummyData = {
  shippingMethods: [
    {
      id: 1,
      name: '標準運送',
      duration: '約3~7個工作天',
      fee: 0
    },
    {
      id: 2,
      name: 'DHL貨運',
      duration: '48小時內送達',
      fee: 500
    }
  ]
}
export default {
  props: {
    initialForm: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      shippingMethods: [],
      shippingFee: 0
    }
  },
  methods: {
    fetchShippingMethods () {
      this.shippingMethods = dummyData.shippingMethods.map(method => ({
        ...method,
        isActive: method.id === 1
      }))
    },
    handleMethodClick (event, id) {
      this.shippingMethods = this.shippingMethods.map(method => ({
        ...method,
        isActive: method.id === id
      }))
      this.shippingFee = parseInt(event.target.value)
      this.$emit('after-select-shipping', this.shippingFee)
    }
  },
  created () {
    this.fetchShippingMethods()
  }
}
</script>
