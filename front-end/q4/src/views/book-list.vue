<template>
  <div class="book-list">
    <h1 class="book-list__title">Top books of all time</h1>
    <div class="book-list__search">
      <input
        type="search"
        v-model="searchText"
        class="book-list__search__input"
        placeholder="Search for title or synopsis"
      />
    </div>
    <Loading v-if="loading" />
    <Error v-else-if="error" :error="error" />
    <PaginatedList v-if="list?.meta.count" :page-size="3">
      <BookItem
        v-for="(book, index) in list.books"
        :key="`book-item-${index}`"
        :order="index + 1"
        :book="book"
      />
    </PaginatedList>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useBookList } from '@/composables/book-list'
import Loading from '@/components/loading.vue'
import Error from '@/components/error.vue'
import BookItem from '@/components/book-item.vue'
import PaginatedList from '@/components/paginated-list.vue'

const searchText = ref('')
const { result: list, error, loading } = useBookList(searchText)
</script>

<style lang="scss" scoped>
@import '@/assets/variables';

.book-list {
  width: 100%;
  background: $color-background;

  &__title {
    text-align: center;
    font-weight: 700;
    color: $color-titles;
    padding: 16px;
  }

  &__search {
    background: white;
    padding: 8px;
    display: flex;

    &__input {
      flex-grow: 1;
      font-size: 16px;
      line-height: 20px;
      padding: 2px 8px;
      color: rgb(120, 120, 120);
      border-radius: 20px;
      border: 1px solid rgb(100, 100, 100);

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
