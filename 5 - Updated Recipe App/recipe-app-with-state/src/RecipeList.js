import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
	render() {
		return (
			<div className="recipe-list">
				{this.props.recipes.map((r, i) => (
					<Recipe key={r.id} {...r} onDelete={this.props.onDelete} />
				))	}
			</div>
		);
	}
}

export default RecipeList;