<template>
  <section class="main__cart-control mt-8 p-4">
    <h4 class="mb-8 d-none">購物籃</h4>
    <!-- cart -->
    <div class="cart-list">
      <div class="cart-item  mb-4 d-flex" v-for="item in shoppingCart" :key="item.id">
        <div class="cart-item__img">
          <img :src="require(`@/assets/images/${item.image}`)" alt="cart">
        </div>
        <div class="cart-item__item-wrap d-flex">
          <div class="cart-item__item-name">{{ item.itemName }}</div>
          <div class="cart-item__item-stock df-center-center">
            <div class="cart-item__item-circle circle-minus mr-6" @click.stop.prevent="handleDeleteItem(item.id)">-
            </div>
            <div class="cart-item__item-count">{{ item.itemCount }}</div>
            <div class="cart-item__item-circle circle-add ml-6" @click.stop.prevent="handleAddItem(item.id)">+</div>
          </div>
          <div class="cart-item__item-price">${{ item.itemPrice }}</div>
        </div>
      </div>
    </div>
    <!-- shipping -->
    <div class="cart__shipping-wrap d-flex pt-6 pb-4">
      <div class="cart__shipping-description">運費</div>
      <div class="cart__shipping-fee">{{ initialForm.shippingFee | displayShipping }}</div>
    </div>
    <!-- amount -->
    <div class="cart__amount-wrap d-flex pt-6">
      <div class="cart__amount-description">小計</div>
      <div class="cart__amount">${{ sum }}</div>
    </div>
  </section>
</template>

<style lang="scss" src="@/assets/scss/components/cart.scss" scoped>
</style>

<script>
const dummyData = {
  cart: [
    {
      id: 1,
      itemName: '破壞補丁修身牛仔褲',
      itemPrice: 3999,
      itemCount: 1,
      image: 'cart_item1.png'
    },
    {
      id: 2,
      itemName: '刷色直筒牛仔褲',
      itemPrice: 1299,
      itemCount: 1,
      image: 'cart_item2.png'
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
      shoppingCart: {},
      sum: 0
    }
  },
  methods: {
    fetchCart () {
      this.shoppingCart = dummyData.cart
    },
    handleAddItem (id) {
      this.shoppingCart = this.shoppingCart.map(item => {
        return item.id === id ? {
          ...item,
          itemCount: item.itemCount ? (item.itemCount + 1) : 0
        } : item
      })
    },
    handleDeleteItem (id) {
      this.shoppingCart = this.shoppingCart.map(item => {
        return item.id === id ? {
          ...item,
          itemCount: item.itemCount ? (item.itemCount - 1) : 0
        } : item
      })
    },
    calcTotalAmount () {
      // reset sum
      this.sum = 0
      this.shoppingCart.forEach(item => {
        this.sum += (item.itemPrice * item.itemCount)
      })
      this.sum += parseInt(this.initialForm.shippingFee)
    }
  },
  created () {
    this.fetchCart()
    this.calcTotalAmount()
  },
  watch: {
    shoppingCart: {
      handler: function () {
        this.calcTotalAmount()
      },
      deep: true
    },
    initialForm: {
      handler: function () {
        this.calcTotalAmount()
      },
      deep: true
    },
    sum: {
      handler: function () {
        this.$emit('after-calc', this.sum)
      }
    }
  },
  filters: {
    displayShipping (fee) {
      return fee ? `$${fee}` : '免費'
    }
  }
}
// 運費更新、sum的回傳
</script>
