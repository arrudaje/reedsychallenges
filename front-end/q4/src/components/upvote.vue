<template>
  <div class="upvote">
    <Button :active="upvoted" @click="toggleUpvote">
      {{ upvoted ? 'Upvoted' : 'Upvote' }}
    </Button>
    <span class="upvote__upvotes"> Upvoted {{ upvotes }} times </span>
  </div>
</template>

<script lang="ts" setup>
import type { Book } from '@/types'
import { useUpvotes } from '@/composables/book'
import Button from '@/components/button.vue'

const props = defineProps<{
  book: Book
}>()

const { upvotes, upvoted, toggleUpvote } = useUpvotes(props.book)
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

.upvote {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
