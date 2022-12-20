import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setSelectedRecipe } from '../redux/actions/actions';

const FoodRecipe = () => {
    const { foodId } = useParams();
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;

    const dispatch = useDispatch();
    const { data, isLoading, error } = useQuery(["selected-food"], async () => {
        const response = await axios.get(url);
        dispatch(setSelectedRecipe(response.data));
        return response.data;
    });

    const selected = useSelector(state => state.selectedRecipe.meals);
    const mealRecipe = selected === undefined ? {} : selected[0];

    if(isLoading) {
        return (
            <Skeleton count={10}/>
        )
    }

    if(error) {
        return <div>An error occured.</div>
    }

    return (
        <div>{mealRecipe?.idMeal}</div>
    )
}

export default FoodRecipe;