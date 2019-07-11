import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1>Recipe App</h1>
				<nav>
					<ul>
						<li>New Recipe</li>
						<li>Home</li>
						<li>About</li>
						<li>Contact Us</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Header;