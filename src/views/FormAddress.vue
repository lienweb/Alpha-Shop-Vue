<template>
  <div class="form__part">
    <h2 class="main__content-title my-6">寄送地址</h2>
    <div class="form__row d-flex">
      <div class="form__col w-25">
        <label for="gender-select">稱謂</label>
        <div class="select-wrap">
          <select name="稱謂" id="gender-select" v-model="initialForm.salutation" required>
            <option value="mister">先生</option>
            <option value="miss">小姐</option>
            <option value="mrs">太太</option>
          </select>
        </div>
      </div>
      <div class="form__col w-65  col-half">
        <label for="">姓名</label>
        <input type="text" placeholder="請輸入姓名" autocomplete="name" required v-model.lazy.trim="initialForm.name">
      </div>
    </div>
    <!-- row end -->
    <div class="form__row">
      <div class="form__col">
        <label for="phone">電話</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{4}[0-9]{3}[0-9]{3}" placeholder="請輸入行動電話"
          autocomplete="tel" required v-model.lazy.trim="initialForm.phone">
      </div>
      <div class="form__col mt-4">
        <label for="">Email</label>
        <input type="email" placeholder="請輸入Email" autocomplete="email" required v-model.lazy.trim="initialForm.email">
      </div>
    </div>
    <div class="form__row">
      <div class="form__col">
        <label for="city-select">縣市</label>
        <div class="select-wrap">
          <select name="縣市" id="city-select" required v-model="initialForm.billingCity">
            <option value="" disabled>請選擇縣市</option>
            <option v-for="city in cities" :key="city.id" :value="city.city">{{ city.city }}</option>
          </select>
        </div>
      </div>
      <div class="form__col  mt-4">
        <label for="">地址</label>
        <input type="text" placeholder="請輸入地址" autocomplete="street-address" required
          v-model.lazy.trim="initialForm.billingAddress">
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/scss/layout/forms.scss" scoped>
</style>

<script>
const dummyCities = {
  cities: [
    {
      id: 1,
      city: 'Taipei'
    },
    {
      id: 2,
      city: 'New Taipei'
    },
    {
      id: 3,
      city: 'Taichung'
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
  methods: {
    fetchCities () {
      // from API
      this.cities = dummyCities.cities
    }

  },
  created () {
    this.fetchCities()
  }
}
</script>
