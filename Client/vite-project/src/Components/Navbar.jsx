import { Link } from "react-router-dom";
import{useCookies} from "react-cookie";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
export const Navbar=()=>{
    const [cookies,setCookies]=useCookies(["access_token"]) ;
     const navigate =useNavigate()
    const logout =()=>{
        setCookies("access_token","");
        window.localStorage.removeItem("userID");
        navigate("/auth");
   
    }

    return(
        <div className="Navcountainer">

        <div className="bar">
            <Link className="home" to="/">Home</Link>
            <Link className="creatrecipes" to="/recipes">Creat Recipes</Link>
            <Link className="savercipes" to="/SaveRecipes" >Saved Recipes</Link>
            {!cookies.access_token ? (
                <Link className="auth" to="/auth">Login/Register</Link>
                

            ): <button onClick={logout}>Logout</button>}
            
        </div>

        </div>
    );
}