import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
	render() {
		return (
			<div className="recipe-list">
				{this.props.recipes.map((r, i) => (
					<Recipe 
						key={i}
				        title={r.title} 
				        ingredients={r.ingredients}
				        instructions={r.instructions}
				        img={r.img}
				    />
				))	}
			</div>
		);
	}
}

export default RecipeList;