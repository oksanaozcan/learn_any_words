import { LOAD_WORDS } from "../types";
import {DATA} from '../../data';

export const loadWords = () => {
  return {
    type: LOAD_WORDS,
    payload: DATA
  }
}