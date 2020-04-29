// eventForm.jsx


import React from 'react';


import './event.css';

const eventForm = (props) =>{


	


	const createEvent =(e) =>{
		e.preventDefault();
		//api call to backend

		//const data = 
		//props.createEvent(data)

		alert("an event was created!");




	}

	const detailsAdd =() =>{
		
	}

	const timeChange = (field) =>{
				// [field] : e.currentTarget.value


	}

	const onTitleChange = () =>{
						// [field] : e.currentTarget.value


	}

	return (
		<div className="event-form">
			<form onSubmit={ e => createEvent(e)}>
			<fieldset style={{border:'0 none'}}>

				<label>Event: </label>
				<input type="text"
				placeholder="What do you want to do?"
				value={props.title}
        		size="large"
        		id="title"
        		autoFocus={true}
        		onChange={onTitleChange()}/>


        		<label> Time:</label>
                <input type="time" 
                id="time"
                onChange={timeChange()}
                
              	/>

              	<label> Details</label>
              	<textarea id ="details"
              	onChange={detailsAdd()}
              	/>
              
			</fieldset>
			<button  className="button" type="submit">Add to Calendar</button>
			</form>

		</div>
		)



};




export default eventForm;

