import { mount } from '@vue/test-utils'
import Comments from '@/components/comments.vue'
import Button from '@/components/button.vue'

describe('Comments', () => {
  it('should add a comment after clicking the button', async () => {
    const testComments = mount(Comments)
    const textArea = testComments.find('.comments__input')
    const sendButton = testComments.findComponent<typeof Button>('.comments__button')
    await textArea.setValue('am')
    await sendButton.trigger('click')

    expect(testComments.vm['error']).not.toBeNull()
    expect(testComments.vm['savedComments']).toHaveLength(0)

    await textArea.setValue('amazing')
    await sendButton.trigger('click')

    expect(testComments.vm['error']).toBeNull()
    expect(testComments.vm['savedComments']).toHaveLength(1)
  })
})
