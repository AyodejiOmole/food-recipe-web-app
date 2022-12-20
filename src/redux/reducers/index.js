import { combineReducers } from "redux";
import { recipesReducer, selectedRecipeReducer } from "./recipeReducer";

export const reducers = combineReducers(
    {
        recipes: recipesReducer,
        selectedRecipe: selectedRecipeReducer
    }
);