import { LOAD_WORDS, TOGGLE_FAVORITE, TOGGLE_LEARNED, REMOVE_WORD } from "../types";
import {DATA} from '../../data';

export const loadWords = () => {
  return {
    type: LOAD_WORDS,
    payload: DATA
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