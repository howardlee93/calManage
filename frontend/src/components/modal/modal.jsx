import React from 'react';
import '../../assets/styles/modal.css';
import SignIn from '../session_forms/signin';
import SignUp from '../session_forms/signup';
import FitFormContainer from '../fitform/fitform';


//this is where all the forms will go 

const Modal = (props) =>{
    let component;

	if (!props.modal){
		return null;
	}

	if(props.modal === "signin"){
        component= <SignIn/>
	}else if (props.modal === 'signup'){
        component= <SignUp/>
	}else if (props.modal === 'fitform'){
        component =<FitFormContainer/>
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






