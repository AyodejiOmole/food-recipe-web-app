import React, { useState }from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { baseUrl } from '../App';
import Skeleton from 'react-loading-skeleton';
import { setRecipes } from '../redux/actions/actions';
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    const [url, setUrl] =  useState(`${baseUrl}`);
    const dispatch = useDispatch();
    const { isLoading, error, refetch } = useQuery(["recipes"], async () => {
        const response = await axios.get(url);
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

    const handleChange = (event) => {
        console.log(event.target.value);
        refetch();
        setUrl(`${baseUrl}${event.target.value}`);
    }

    return (
        <div>
            <Navbar handleChange={handleChange}/>
            <div className='recipe-container'>
                {recipes?.map((recipe) => {
                    return (
                        <RecipeCard key={recipe.idMeal} category={recipe.strCategory} image={recipe.strMealThumb} title={recipe.strMeal} source={recipe.strSource} idMeal={recipe.idMeal}/>
                    )
                })}

                {recipes === null ? <p>Not found</p> : <p></p>}
            </div>
        </div>
    )
}

export default Home;
