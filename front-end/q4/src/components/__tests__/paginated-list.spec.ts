import { mount } from '@vue/test-utils'
import PaginatedList from '@/components/paginated-list.vue'

describe('Paginated List', () => {
  it('should split children in pages', () => {
    const testPaginatedList = mount({
      template: `<PaginatedList :page-size='3'>
        <div v-for='child in children'>{{child}}</div>
        <div>6</div>
        <div>7</div>
      </PaginatedList>`,
      components: { PaginatedList },
      data() {
        return { children: [1, 2, 3, 4, 5] }
      }
    })
    const list = testPaginatedList.findComponent(PaginatedList)

    expect(list.vm['paginated'].length).toBe(3)
    expect(list.vm['paginated'][0].length).toBe(3)
    expect(list.vm['paginated'][1].length).toBe(3)
    expect(list.vm['paginated'][2].length).toBe(1)
  })

  it('should display the correct page', async () => {
    const testPaginatedList = mount({
      template: `<PaginatedList :page-size='3'>
        <div v-for='child in children'>{{child}}</div>
        <div>60</div>
        <div>70</div>
      </PaginatedList>`,
      components: { PaginatedList },
      data() {
        return { children: [10, 20, 30, 40, 50] }
      }
    })
    const list = testPaginatedList.findComponent(PaginatedList)

    expect(list.vm['currentPage']).toBe(0)

    const pages = list.findAllComponents('.paginated-list__pages__page')
    await pages[1].trigger('click')

    expect(list.vm['currentPage']).toBe(1)
  })
})
