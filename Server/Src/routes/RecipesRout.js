import  express  from "express";
import { RecipeModel } from "../models/Recipes.js";
import {UserModel} from "../models/Users.js";

const router =express.Router();



router.post("/",async(req,res)=>{
  const recipeName=req.body.recipeName;
  
  const imageUrl=req.body.imageUrl;
  const ingredient=req.body.ingredient;
  const cookingTime=req.body.cookingTime; 
  const Recipes=RecipeModel({
    recipeName:recipeName,
    
    imageUrl:imageUrl,
    ingredient:ingredient,
    cookingTime:cookingTime   });
    
    await Recipes.save(); 
    res.send('it don');
    console.log(Recipes);
    
    
  })
  router.get("/",async(req,res)=>{
    
  const Recipes = await RecipeModel.find();
 
  res.json(Recipes);
 
  
  console.log(Recipes);
});


router.put("/",async(req,res)=>{
  try{
    const recipe= await RecipeModel.findById(req.body.recipeID);
    const user =await UserModel.findById(req.body.userID);
    user.savedRecipes.push(recipe);
    await user.save();
    res.json({savedRecipes:user.savedRecipes});
     

  }catch(err){
    res.json(err);
  }
})




  export{router as recipesRouter };