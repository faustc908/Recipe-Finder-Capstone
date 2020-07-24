import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

 const app = () => {

 const APP_ID = '7e817b93';
 const APP_KEY = 'dd1f3f5c93f40c501dd29392c73cbd2d';
  
 const [recipes, setRecipes] = useState[()];
 const [search, setSearch] = useState('');
 const [query, setQuery] = setState('chicken');

 useEffect(() => {
    getRecipes();
 }, [query]);

 const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json();
    setRecipes(data.hits);
    console.log(data.hits);
 };
  
  const updateSearch = e => {
  setSearch(e.target.value);
  };
  
  const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
  }

   return(
     <div className='app'>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'/>
      </form>
    {recipes.map(recipe => (
   <Recipe
    key={recipe.recipe.label}
    title={recipe.recipe.label} 
    calories={recipe.recipe.calories}
    image={recipe.recipe.image}
    />
   ))}
     </div>
   );
 }

export default App;
