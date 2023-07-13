import { ref } from 'vue'
import type { Book } from '@/types'

const error = ref<Error | null>(null)
const result = ref<Book | null>(null)
const loading = ref(false)

export const useBook = (slug: string) => {
  loading.value = true
  fetch(new URL(`books/${slug}`, import.meta.env.VITE_BASE_SERVER_URL))
    .then(async (data) => {
      result.value = await data.json()
      error.value = null
    })
    .catch((err) => {
      result.value = null
      error.value = new Error(err)
    })
    .finally(() => {
      loading.value = false
    })

  return {
    result,
    error,
    loading
  }
}

export const useUpvotes = (book: Book) => {
  const upvotes = ref(0)
  const upvoted = ref(false)

  if (book) {
    upvotes.value = book.upvotes
    upvoted.value = book.upvoted
  }

  return {
    upvotes,
    upvoted,
    toggleUpvote() {
      if (upvoted.value) {
        upvoted.value = false
        upvotes.value -= 1
      } else {
        upvoted.value = true
        upvotes.value += 1
      }
    }
  }
}
