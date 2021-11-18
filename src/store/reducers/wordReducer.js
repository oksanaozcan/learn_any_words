import { LOAD_WORDS } from "../types";

const initialState = {
  allWords: [],  
  favoriteWords: [],
  learnedWords: [],
  categoryWords: [],
  categories: []
}

const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WORDS: 
    return {
      ...state, 
      allWords: action.payload,      
      favoriteWords: action.payload.filter(word => word.favorite),
      learnedWords: action.payload.filter(word => word.learned),
      categoryWords: allWords.filter(word => word.category === action.payload),
      categories: ['animals', 'verbs', 'stuff']
    }
    default: 
      return state
  }  
}

export default wordReducer;