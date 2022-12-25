import React from 'react';
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
    console.log(mealRecipe);

    if(isLoading) {
        return (
            <div className='loading-recipes'>
                <span style={{margin: "20px auto", display: "flex", justifyContent: "center"}}>
                    <Skeleton circle={true} height={200} width={200}/>
                </span>
                
                <Skeleton count={3.5} height={50}/>

                <div style={{ marginTop: "50px"}}>
                    <Skeleton count={10} height={50} width={"50%"}/>
                </div>
            </div>
            
        )
    }

    if(error) {
        return <div>An error occured.</div>
    }

    return (
        <div className='details-box'>
            <img src={mealRecipe?.strMealThumb} alt={mealRecipe?.strCategory} className="meal-image"/>

            <div className='name-box'>
                <h2>{mealRecipe?.strMeal}</h2>
                <p>{mealRecipe?.strCategory}</p>
            </div>
            
            <div id="tag-box">
                <h2>Tags:</h2>
                <p>{mealRecipe?.strTags}</p>
            </div>

            <div id="instructions-box">
                <h2>Instructions:</h2>
                <p>{mealRecipe?.strInstructions}</p>
            </div>

            <div className="ingredients-box">
                <h2>Ingredients: </h2>
                <div>
                    {Object.entries(mealRecipe).filter((detail) => detail[0].includes("strIngredient") && detail[1] !== "").map((item) => {
                        return <p className='ingredient'>{item[1]}</p>
                    })}
                </div>
            </div>
            
            <div className="ingredients-box">
                <h2>Measures: </h2>
                <div>
                    {Object.entries(mealRecipe).filter((detail) => detail[0].includes("strMeasure") && (detail[1] !== " " && detail[1] !== "")).map((item) => {
                        return <p key={item} className='ingredient'>{item[1]}</p>
                    })}
                </div>
            </div>

            <div className='links-box'>
                <div>
                    <a href={mealRecipe?.strSource} target="_blank">View source here.</a>
                </div>
                <div style={{display: "flex"}}>
                    <a href={mealRecipe?.strYoutube} target="_blank">Check out this tutorial on Youtube here.</a>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className='youtube-svg' viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                    </div>
                </div>
            </div>
            <p></p>
        </div>
    )
}

export default FoodRecipe;