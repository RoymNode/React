import { useParams } from "react-router-dom";
import './CategoryPage.css';
import { useEffect, useState } from "react";
import { Meal } from "../../types";
import { MealComponent } from "../MealComponent/MealComponent";
const CategoryPage = () =>{
    const params = useParams();
    const strCategory = params.cat;

    const [mealsData, setMealsData] = useState<Meal>();

    useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
      .then(res => res.json())
      .then(
        (mealsData) => {
          setMealsData(mealsData);
          console.log(mealsData);
        }
      )
  }, [strCategory]);
 
    return (
        <>
            <p>
                <div className="cat-container-div">
                    <h1 className="heading-text">{strCategory}</h1>
                </div>
            </p>
            <br />
            <br />
            <br />
            <br /><br />
            <ul className="ul-meal-items">
                {
                    mealsData?.meals?.map((meal) => {
                        return (
                            <li>
                                <MealComponent key=          {meal.idMeal} 
                                               strMeal=      {meal.strMeal} 
                                               strMealThumb= {meal.strMealThumb} 
                                               idMeal=       {meal.idMeal} />
                            </li>
                        );
                    })
                }
            </ul>
        </>
    )
}

export default CategoryPage;