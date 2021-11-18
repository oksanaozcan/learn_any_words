import { LOAD_WORDS, TOGGLE_FAVORITE, TOGGLE_LEARNED } from "../types";
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