import { actionTypes } from "../constants/actionTypes"

export const setRecipes = (recipes) => {
    return {
        type: actionTypes.SET_RECIPES,
        payload: recipes
    }
}

export const setSelectedRecipe = (recipe) => {
    return {
        type: actionTypes.SELECTED_RECIPE,
        payload: recipe
    }
}

export const removeSelected = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_RECIPE
    }
}