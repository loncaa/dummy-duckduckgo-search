import {createAction} from '../../helpers/actionsHelper';
import SearchService from '../../services/searchService';
import HistoryService from '../../services/historyService';

import {actionTypes as searchTypes} from './searchActionTypes';
import {actionTypes as uiTypes} from '../ui/uiActionTypes';

export function loadSearchHistory() {
  return dispatch => {
    dispatch(createAction(uiTypes.SET_SIDEBAR_LOADING, true));

    HistoryService.getHistoryList()
        .then(response => {
          const data = response.data

          if(data.ok && Array.isArray(data.history) && data.history.length > 0){
            dispatch(createAction(searchTypes.SET_SEARCH_HISTORY, data.history));
          }


          dispatch(createAction(uiTypes.SET_SIDEBAR_LOADING, false));
        })
        .catch(error => {
          dispatch(createAction(uiTypes.SET_SIDEBAR_LOADING, false));
        })
  }
}

export function searchData(query) {
  return dispatch => {
    dispatch(createAction(uiTypes.SET_SEARCH_LOADING, true));

    dispatch(createAction(searchTypes.SET_SEARCH_QUERY, query))

    return SearchService.searchData(query)
        .then(response => {
          const data = response.data;

          if(data.ok){
            dispatch(createAction(searchTypes.PRESERVE_SEARCH_HISTORY, query));
            dispatch(createAction(searchTypes.SEARCH_DATA_RESPONSE, data.array));
          }

          dispatch(createAction(uiTypes.SET_SEARCH_LOADING, false));
        })
        .catch(error => {
          dispatch(createAction(uiTypes.SET_SEARCH_LOADING, false));
        });
  }
}

export function setSearchQuery(query) {
  return createAction(searchTypes.SET_SEARCH_QUERY, query)
}
