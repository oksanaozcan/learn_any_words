import * as FileSystem from 'expo-file-system';
import DB from "../../db";
import { LOAD_WORDS, TOGGLE_FAVORITE, TOGGLE_LEARNED, REMOVE_WORD, ADD_WORD } from "../types";

export const loadWords = () => { 
  return async dispatch => {
    const words = await DB.getWords()
    dispatch({
      type: LOAD_WORDS,
      payload: words
    })
  }  
}

export const toggleFavorite = id => {
  return {
    type: TOGGLE_FAVORITE,
    payload: id
  }
}

export const toggleLearned = id => {
  return {
    type: TOGGLE_LEARNED,
    payload: id
  }
}

export const removeWord = id => {
  return {
    type: REMOVE_WORD,
    payload: id
  }
}

export const addWord = newWord => async dispatch => {
  
  dispatch({
    type: ADD_WORD,
    payload: newWord
  })
}