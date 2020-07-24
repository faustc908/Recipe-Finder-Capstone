import React,{useEffect, useState} from 'react';
import './App.css';

 const app = () => {

 const APP_ID = '7e817b93';
 const APP_KEY = 'dd1f3f5c93f40c501dd29392c73cbd2d';

 useEffect( async () =>{
    
 }, []);

 const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json();
    console.log(data)
 }

   return(
     <div className='app'>
      <form className='search-form'>
        <input className='search-bar' type='text'/>
        <button className='search-button' type='submit'/>
      </form>
     </div>
   );
 }

export default App;
