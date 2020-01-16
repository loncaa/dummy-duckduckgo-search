import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './reducers'

const appReducers = combineReducers({...reducers})
const middlewares = [thunk, logger]

const store = createStore(appReducers, compose(applyMiddleware(...middlewares)))

export { store }