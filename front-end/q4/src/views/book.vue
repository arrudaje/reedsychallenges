<template>
  <RouterLink :to='{ name: "list" }' class='book__back'>
    <span class='book__back__arrow'>&lt;-</span>
    Back to list
  </RouterLink>
  <div class='book'>
    <Loading v-if='loading' :size='100' class='book__loading' />
    <Error v-else-if='error' :error='error' />
    <template v-if='book'>
      <div class='book__header'>
        <div class='book__header__info'>
          <h1 class='book__header__info__title'>{{ book.title }}</h1>
          <span class='book__header__info__author'>{{ book.author }}</span>
        </div>
        <Upvote class='book__header__upvote' :book='book' />
      </div>
      <div class='book__cover'>
        <img :src='book.cover' :alt='`${book.title} cover`' />
      </div>
      <div class='book__synopsis'>
        <h2 class='book__synopsis__title'>Synopsis</h2>
        <p>{{ book.synopsis }}</p>
      </div>
      <div class='book__rating'>
        Rating: {{ book.rating }}/10
      </div>
      <Comments class='book__comments' />
    </template>
  </div>
</template>

<script lang='ts' setup>
import Loading from '@/components/loading.vue'
import Error from '@/components/error.vue'
import Upvote from '@/components/upvote.vue'
import Comments from '@/components/comments.vue'
import { RouterLink } from 'vue-router'
import { useBook } from '@/composables/book'

const props = defineProps<{
  slug: string
}>()

const { result: book, error, loading } = useBook(props.slug)
</script>

<style lang='scss' scoped>
@import '@/assets/variables';
@import '@/assets/mixins';

.book {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;

  &__back {
    background: $color-titles;
    color: white;
    padding: 8px;
    text-align: center;
    text-decoration: none;
    position: sticky;
    top: 0;
    display: block;

    &__arrow {
      font-weight: 700;
      position: absolute;
      left: 8px;
    }
  }

  &__loading {
    margin: auto;
  }

  &__header {
    display: flex;
    align-items: flex-start;

    &__info {
      &__title {
        line-height: 1;
        font-weight: 700;
        color: $color-titles;
        margin-bottom: 8px;
      }

      &__author {
        font-style: italic;
      }
    }

    &__upvote {
      margin-left: auto;
    }
  }

  &__cover {
    margin: 16px;
    @include bookCover;
  }

  &__synopsis {
    &__title {
      font-weight: 700;
      margin-bottom: 16px;
    }
  }

  &__rating {
    font-weight: 700;
  }

  &__comments {
    margin-top: 32px;
  }
}

@media screen and (max-width: 414px) {
  .book {
    &__header {
      flex-direction: column;
      gap: 16px;

      &__upvote {
        margin-left: 0;
      }
    }
  }
}
</style>
