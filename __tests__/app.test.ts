import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import App from '~/app.vue'

describe('./app.vue', () => {
  test('should match snapshot', () => {
    const wrapper = mount(App)
    expect(wrapper.element).toMatchSnapshot()
  })
})
