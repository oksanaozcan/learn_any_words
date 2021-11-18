import { LOAD_WORDS } from "../types";

const initialState = {
  categories: [],
  allWords: [],  
  favoriteWords: [],
  learnedWords: [],
  // categoryWords: [],
}

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WORDS: 
    return {
      ...state, 
      categories: action.payload.map(obj => {
        return Object.entries(obj).filter(item => item.includes('category'))
      }).flat(2).filter((v, i, a) => a.indexOf(v) === i).filter(elem => elem !== 'category'),
      allWords: action.payload,      
      favoriteWords: action.payload.filter(word => word.favorite),
      learnedWords: action.payload.filter(word => word.learned),
      // categoryWords: allWords.filter(word => word.category === action.payload),
    }
    default: 
      return state
  }  
}

export default wordReducer;