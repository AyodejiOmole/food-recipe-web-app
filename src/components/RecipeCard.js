import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
    const { image, title, source, idMeal, category} = props;

    return (
        <div className="card shadow-lg">
            <img src={image} alt={title} className="recipe-img"/>

            <p className="recipe-title">{title}</p>

            <p className="category"> {category} </p>

            <Link to={`/food-recipe/${idMeal}`}>
                <div className="ing-btn">View Ingredients</div>
            </Link>
        </div>
    )
}

export default RecipeCard;