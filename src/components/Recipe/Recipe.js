import React from 'react';
import style from './recipe.module.css';

//Recipe render from call

const Recipe = ({title, calories, image, ingredients, url}) => {
    return(
    <div className={style.recipe}>
     <h1 className={style.recipeTitle}>{title}</h1>
        <ol>
        {ingredients.map(ingredient =>(
         <li>{ingredient.text}</li>
         ))}
        </ol>
        <p>Total calories: {calories}</p>
        <a className={style.recipeLink} href={url}>Find cooking instructions!</a>
        <img className={style.image} src={image} alt=''/>
    </div>
    );
   };

export default Recipe;
