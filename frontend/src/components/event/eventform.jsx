// eventForm.jsx


import React from 'react';


const eventForm = (props) =>{





	const createEvent =(e) =>{
		e.preventDefault();
		//api call to backend 

		alert("an event was created!");


	}

	const setEmail = () => {

	}

	const setTitle = () => {
		
	}

	return (
		<div className="event-form">
			<form onSubmit={ e => createEvent()}>
			<fieldset>

				<datepicker>
				</datepicker>

				<input type="text"

				value={props.title}
        		size="large"
        		autoFocus={true}
        		onChange={props.onTitleChange}/>

                <input 
                type="text"
                placeholder="What are you up to?"
                id="title"
                onChange={e => setTitle(e.target.value)}
              />

              
			</fieldset>
			</form>

		</div>
		)



};




export default eventForm;

