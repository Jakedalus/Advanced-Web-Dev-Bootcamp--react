import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {

  static defaultProps = {
    onNewRecipe() {}
  }

  static propTypes = {
    onNewRecipe: PropTypes.func
  }

	render() {
		return (
			<div className="header">
				<h1>Recipe App</h1>
				<nav>
					<ul>
						<li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
						<li><a>Home</a></li>
						<li><a>About</a></li>
						<li><a>Contact Us</a></li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Header;