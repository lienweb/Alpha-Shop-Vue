<template>
  <div class="form__part">
    <h2 class="main__content-title my-6">寄送地址</h2>
    <div class="form__row d-flex">
      <div class="form__col w-25">
        <label for="gender-select">稱謂</label>
        <div class="select-wrap">
          <select name="稱謂" id="gender-select" required>
            <option value="mister" selected>先生</option>
            <option value="miss">小姐</option>
            <option value="mrs">太太</option>
          </select>
        </div>
      </div>
      <div class="form__col w-65  col-half">
        <label for="">姓名</label>
        <input type="text" placeholder="請輸入姓名" autocomplete="name" required>
      </div>
    </div>
    <!-- row end -->
    <div class="form__row">
      <div class="form__col">
        <label for="phone">電話</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" placeholder="請輸入行動電話"
          autocomplete="tel" required>
      </div>
      <div class="form__col mt-4">
        <label for="">Email</label>
        <input type="email" placeholder="請輸入Email" autocomplete="email" required>
      </div>
    </div>
    <div class="form__row">
      <div class="form__col">
        <label for="city-select">縣市</label>
        <div class="select-wrap">
          <select name="縣市" id="city-select" required>
            <option value="" disabled selected>請選擇縣市</option>
            <option value="taipei">Taipei</option>
          </select>
        </div>
      </div>
      <div class="form__col  mt-4">
        <label for="">地址</label>
        <input type="text" placeholder="請輸入地址" autocomplete="street-address" required>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
