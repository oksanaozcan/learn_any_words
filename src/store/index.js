import {createStore, combineReducers} from 'redux';
import wordReducer from './reducers/wordReducer';

const rootReducer = () => combineReducers({
  word: wordReducer
})

export default createStore(rootReducer)