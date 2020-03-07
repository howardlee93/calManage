// todo.jsx


import React from 'react';
import {withRouter} from 'react-router-dom';
import TodoBox from './todo_box'


class Todo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			todos: []
		}
	}


	componentWillMount(){
		this.props.fetchTodos();
	}

	shouldComponentUpdate(nextState){
		this.setState({todos: nextState.todos})
	}

	render(){
		if (this.state.todos.length === 0) {
      		return (<div>There is nothing to do</div>)
    	} else {
    		return(
    			<div>
    			{this.state.todos.map(todo=>(
    				<TodoBox key={todo._id} text={todo.text} />
    				))}
    			</div>
    		);
		}
	}
}

export default withRouter(Todo);
