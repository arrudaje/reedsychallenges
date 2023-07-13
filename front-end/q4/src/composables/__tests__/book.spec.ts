import { useUpvotes } from '../book'
import { expect } from 'vitest'

describe('Book', () => {
  describe('useUpvotes', () => {
    it('should toggle upvotes correctly', () => {
      const { upvoted, upvotes, toggleUpvote } = useUpvotes({
        author: 'Marcel Proust',
        cover: '01.jpg',
        rating: '9.9',
        slug: 'in-search-of-lost-time',
        synopsis:
          "In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.\nIn Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.",
        title: 'In Search of Lost Time',
        upvoted: false,
        upvotes: 1111
      })

      toggleUpvote()

      expect(upvoted.value).toBeTruthy()
      expect(upvotes.value).toBe(1112)

      toggleUpvote()

      expect(upvoted.value).toBeFalsy()
      expect(upvotes.value).toBe(1111)
    })
  })
})
