<template>
  <div class="form__part d-none">
    <h2 class="main__content-title my-6">運送方式</h2>
    <div class="form__row shipping d-flex px-5 py-4 checked">
      <div class="form__col d-flex">
        <input type="radio" name="shipping-method" checked>
        <div class="ml-5">
          <label>標準運送</label>
          <p>約3~7個工作天</p>
        </div>
      </div>
      <span>免費</span>
    </div>
    <div class="form__row shipping d-flex px-5 py-4">
      <div class="form__col d-flex">
        <input type="radio" name="shipping-method">
        <div class="ml-5">
          <label>DHL貨運</label>
          <p>48小時內送達</p>
        </div>
      </div>
      <span>$500</span>
    </div>
  </div>

</template>
