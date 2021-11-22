import { LOAD_WORDS, TOGGLE_FAVORITE, TOGGLE_LEARNED, REMOVE_WORD, ADD_WORD, EDIT_WORD } from "../types";

const initialState = {  
  allWords: [],  
  categories: [],
  favoriteWords: [],
  learnedWords: []  
}

function createAllCategories(array) {
  const newarray = array.map(obj => {
    return Object.entries(obj).filter(item => item.includes('category'))
  }).flat(2).filter((v, i, a) => a.indexOf(v) === i).filter(elem => elem !== 'category');
  return newarray
}

const wordReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_WORDS: 
      return {
        ...state,       
        allWords: action.payload,
        initCategories: function() {
          this.categories = createAllCategories(this.allWords);
          delete this.initCategories;
          return this
        },     
        favoriteWords: action.payload.filter(word => word.favorite),
        learnedWords: action.payload.filter(word => word.learned)      
      }.initCategories()
    
      case TOGGLE_FAVORITE: 
        const allWords = state.allWords.map(word => {
          if (word.id === action.payload) {
            word.favorite = !word.favorite
          }
          return word
        })
        return {
          ...state,         
          allWords, 
          initCategories: function() {
            this.categories = createAllCategories(this.allWords);
            delete this.initCategories;
            return this
          },     
          favoriteWords: state.allWords.filter(word => word.favorite),
          learnedWords: state.allWords.filter(word => word.learned)
        }.initCategories()
      
      case TOGGLE_LEARNED: 
        const allWordsLearned = state.allWords.map(word => {
          if (word.id === action.payload) {
            word.learned = !word.learned
          }
          return word
        })
        return {
          ...state,           
          allWords: allWordsLearned, 
          initCategories: function() {
            this.categories = createAllCategories(this.allWords);
            delete this.initCategories;
            return this
          },     
          favoriteWords: state.allWords.filter(word => word.favorite),
          learnedWords: state.allWords.filter(word => word.learned)
        }.initCategories()
      
        case REMOVE_WORD:        
          return {
            ...state, 
            allWords: state.allWords.filter(word => word.id !== action.payload),
            initCategories: function() {
              this.categories = createAllCategories(this.allWords);
              delete this.initCategories;
              return this
            },     
            favoriteWords: state.allWords.filter(word => word.favorite),
            learnedWords: state.allWords.filter(word => word.learned)
          }.initCategories()
        
        case ADD_WORD: 
          return {
            ...state,        
            allWords: [...state.allWords, {...action.payload}],
            initCategories: function() {
              this.categories = createAllCategories(this.allWords);
              delete this.initCategories;
              return this
            },     
            favoriteWords: state.allWords.filter(word => word.favorite),
            learnedWords: state.allWords.filter(word => word.learned) 
          }.initCategories()

          case EDIT_WORD:       
          const editedAllWords = state.allWords.map(obj => {
            if (obj.id.toString() === action.payload.id.toString()) {
              return {...obj, ...action.payload}
            } else {
              return obj
            }
          })
          return {
            ...state,        
            allWords: editedAllWords, 
            initCategories: function() {
              this.categories = createAllCategories(this.allWords);
              delete this.initCategories;
              return this
            },     
            favoriteWords: state.allWords.filter(word => word.favorite),
            learnedWords: state.allWords.filter(word => word.learned) 
          }.initCategories()
    default: 
      return state
  }  
}

export default wordReducer;