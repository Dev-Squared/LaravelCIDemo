// resources/assets/js/test/index.spec.js

import { mount } from '@vue/test-utils'
import ExampleComponent from '../components/ExampleComponent.vue'
import CompaniesCreate from '../components/companies/CompaniesCreate.vue'
import CompaniesEdit from '../components/companies/CompaniesEdit.vue'
import CompaniesIndex from '../components/companies/CompaniesIndex.vue'


test('it works', () => {
  expect(1 + 1).toBe(2)
})

test('Sample should mount without crashing', () => {
  const wrapper = mount(ExampleComponent)

  expect(wrapper).toMatchSnapshot()
})

test('Create companies should mount without crashing', () => {
    const wrapper = mount(CompaniesCreate)
  
    expect(wrapper).toMatchSnapshot()
  })

  
  test('Edit companies should mount without crashing', () => {

    const wrapper = mount(CompaniesEdit)
  
    expect(wrapper).toMatchSnapshot()
  })

  
  test('Index companies should mount without crashing', () => {
    const wrapper = mount(CompaniesIndex)
  
    expect(wrapper).toMatchSnapshot()
  })
  
