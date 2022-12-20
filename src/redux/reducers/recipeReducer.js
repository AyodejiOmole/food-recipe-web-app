import { actionTypes } from "../constants/actionTypes";

const initialState = {
    recipes: []
}

export const recipesReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case actionTypes.SET_RECIPES: {
            return {...state, recipes: payload}
        }
        default:
            return state;
    }
}

const searchedInitialState = {
    searchedRecipes: []
}
export const searchedRecipeReducer = ( state = searchedInitialState, { type, payload }) => {
    switch(type) {
        case actionTypes.SET_SEARCHED_RECIPE:
            return {...state, searchedRecipes: payload }
        case actionTypes.REMOVE_SEARCHED_RECIPE:
            return {...state, searchedRecipes: []}
        default:
            return state;
    }
}