<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <h3 name="header">
              結帳資訊
            </h3>
          </div>

          <div class="modal-body">
            <pre name="body">
              {{ formData | displayFormData }}
            </pre>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" src="@/assets/scss/components/modal.scss" scoped>
</style>

<script>
export default {
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  filters: {
    displayFormData(form) {
      return JSON.stringify(form, null, 4)
    }
  }
}
</script>
