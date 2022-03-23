import React, { useEffect, useState } from "react"
import Meal from "../meal/Meal"
import "./Home.css"

const Home = () => {
	const [meals, setMeals] = useState([])
	useEffect(() => {
		fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
			.then((r) => r.json())
			.then((data) => setMeals(data.meals))
	}, [])
	useEffect(() => {
		console.log(meals)
	},[meals])
	return (
		<div className="meals">
			{meals.map(meal=> <Meal key={meal.idMeal} meal={meal}/>)}
		</div>
	)
}

export default Home
