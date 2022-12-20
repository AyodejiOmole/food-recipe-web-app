import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { baseUrl } from '../App';
import Skeleton from 'react-loading-skeleton';
import { setRecipes } from '../redux/actions/actions';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const { isLoading, error } = useQuery(["recipes"], async () => {
        const response = await axios.get(baseUrl);
        // return response.data;
        dispatch(setRecipes(response.data.meals));
        return response;
    });
    
    const recipes = useSelector(state => state.recipes.recipes);
    console.log(recipes);

    if(isLoading) {
        return (
            <div className='lg:flex lg:flex-wrap justify-center w-full'>
                <Skeleton className='lg:w-1/4 w-full mx-5' height={400} width={300}/>
                <Skeleton className='lg:w-1/4 w-full mx-5' height={400} width={300}/>
                <Skeleton className='lg:w-1/4 w-full mx-5' height={400} width={300}/>
                <Skeleton className='lg:w-1/4 w-full mx-5' height={400} width={300}/>
            </div>
        )
    }

    if(error) {
        return <div>An error occured.</div>
    }

    return (
        <div className='recipe-container'>
            {recipes.map((recipe) => {
                return (
                    <RecipeCard key={recipe.idMeal} image={recipe.strMealThumb} title={recipe.strMeal} source={recipe.strSource} idMeal={recipe.idMeal}/>
                )
            })}
        </div>
    )
}

export default Home;
