export type Book = {
  author: string
  cover: string
  rating: string
  slug: string
  synopsis: string
  title: string
  upvoted: boolean
  upvotes: number
}

export type BookList = {
  books: Array<Book>
  meta: {
    count: number
  }
}
