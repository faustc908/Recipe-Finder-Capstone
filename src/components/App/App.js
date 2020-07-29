import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "../Recipe/Recipe";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Appdesc from "../Appdesc/Appdesc";
import AppForm from "../AppForm/AppForm";
// API call & State

const App = () => {
  const APP_ID = "7e817b93";
  const APP_KEY = "dd1f3f5c93f40c501dd29392c73cbd2d";

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("banana");

  //When query updates call API to get recipes.
   
  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setRecipes(data.hits));
  }, [query, setRecipes]);

  // Render

  return (
    <div className="App">
      <NavBar />
      <Appdesc />
      <p className="formHead">Please enter an ingredient:</p>
      {/* Pure component using an event to notify parent */}
      <AppForm onSearch={setQuery} />
      <div className="recipes">
        {recipes.map((recipe) => (
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
  );
};

export default App;
