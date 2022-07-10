import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Greeter from '../Greeter.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Greeter, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
