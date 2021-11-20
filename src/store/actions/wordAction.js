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

export const toggleFavorite = word => async dispatch => {
  await DB.updateFavorite(word)
  dispatch({
    type: TOGGLE_FAVORITE,
    payload: word.id
  })
}

export const toggleLearned = word => async dispatch => {
  await DB.updateLearned(word)
  dispatch({
    type: TOGGLE_LEARNED,
    payload: word.id
  })
}

export const removeWord = id => async dispatch => {
  await DB.removeWord(id)
  dispatch( {
    type: REMOVE_WORD,
    payload: id
  })
}

export const addWord = newWord => async dispatch => {
  const payload = {...newWord}
  const id = await DB.createWord(payload)

  payload.id = id
  
  dispatch({
    type: ADD_WORD,
    payload
  })
}