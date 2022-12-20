import { actionTypes } from "../constants/actionTypes"

export const setRecipes = (recipes) => {
    return {
        type: actionTypes.SET_RECIPES,
        payload: recipes
    }
}