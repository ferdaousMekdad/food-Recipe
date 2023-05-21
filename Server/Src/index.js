import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import{recipesRouter} from "./routes/RecipesRout.js"
import { useRouter } from "./routes/users.js";



const app=express();
app.use(express.json());
app.use(cors());

app.use("/auth",useRouter);
app.use("/recipes",recipesRouter);

mongoose.set('strictQuery',true);
app.use(express.json());
const COONECT_URL="mongodb://localhost:27017/foodrecipes";

const PORT=process.env.PORT||"5000";



mongoose.connect(COONECT_URL,{useNewUrlParser:true})
        .then(()=>app.listen(PORT,()=>console.log( `the server runing on port:${PORT} `)))
        .catch((err)=>console.log(err.message));