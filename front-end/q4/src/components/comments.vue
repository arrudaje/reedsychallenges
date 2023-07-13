<template>
  <div class='comments'>
    <ErrorComponent v-if='error' :error='error' />
    <h3 class='comments__title'>Comments</h3>
    <textarea
      v-model='currentComment'
      class='comments__input'
      placeholder='Write your comment about this book...'
    />
    <Button class='comments__button' @click='saveComment'>Send</Button>
    <div class='comments__list'>
      <div v-for='comment in savedComments' class='comments__list__item'>
        <span class='comments__list__item__user'>Anonymous</span>
        <p class='comments__list__item__text'>{{ comment }}</p>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import Button from '@/components/button.vue'
import { ref } from 'vue'
import ErrorComponent from '@/components/error.vue'

const error = ref<Error | null>(null)
const savedComments = ref([])
const currentComment = ref('')

const saveComment = () => {
  if (currentComment.value.length >= 3) {
    savedComments.value.push(currentComment.value)
    currentComment.value = ''
    error.value = null
  } else {
    error.value = new Error('Please type 3 characters or more in order to write a comment.')
    ;(error.value as Error).name = 'Comment input'
  }
}
</script>

<style lang='scss' scoped>
@import '@/assets/variables';

.comments {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__title {
    color: $color-titles;
    font-weight: 700;
  }

  &__input {
    display: block;
  }

  &__button {
    align-self: flex-end;
  }

  &__list {
    display: flex;
    flex-direction: column;

    &__item {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
      border-bottom: 1px solid $color-titles;

      &__user {
        font-weight: 700;
        color: $color-titles;
      }

      &__text {
        font-style: italic;
      }
    }
  }
}
</style>
