import React from 'react';
import "./Meal.css"
const Meal = ({meal,meal:{strMeal:name, strInstructions:details, strArea:country, strMealThumb:picture},addToCart}) => {
    return (
       <div className='card-container'>
            <div className='meal-card'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h3>{country}</h3>
            <p className='info'>{details.slice(0,200)}...</p>
            <button className='addToCart' onClick={()=>addToCart(meal)}>Add to cart</button>
        </div>
       </div>
    );
};

export default Meal;