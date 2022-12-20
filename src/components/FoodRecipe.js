import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import { useSelector, useDispatch } from 'react-redux';

const FoodRecipe = () => {
    const { foodId } = useParams();

    return (
        <div>FoodRecipe</div>
    )
}

export default FoodRecipe;