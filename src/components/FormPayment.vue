<template>
  <div class="form__part d-none">
    <h2 class="main__content-title my-6">付款資訊</h2>
    <div class="form__row">
      <div class="form__col">
        <label>持卡人姓名</label>
        <input type="text" placeholder="John Doe" autocomplete="cc-name" required>
      </div>
    </div>
    <div class="form__row d-flex payment">
      <div class="form__col">
        <label>卡號</label>
        <input type="text" placeholder="1111 2222 3333 4444" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
          autocomplete="cc-number" required>
      </div>
      <div class="form__col col-half">
        <label for="expire-date">有效期限</label>
        <input type="text" placeholder="MM/YY" pattern="[0-9]{2}/[0-9]{2}" autocomplete="cc-exp" required>
      </div>
    </div>
    <div class="form__row">
      <div class="form__col">
        <label>CVV / CVC</label>
        <input type="text" placeholder="123" pattern="[0-9]{3}" autocomplete="csc" required>
      </div>
    </div>
  </div>
</template>
