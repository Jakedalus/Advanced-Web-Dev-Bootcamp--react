import React from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList';
import Header from './Header';

const recipes = [{
                    title: "pasta", 
                    ingredients: ['flour', 'water'],
                    instructions: "Mix ingredients",
                    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg"
                }, {
                    title: "pasta", 
                    ingredients: ['flour', 'water'],
                    instructions: "Mix ingredients",
                    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg"
                }, {
                    title: "pasta", 
                    ingredients: ['flour', 'water'],
                    instructions: "Mix ingredients",
                    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg"
                }];

function RecipeApp() {
  return (
    <div className="App">
      <Header />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default RecipeApp;
