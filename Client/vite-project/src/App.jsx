 
import './App.css';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import { Home } from './Pages/Home';
import { Auth } from './Pages/Auth';

import { SaveResipes } from './Pages/Saved-recipes';
import { Navbar } from './Components/Navbar';
import { Recipes } from './Pages/Recipes';

const App =()=>{
  return(
    <div className='App'>
      <Router>
        <Navbar/>
        <div className='routes'>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Auth" element={<Auth/>} />
      <Route path='/recipes' element={<Recipes/>}/>
     
      <Route path="/SaveRecipes" element={<SaveResipes/>} />
      </Routes>

        </div>
      </Router> 
    </div>
  )
}

export default App;
