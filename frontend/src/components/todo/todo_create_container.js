import { connect } from 'react-redux';
import { composeTodo } from '../../actions/todo_actions';
import TodoCreate from './todo_create';

const mapStateToProps = state => ({
	// newTodo: state.todos.new
});

const mapDispatchToProps = dispatch =>({
	composeTodo: data => dispatch(composeTodo(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoCreate);
