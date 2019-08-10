import {createStore,combineReducers,applyMiddleware} from 'redux'
import userState from './reducer/userState.js'
import productState from './reducer/productState.js'
import ReduxThunk from 'redux-thunk' 

const reducer=combineReducers({userState,productState})

export default  createStore(reducer,applyMiddleware(ReduxThunk))