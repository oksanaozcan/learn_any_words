import { LOAD_WORDS, TOGGLE_FAVORITE } from "../types";
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