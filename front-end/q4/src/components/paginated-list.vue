<template>
  <div class='paginated-list'>
    <Component :is='child' v-for='child in paginated[currentPage]' />
    <div class='paginated-list__pages'>
      <Button
        v-if='allowedPrevious'
        class='paginated-list__pages__page'
        @click='previous'
      >
        &lt;
      </Button>
      <Button
        v-if='paginated.length > 1'
        v-for='(page, index) in paginated'
        :active='index === currentPage'
        class='paginated-list__pages__page'
        @click='currentPage = index'
      >
        {{ index + 1 }}
      </Button>
      <Button
        v-if='allowedNext'
        class='paginated-list__pages__page'
        @click='next'
      >
        &gt;
      </Button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed, Fragment, ref, useSlots } from 'vue'
import Button from '@/components/button.vue'

const props = withDefaults(defineProps<{
  pageSize?: number
}>(), {
  pageSize: 5
})

const slot = useSlots().default()

const children = computed(() => slot.reduce((acc, cur) => {
    if (cur.type === Fragment) acc.push(...cur.children)
    else acc.push(cur)
    return acc
  }, []))
const currentPage = ref(0)

const paginated = computed(() => {
  const result = []
  for (let i = 0; i < children.value.length; i += props.pageSize) {
    const page = children.value.slice(i, i + props.pageSize);
    result.push(page)
  }
  return result
})

const allowedNext = computed(() => currentPage.value < paginated.value.length - 1)
const allowedPrevious = computed(() => currentPage.value > 0)
const next = () => currentPage.value += 1
const previous = () => currentPage.value -= 1
</script>

<style lang='scss' scoped>
@import '@/assets/variables';

.paginated-list {
  &__pages {
    padding: 16px;
    background: white;
    display: flex;
    justify-content: center;

    &__page {
      border-radius: 0;

      &:first-child {
        border-radius: 4px 0 0 4px;
      }

      &:last-child {
        border-radius: 0 4px 4px 0;
      }
    }
  }
}
</style>
