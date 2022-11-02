import { combineReducers } from "redux";
import { languageReducer } from "./language";

export const reducers = combineReducers({
  language: languageReducer,
});
