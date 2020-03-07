// modal.jsx

import React from "react";
import { closeModal } from "../actions/modal_actions";
import { connect } from "react-redux";
import TodoCreateFormContainer from './todo/todo_create_container';


const Modal = ({ modal, closeModal }) => {

	if(!modal){
		return null;
	};
	// let component;

	// switch(modal){
	// 	case "add":
	// 		component = <TodoCreateFormContainer/>;
	// 		break;
	// 	case "edit":
	// 		component = <SignupFormContainer/>;
	// 		break;
	// 	case "delete": 
	// 		component = <Loading/>;
	// 		break;

	// 	default:
	// 	return null;
	// }
	return(
		<div id="modal" onClick={closeModal}>
			<div onClick={e=>e.stopPropagation()}>
			<TodoCreateFormContainer/>
			</div>
		</div>
		);
};


const mapStateToProps = (state) =>({
	modal: state.modal

});

const mapDispatchToProps = dispatch => ({
	closeModal: ()=> dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
