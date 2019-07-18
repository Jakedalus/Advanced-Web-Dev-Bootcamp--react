import React, { Component } from 'react';

class TodoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todo: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		e.preventDefault();

		this.setState({
			todo: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		console.log(e);
		this.props.addTodo(this.state.todo);
		this.setState({todo: ''});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input 
					type="text"
					value={this.state.todo}
					onChange={this.handleChange}
				/>
				<button>Add</button>
			</form>
		);
	}
}

export default TodoForm;