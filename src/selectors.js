import { createSelector } from 'redux-starter-kit'

export const getSize = createSelector(['appReducer.size'], o => o)

export const getView = createSelector(['appReducer.view'], o => o.view)
