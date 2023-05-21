import  express  from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from "../models/Users.js";

const router =express.Router();

router.post("/register",async(req,res)=>{
    const {username,password}=req.body;

    const user =await UserModel.findOne({username:username,password:password});
    
    if(user){
        return res.json({message:"user already exists"});
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser =new UserModel({username,password:hashedPassword});
    await newUser.save();
    res.json({message:"user regestred sucessfully"});

}); 
router.post("/login",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const user = await UserModel.findOne({username});
    
    if(!user){
        res.json({message:"user dosnot exeist"});
         console.log("user excest");  
    }

    const isPasswordValid =await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
      return  res.json({message:"user name or password is incorrect "});
       

    }

    const token =jwt.sign({id:user._id},"secret");

    res.json({token,userID:user._id});
    
    
})


export{router as useRouter};