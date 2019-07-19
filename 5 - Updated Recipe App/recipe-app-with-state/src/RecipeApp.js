import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import Header from './Header';

// const recipes = [{
//                     title: "pasta", 
//                     ingredients: ['flour', 'water'],
//                     instructions: "Mix ingredients",
//                     img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg"
//                 }, {
//                     title: "pasta", 
//                     ingredients: ['flour', 'water'],
//                     instructions: "Mix ingredients",
//                     img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg"
//                 }, {
//                     title: "pasta", 
//                     ingredients: ['flour', 'water'],
//                     instructions: "Mix ingredients",
//                     img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg"
//                 }];

class RecipeApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipes: [{
          id: 1,
          title: "pasta", 
          ingredients: ['flour', 'water'],
          instructions: "Mix ingredients",
          img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg"
      }, {
          id: 2,
          title: "sandwich", 
          ingredients: ['bread', 'veggies', 'meats'],
          instructions: "Mix ingredients",
          img: "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Cobb-Salad-Club-Sandwich_EXPS_THAM19_233459_B11_09_2b.jpg"
      }, {
          id: 3,
          title: "soup", 
          ingredients: ['broth', 'veggies'],
          instructions: "Mix ingredients",
          img: "https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg"
      }],
      nextRecipeId: 4
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <RecipeInput />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
