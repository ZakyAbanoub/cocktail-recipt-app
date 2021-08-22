import { mount } from '@vue/test-utils'
import RandomCocktail from '@/views/RandomCocktail.vue'

describe('RandomCocktail.vue', () => {
  it('renders tab 1 view', () => {
    const wrapper = mount(RandomCocktail)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
