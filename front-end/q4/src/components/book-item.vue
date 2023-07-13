<template>
  <div
    class='book-item'
    :class='{ "book-item--odd": order % 2 }'
  >
    <div class='book-item__info'>
      <div class='book-item__info__header'>
        <RouterLink
          :to='routerLink'
          class='book-item__info__header__title'
        >
          {{ order }}. {{ book.title }}
        </RouterLink>
        <span class='book-item__info__header__rating'>({{ book.rating }}/10)</span>
      </div>
      <div class='book-item__info__author'>{{ book.author }}</div>
      <p class='book-item__info__synopsis'>
        {{ synopsis }}
      </p>
      <Upvote class='book-item__info__upvote' :book='book' />
    </div>
    <RouterLink :to='routerLink' class='book-item__cover'>
      <img :src='book.cover' :alt='`${book.title} cover`' />
    </RouterLink>
  </div>
</template>

<script lang='ts' setup>
import type { Book } from '@/types'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Upvote from '@/components/upvote.vue'

const props = defineProps<{
  order: number
  book: Book
}>()

const synopsis = computed(() => {
  if (props.book.synopsis.length <= 200) return props.book.synopsis
  return `${props.book.synopsis.substring(0, 200)}...`
})

const routerLink = computed(() => ({
  name: "book",
  params: { slug: props.book.slug }
}))
</script>

<style lang='scss' scoped>
@import '@/assets/variables';
@import '@/assets/mixins';

.book-item {
  padding: 24px;
  display: flex;
  gap: 16px;

  &--odd {
    background: white;
  }

  &__info {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;

    &__header {
      display: inline-flex;
      align-items: center;
      margin-bottom: 16px;

      &__title {
        font-weight: 700;
        color: $color-titles;
        font-size: 20px;
      }

      &__rating {
        margin-left: 8px;
      }
    }

    &__author {
      font-style: italic;
      margin-bottom: 16px;
    }

    &__upvote {
      margin-top: auto;
    }
  }

  &__cover {
    flex: 0 0 25%;
    @include bookCover;
  }
}

@media screen and (max-width: 414px) {
  .book-item {
    flex-direction: column-reverse;

    &__info {
      &__upvote {
        margin-top: 16px;
      }
    }
  }
}
</style>
