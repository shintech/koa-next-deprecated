/* eslint-env jest */

import { shallow } from 'enzyme'
import Clicker from '.'

describe('COMPONENT -> Clicker...', () => {
  let clicker = shallow(<Clicker trees={{ value: 0 }} />)

  it(`expect h1 text to equal "Hello World!"...`, () => {
    expect(clicker.find('span').text()).toEqual('0')
  })
})
