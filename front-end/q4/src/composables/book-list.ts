import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import type { BookList } from '@/types'
import { cloneDeep } from 'lodash'

const defaultResult: BookList = { books: [], meta: { count: 0 } }

const error = ref<Error | null>(null)
const result = ref<BookList>(defaultResult)
const loading = ref(false)

export const useBookList = (searchText: Ref<string>) => {
  loading.value = true
  fetch(new URL('books', import.meta.env.VITE_BASE_SERVER_URL))
    .then(async (data) => {
      result.value = await data.json()
      error.value = null
    })
    .catch((err) => {
      error.value = new Error(err)
    })
    .finally(() => {
      loading.value = false
    })

  const filtered = ref<BookList>()

  watchEffect(() => {
    if (searchText.value.length === 0 || searchText.value.length >= 3) {
      error.value = null
      filtered.value = cloneDeep(result.value)
      if (searchText.value.length) {
        filtered.value.books = result.value.books.filter((book) =>
          new RegExp(searchText.value, 'i').test(book.title + book.synopsis)
        )
        filtered.value.meta.count = filtered.value.books.length
      }
    } else {
      const e = new Error(`Please write 3 characters or more if you're using the search`)
      e.name = 'Search input'
      error.value = e
    }
  })

  return {
    result: filtered,
    error,
    loading
  }
}
