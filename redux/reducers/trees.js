import C from '../constants'

const initialState = {
  value: 0
}

const trees = (state = initialState, action) => {
  switch (action.type) {
    case C.INCREMENT_TREES:
      let value = state.value + action.payload

      return { ...state, value }

    default:
      return state
  }
}

export default trees
