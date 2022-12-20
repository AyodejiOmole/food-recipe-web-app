import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { baseUrl } from '../App';
import Skeleton from 'react-loading-skeleton';
import { setRecipes } from '../redux/actions/actions';

const Home = () => {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useQuery(["recipes"], async () => {
        const response = await axios.get(baseUrl);
        // return response.data;
        dispatch(setRecipes(response.data.meals));
        return response;
    });
    
    const recipes = useSelector(state => state.recipes.recipes);
    console.log(recipes);

    console.log(data);
    if(isLoading) {
        return (
            <div className='lg:flex lg:flex-wrap justify-center px-10 w-full lg:px-20'>
                <Skeleton className='lg:w-1/4 w-full' height={400}/>
                <Skeleton className='lg:w-1/4 w-full' height={400}/>
                <Skeleton className='lg:w-1/4 w-full' height={400}/>
                <Skeleton className='lg:w-1/4 w-full' height={400}/>
            </div>
        )
    }

    if(error) {
        return <div>An error occured.</div>
    }

    return (
        <div>
            {recipes.map((recipe) => {
                return (
                    <div key={recipe.idMeal}>{recipe.idMeal}</div>
                )
            })}
        </div>
    )
}

export default Home;
