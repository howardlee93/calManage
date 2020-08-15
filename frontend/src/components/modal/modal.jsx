import React from 'react';
import '../../assets/styles/modal.css';
import {SignInContainer} from '../session_forms/session_container';
import {SignUpContainer} from '../session_forms/session_container';
import FitFormContainer from '../fitform/fitform_container';
import EditFormContainer from '../fitform/editform_container';


//this is where all the forms will go 

const Modal = (props) =>{
    let component;

	if (!props.modal){
		return null;
	}

	if(props.modal === "signin"){
        component= <SignInContainer/>
	}else if (props.modal === 'signup'){
        component= <SignUpContainer/>
	}else if (props.modal === 'fitform'){
        component =<FitFormContainer/>
    }else if(props.modal === "editform"){
        component = <EditFormContainer/>
    }else{
        return null;
    }
	
	
    return(
        <div className="modal">
            <h1> this is a modal for the forms</h1>
            {component}
            <button onClick={props.closeModal}> Finished submitting info!</button>
        </div>
    )


};

export default Modal;






