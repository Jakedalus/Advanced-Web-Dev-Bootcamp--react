import React, { Component } from 'react';

class TodoList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.todos.map(todo => <li>{todo}</li>)}
			</div>
		);
	}
}

export default TodoList;

