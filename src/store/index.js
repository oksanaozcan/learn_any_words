import {createStore, combineReducers} from 'redux';
import wordReducer from './reducers/WordReducer';

const rootReducer = () => combineReducers({
  word: wordReducer
})

export default createStore(rootReducer)