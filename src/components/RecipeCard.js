import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
    const { image, title, source, idMeal } = props;

    return (
        <div className="card shadow-lg">
            <img src={image} alt={title} className="recipe-img"/>

            <p className="recipe-title">{title}</p>

            <a href={source}>Check out the recipe here.</a>

            <Link to={`/food-recipe/${idMeal}`}>
                <div className="ing-btn">View Ingredients</div>
            </Link>
        </div>
    )
}

export default RecipeCard;