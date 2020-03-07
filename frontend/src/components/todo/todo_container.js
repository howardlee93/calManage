// todo_container.js
import { connect } from 'react-redux';

import {fetchTodos} from '../../actions/todo_actions.js';

import Todo from './todo';

const mapStateToProps = state =>({
	todos: Object.values(state.todos.all)
});

const mapDispatchToProps = dispatch =>({
	fetchTodos:  ()=> dispatch(fetchTodos())
});


export default connect(mapStateToProps, mapDispatchToProps)(Todo);
