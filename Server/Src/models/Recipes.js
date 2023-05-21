import mongoose from "mongoose";

const RecipesSchema = new mongoose.Schema({
    recipeName:{type:String},
    imageUrl:{type:String},
    ingredient:{type:String},
    cookingTime:{type:Number},
});
 export const RecipeModel =mongoose.model("creatRecipes",RecipesSchema);