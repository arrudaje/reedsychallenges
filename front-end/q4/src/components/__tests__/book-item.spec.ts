import { shallowMount } from '@vue/test-utils'
import BookItem from '@/components/book-item.vue'
import type { Book } from '@/types'

const book: Book = {
  author: 'Marcel Proust',
  cover: '01.jpg',
  rating: '9.9',
  slug: 'in-search-of-lost-time',
  synopsis:
    "In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.\nIn Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.",
  title: 'In Search of Lost Time',
  upvoted: false,
  upvotes: 1111
}

describe('Book Item', () => {
  it('should have odd modifier based on order prop', () => {
    const oddBook = shallowMount(BookItem, {
      props: {
        order: 1,
        book
      }
    })

    const evenBook = shallowMount(BookItem, {
      props: {
        order: 2,
        book
      }
    })

    expect(oddBook.classes().includes('book-item--odd')).toBeTruthy()
    expect(evenBook.classes().includes('book-item--odd')).toBeFalsy()
  })

  it('should trim the synopsis to 200 characters', () => {
    const testBook = shallowMount(BookItem, {
      props: {
        order: 1,
        book
      }
    })

    // counting 203 because of the ellipsis
    expect(testBook.vm['synopsis'].length).toBe(203)
  })
})
