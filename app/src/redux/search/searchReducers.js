import {actionTypes} from './searchActionTypes'
let defaultState = {
  searchQuery: '',
  result: [],
  history : []
}

export default function searchReducers(state = defaultState, action) {

  switch (action.type) {
    case actionTypes.SEARCH_DATA_RESPONSE: {

      return {...state, result: action.data}
    }
    case actionTypes.PRESERVE_SEARCH_HISTORY: {
      let newHistory = [...state.history]

      if(newHistory.length > 9){
        newHistory.splice(0,1)
      }

      newHistory.push(action.data)

      return {...state, history: newHistory}
    }
    case actionTypes.SET_SEARCH_HISTORY: {

      let newHistory = [...action.data]

      if(newHistory.length > 10){
        newHistory.splice(0,newHistory.length - 10)
      }

      return {...state, history: newHistory}
    }
    case actionTypes.SET_SEARCH_QUERY: {
      return {...state, searchQuery: action.data}
    }
    default: {
      return state
    }

  }
}