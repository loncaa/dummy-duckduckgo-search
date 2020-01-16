import {actionTypes} from './uiActionTypes'

let defaultState = {
  searchLoading: false,
  sidebarLoading: false
}

export default function uiReducers(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SET_SEARCH_LOADING: {
      return {...state, searchLoading: action.data}
    }
    case actionTypes.SET_SIDEBAR_LOADING: {
      return {...state, sidebarLoading: action.data}
    }
    default: {
      return state
    }

  }
}