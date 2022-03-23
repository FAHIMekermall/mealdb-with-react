import React from 'react';
import "./Meal.css"
const Meal = ({meal:{strMeal:name, strInstructions:details, strArea:country, strMealThumb:picture}}) => {
    return (
       <div className='card-container'>
            <div className='meal-card'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h3>{country}</h3>
            <p>{details.slice(0,200)}...</p>
        </div>
       </div>
    );
};

export default Meal;