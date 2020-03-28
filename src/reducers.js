import { createReducer } from '@reduxjs/toolkit'
import { init, setView } from './actions'

const initialState = {
  size: {
    width: 0,
    height: 0
  },
  view: ''
}

const appReducer = createReducer(initialState, {
  [init.type]: (state, action) => {
    state.size = action.payload.size
  },
  [setView.type]: (state, action) => {
    state.view = action.payload
  }
})

export default { appReducer }
