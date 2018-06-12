// resources/assets/js/test/index.spec.js

import { mount } from '@vue/test-utils'
import ExampleComponent from '../components/ExampleComponent.vue'


describe('ExampleComponent.vue', () => {

  it('mounts and displays header', () => {
    const wrapper = mount(ExampleComponent) // Instances and mounts the component
    expect(wrapper.text()).toContain('String formatter')
  });
});