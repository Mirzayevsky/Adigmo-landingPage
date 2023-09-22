import { combineReducers } from "redux";
import { langReducer } from "../modules/lang/langReducer";

export const rootReducer = combineReducers({
  lang: langReducer,
});
