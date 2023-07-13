<template>
  <div class="loading"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(defineProps<{ size?: number }>(), { size: 40 })
const size = computed(() => `${props.size}px`)
</script>

<style lang="scss" scoped>
@mixin circle {
  background: rgba(0, 0, 0, 0.5);
  width: v-bind(size);
  height: v-bind(size);
  border-radius: 50%;
}

.loading {
  @include circle;
  position: relative;
  animation: wobble 0.5s ease-out infinite;
  animation-direction: alternate;

  &::after {
    content: '';
    @include circle;
    position: absolute;
    top: 0;
    left: 0;
    animation: wobble 0.5s ease-out infinite;
    animation-direction: alternate-reverse;
  }
}

@keyframes wobble {
  0% {
    transform: scale(25%);
  }
  100% {
    transform: scale(100%);
  }
}
</style>
