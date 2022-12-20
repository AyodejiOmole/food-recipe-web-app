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


export const selectedRecipeReducer = ( state = {}, { type, payload }) => {
    switch(type) {
        case actionTypes.SELECTED_RECIPE:
            return {...state, ...payload }
        case actionTypes.REMOVE_SELECTED_RECIPE:
            return { }
        default:
            return state;
    }
}