import { combineReducers } from "redux";
import { recipesReducer } from "./recipeReducer";

export const reducers = combineReducers(
    {
        recipes: recipesReducer
    }
);