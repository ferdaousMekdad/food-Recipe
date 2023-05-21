import { useState } from "react";
import "./Auth.css";

import Axios from "axios";
import{useCookies}from "react-cookie";
import{useNavigate} from "react-router-dom";


export const Auth=()=>{
    return(
        <div className="auth">
            <Login/>
            <Register/>
        </div>
    );
};



const Login=()=>{
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("");
   const[_,setCookies]=useCookies(["access_token"]);
   
   
   const navigate=useNavigate()

    const onSubmit=async(event)=>{

   event.preventDefault();
   try{
    const response = await Axios.post("http://localhost:5000/auth/login",{
        username,
        password,
    });
    

    setCookies("access_token",response.data.token);
    window.localStorage.setItem("userId",response.data.userID);
   
     navigate("/");
     console.log("hi")

    }catch(err){
    console.error(err);
   }
    };

  return (
      <Form
       username={username} 
       setUsername={setUsername}
        password={password}
         setPassword={setPassword}
         Label="Login"
         onSubmit={onSubmit}
         />
        
  );

};


const Register=()=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    const onsubmit=async(event)=>{
        event.preventDefault();
       try{
        await Axios.post("http://localhost:5000/auth/register",{
            username,
            password
        });
        alert("Registration completed Now login")
       }catch(err){
         console.error(err);
       }
    }

  return (
      <Form
       username={username} 
       setUsername={setUsername}
        password={password}
         setPassword={setPassword}
         Label="Regester"
         onSubmit={onsubmit}
         />
  );
   
};


const Form=({username,setUsername,password,setPassword,Label,onSubmit})=>{
    
    
    return( 
    <div className="auth-countainer">
     <form onSubmit={onSubmit} >
        <h2>{Label}</h2>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
            type="text"
             id="username" 
             value={username}
              onChange={(event)=>setUsername(event.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
            type="text"
             id="password"
             value={password}
              onChange={(event)=>setPassword(event.target.value)} />
        
        </div>
        <button type="submit" >{Label}</button>
     </form>
    </div>
);

    
}