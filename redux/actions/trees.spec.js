/* eslint-env jest */

import { initStore } from '../'
import actions from './trees'

describe('REDUX -> ACTION - /trees -> increment()...', () => {
  const store = initStore({}, { isServer: true })

  beforeAll(() => {
    store.dispatch(actions.increment(1))
  })

  it('expect trees to have property "value"...', () => {
    expect(store.getState().trees).toHaveProperty('value')
  })

  it('expect trees.value to equal "1"...', () => {
    expect(store.getState().trees.value).toEqual(1)
  })
})

describe('REDUX -> ACTION - /trees -> decrement()...', () => {
  const store = initStore({}, { isServer: true })

  beforeAll(() => {
    store.dispatch(actions.decrement(1))
  })

  it('expect trees to have property "value"...', () => {
    expect(store.getState().trees).toHaveProperty('value')
  })

  it('expect trees.value to equal "-1"...', () => {
    expect(store.getState().trees.value).toEqual(-1)
  })
})
