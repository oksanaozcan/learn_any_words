import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import wordReducer from './reducers/wordReducer';

const rootReducer = combineReducers({
  word: wordReducer, 
})

export default createStore(rootReducer, applyMiddleware(thunk))