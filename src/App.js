import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe/Recipe';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Appdesc from './components/Appdesc/Appdesc';

// API call & State

 const App = () => {
    const APP_ID = '7e817b93';
    const APP_KEY = 'dd1f3f5c93f40c501dd29392c73cbd2d';
  
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('banana');

 useEffect(() => {
    getRecipes();
 }, [query]);

 const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
 };
 
 // Updating Search and Search

  const updateSearch = e => {
  setSearch(e.target.value);
  };
  
  const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
  }

  // Render

   return(
     <div className='App'>
      <NavBar />
      <Appdesc />
      <p className='formHead'>Please enter an ingredient:</p>
         <form onSubmit={getSearch} className='search-form'>
         <input 
         className='search-bar' 
         type='text' 
         placeholder='Banana'
         value={search} 
         onChange={updateSearch}
         required/>
      <button className='search-button' type='submit'>
        Search
      </button>
     </form>
      <div className='recipes' >
      {recipes.map(recipe => (
       <Recipe
       key={recipe.recipe.label}
       title={recipe.recipe.label} 
       calories={recipe.recipe.calories}
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
       url={recipe.recipe.url}
     />
    ))}
      </div>
       <div>
        <Footer />
       </div>
     </div>
   )}

export default App;
