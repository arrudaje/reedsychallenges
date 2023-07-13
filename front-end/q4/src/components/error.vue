<template>
  <div class='error'>
    <h2 class='error__title'>
      Error: {{ error.name }}
    </h2>
    <p class='error__message'>
      {{ error.message }}
    </p>
  </div>
</template>

<script lang='ts' setup>
defineProps<{
  error: Error
}>()
</script>

<style lang='scss' scoped>
.error {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 16px;
  width: 300px;
  background: rgb(255, 240, 240);
  border: 1px solid rgb(50, 0, 0);
  border-radius: 4px;
  animation: slideIn 0.5s ease-out alternate;

  &__title {
    color: rgb(100, 0, 0)
  }

  &__message {
    color: rgb(50, 0, 0)
  }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
