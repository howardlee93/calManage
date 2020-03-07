import React from 'react';
import TodoBox from './todo_box';

class TodoCreate extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text: "",
			newTodo: ""
		}
	}


	shouldComponentUpdate(nextProps){
		this.setState({
			newTodo: nextProps.newTodo
		});
	}


	handleSubmit(e){
		e.preventDefault();
		let todo = {
			text: this.state.text
		};
		this.props.composeTodo(todo);
		this.setState({todo:" "})
	}

	update(){
		return e=> this.setState({
			text : e.currentTarget.value
		});
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
				<input type="textarea"
					value={this.state.text}
					onChange={this.update()}
					placeholder="write your todo"
					/>

					<input type="submit" value="Submit"/>

				</form>
				<br/>
				 <TodoBox text={this.state.newTweet}/>
			</div>

			)
	}
}


export default TodoCreate;
