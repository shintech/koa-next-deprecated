import C from '../constants'

const initialState = {
  value: 0
}

const trees = (state = initialState, action) => {
  switch (action.type) {
    case C.INCREMENT_TREES:
      let value = state.value + action.payload

      return { ...state, value }

    case C.FETCH_VALUE:
      return { ...state, value: action.payload }

    default:
      return state
  }
}

export default trees
