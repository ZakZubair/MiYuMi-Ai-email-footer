import React from 'react'
import { shallow } from 'enzyme'
import Masthead from './index'
import serializer from 'enzyme-to-json/serializer'
expect.addSnapshotSerializer(serializer)

const links = [
  {
    href: 'https://github.com/ZakZubair/',
    text: 'Zak Zubair'
  },
  {
    href: 'http://MiYuMi.Ai',
    text: 'MiYuMi.Ai'
  }
]

test('Masthead snapshot test', () => {
  const component = shallow(<Masthead title='Zander' links={links} />).toJSON()
  expect(component).toMatchSnapshot()
})

it('should render a Masthead with title', () => {
  const wrapper = shallow(<Masthead title='Events' />)
  expect(wrapper.instance().props.title).toEqual('Events')
})
