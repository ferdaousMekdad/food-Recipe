import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

export const Home=()=>{
  const[recipes,setRecipes]=useState([])


useEffect(()=>{

  const fatchRecipe=async()=>{
      
        const response=await axios.get("http://localhost:5000/recipes");
       setRecipes(response.data);
       console.log("hi");

     
  }
fatchRecipe();
},[]);




    return(
      <div >
      <h1>Recipes</h1>
          <ul className="cart">
         {recipes.map((recipe) =>( 
          
            <li className="cartofrecipe" key={recipe._id}>
              <div>
                <h2 className="nameofrecipe">{recipe.recipeName}</h2>
              </div>
             <img className="imageofrecipe" src={recipe.imageUrl} alt={recipe.recipeName} />
                <p className="ingredient">ingredient: <b/>{recipe.ingredient}</p>

             <p className="cookingtime">cookingTime {recipe.cookingTime}(minet)</p>
            </li>

         ))}
              
           
          </ul>
        </div>
    )
}