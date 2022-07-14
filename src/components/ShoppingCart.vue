<template>
  <section class="main__cart-control mt-8 p-4">
    <h4 class="mb-8 d-none">購物籃</h4>
    <!-- cart -->
    <div class="cart-list">
      <div class="cart-item  mb-4 d-flex">
        <div class="cart-item__img">
          <img src="@/assets/images/cart_item1.png" alt="cart">
        </div>
        <div class="cart-item__item-wrap d-flex">
          <div class="cart-item__item-name">破壞補丁修身牛仔褲</div>
          <div class="cart-item__item-stock df-center-center">
            <div class="cart-item__item-circle circle-minus mr-6">-</div>
            <div class="cart-item__item-count">1</div>
            <div class="cart-item__item-circle circle-add ml-6">+</div>
          </div>
          <div class="cart-item__item-price">$3999</div>
        </div>
      </div>
      <div class="cart-item  d-flex">
        <div class="cart-item__img">
          <img src="@/assets/images/cart_item2.png" alt="">
        </div>
        <div class="cart-item__item-wrap d-flex">
          <div class="cart-item__item-name">刷色直筒牛仔褲</div>
          <div class="cart-item__item-stock df-center-center">
            <div class="cart-item__item-circle circle-minus mr-6">-</div>
            <div class="cart-item__item-count">1</div>
            <div class="cart-item__item-circle circle-add ml-6">+</div>
          </div>
          <div class="cart-item__item-price">$1299</div>
        </div>
      </div>
    </div>
    <!-- shipping -->
    <div class="cart__shipping-wrap d-flex pt-6 pb-4">
      <div class="cart__shipping-description">運費</div>
      <div class="cart__shipping-fee">免費</div>
    </div>
    <!-- amount -->
    <div class="cart__amount-wrap d-flex pt-6">
      <div class="cart__amount-description">小計</div>
      <div class="cart__amount">$5298</div>
    </div>
  </section>
</template>

<style lang="scss" src="">
</style>
