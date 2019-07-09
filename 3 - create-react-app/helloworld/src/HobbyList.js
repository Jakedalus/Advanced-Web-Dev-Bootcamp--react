import React, { Component } from 'react';

class HobbyList extends Component {
	render() {

		const liStyle = {fontSize: '1.5em'};
		const hobbies = ['Sleeping', 'Eating', 'Slobbering'];

		return (
			<ul >
				{hobbies.map((hobby, i) => <li key={i} style={liStyle}>{hobby}</li>)}
			</ul>
		);

	}
}
		
export default HobbyList;
		