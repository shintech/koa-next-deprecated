import C from '../constants'

export function increment (value) {
  return {
    type: C.INCREMENT_TREES,
    payload: value
  }
}
