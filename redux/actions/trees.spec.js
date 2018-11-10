/* eslint-env jest */

import { initStore } from '../'
import { increment } from './trees'

const store = initStore({}, {
  isServer: true
})

describe('REDUX -> ACTION - /trees -> fetchPosts()...', () => {
  beforeAll(() => {
    store.dispatch(increment(1))
  })

  it('expect trees to have property "value"...', () => {
    expect(store.getState().trees).toHaveProperty('value')
  })

  it('expect trees.value to equal "1"...', () => {
    expect(store.getState().trees.value).toEqual(1)
  })
})
