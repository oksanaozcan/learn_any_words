import { LOAD_WORDS, TOGGLE_FAVORITE, TOGGLE_LEARNED, REMOVE_WORD } from "../types";

const initialState = {
  categories: [],
  allWords: [],  
  favoriteWords: [],
  learnedWords: []  
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
      learnedWords: action.payload.filter(word => word.learned)      
    }
    case TOGGLE_FAVORITE: 
      const allWords = state.allWords.map(word => {
        if (word.id === action.payload) {
          word.favorite = !word.favorite
        }
        return word
      })
      return {
        ...state, 
        categories: allWords.map(obj => {return Object.entries(obj).filter(item => item.includes('category'))}).flat(2).filter((v, i, a) => a.indexOf(v) === i).filter(elem => elem !== 'category'),
        allWords, 
        favoriteWords: allWords.filter(word => word.favorite),
        learnedWords: allWords.filter(word => word.learned)
      }
      case TOGGLE_LEARNED: 
      const allWordsLearned = state.allWords.map(word => {
        if (word.id === action.payload) {
          word.learned = !word.learned
        }
        return word
      })
      return {
        ...state, 
        categories: state.allWords.map(obj => {return Object.entries(obj).filter(item => item.includes('category'))}).flat(2).filter((v, i, a) => a.indexOf(v) === i).filter(elem => elem !== 'category'),
        allWordsLearned, 
        favoriteWords: state.allWords.filter(word => word.favorite),
        learnedWords: state.allWords.filter(word => word.learned)
      }
      case REMOVE_WORD:        
        return {
          ...state, 
          categories: state.allWords.map(obj => {return Object.entries(obj).filter(item => item.includes('category'))}).flat(2).filter((v, i, a) => a.indexOf(v) === i).filter(elem => elem !== 'category'),
          allWords: state.allWords.filter(word => word.id !== action.payload),
          favoriteWords: state.allWords.filter(word => word.favorite),
          learnedWords: state.allWords.filter(word => word.learned)
        }
    default: 
      return state
  }  
}

export default wordReducer;