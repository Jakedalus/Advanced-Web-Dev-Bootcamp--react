import React from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList';
import Header from './Header';

function RecipeApp() {
  return (
    <div className="App">
      <Header />
      <RecipeList />
    </div>
  );
}

export default RecipeApp;
