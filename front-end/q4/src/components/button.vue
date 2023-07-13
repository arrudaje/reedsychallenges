<template>
  <button
    class='button'
    :class='{
      "button--active": active
    }'
    @click='$emit("click")'
  >
    <slot />
  </button>
</template>

<script lang='ts' setup>
defineProps<{ active?: boolean }>()
defineEmits(['click'])
</script>

<style lang='scss' scoped>
@import '@/assets/variables';

.button {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  background: $color-titles;
  color: white;
  border: 2px solid $color-titles;
  font-weight: 700;

  &--active {
    background: transparent;
    color: $color-titles;
  }
}
</style>
