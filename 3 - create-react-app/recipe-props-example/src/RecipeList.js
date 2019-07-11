import React, { Component } from 'react';
import Recipe from './Recipe';


class RecipeList extends Component {
	render() {
		return (
			<Recipe 
		        title="pasta" 
		        ingredients={['flour', 'water']}
		        instructions="Mix ingredients"
		        img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg"
		    />
		)
	}
}

export default RecipeList;