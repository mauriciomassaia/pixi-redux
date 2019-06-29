import { createReducer } from 'redux-starter-kit'
import { init, setView } from './actions'

const initialState = {
  mode: null,
  resolution: 1,
  size: {
    width: 0,
    height: 0
  },
  view: ''
}

const appReducer = createReducer(initialState, {
  [init.type]: (state, action) => {
    const { size, resolution, mode } = action.payload
    state.mode = mode
    state.resolution = resolution
    state.size = size
  },
  [setView.type]: (state, action) => {
    state.view = action.payload
  }
})

export default { appReducer }
