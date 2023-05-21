import  axios  from "axios";
import { useState } from "react";
import "./Recipes.css";
import {useNavigate} from "react-router-dom";
import{useCookies} from "react-cookie";

export const Recipes =()=>{
   const [cookies,_]=useCookies(["access_token"]);
    const[recipes,setRecipes]=useState({
      recipeName:"",
      imageUrl:"",
      ingredient:"",
      cookingTime:0,
    });
     
    const navigate =useNavigate();

    const handelchange=(event)=>{
      const {name,value}=event.target;
      setRecipes({...recipes,[name]:value});
    }
const addfrend =async(event)=>{
  event.preventDefault();
  try{
   await axios.post("http://localhost:5000/recipes",{...recipes},
   {
    headers:{authorization: cookies.access_token},
   });
    alert("recipe created");
    navigate("/");
  }catch(err){
    console.err(err)
  }
}
addfrend();

  return(
<div className="RecipesCart" >
  <h2>Creat Recipe</h2>
  <form onSubmit={addfrend}>
<label htmlFor="recipeName">Name</label>
 
<input 
type="text"
 id="recipeName"
 name="recipeName"
 value={recipes.recipeName}
 onChange={handelchange} />
 
<label htmlFor="ingredient">ingredient</label>

<input 
type="text"
id="ingredient"
name="ingredient"
value={recipes.ingredient}
onChange={handelchange} />

<label htmlFor="imageUrl">imageUrl</label>


<input
 type="text" 
 id="imageUrl"
 name="imageUrl"
 value={recipes.imageUrl}
 onChange={handelchange}/>

<label htmlFor="cookingTime">CookingTime</label>

<input
 type="number"
 id="cookingTime"
 name="cookingTime"
 value={recipes.cookingTime} 
 onChange={handelchange}/>
<button >creat recipe</button>

  </form>
</div>

      
      )
         
}