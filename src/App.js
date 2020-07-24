import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

 const app = () => {

 const APP_ID = '7e817b93';
 const APP_KEY = 'dd1f3f5c93f40c501dd29392c73cbd2d';
  
 const [recipes, setRecipes] = useState[()];

 useEffect( async () =>{
    getRecipes();
 }, []);

 const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json();
    setRecipes(data.hits);
    console.log(data.hits);
 }

   return(
     <div className='app'>
      <form className='search-form'>
        <input className='search-bar' type='text'/>
        <button className='search-button' type='submit'/>
      </form>
    {recipes.map(recipe => (
   <Recipe title={recipe.recipe.label} 
    calories={recipe.recipe.calories}
    image={recipe.recipe.image}
    />
   ))}
     </div>
   );
 }

export default App;
