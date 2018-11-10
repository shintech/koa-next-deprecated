import C from '../constants'

export default {
  increment: function (value) {
    return {
      type: C.INCREMENT_TREES,
      payload: value
    }
  },

  fetchValue: function (value) {
    return {
      type: C.FETCH_VALUE,
      payload: value
    }
  }
}
