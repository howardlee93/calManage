// eventForm.jsx


import React, {useState, useEffect} from 'react';


import './event.css';

const eventForm = (props) =>{



	const [title, setTitle] = useState("");
	// const [time, setTime] =  useState("");

	


	// useEffect(()=>{
	// 	let date = props.date;
	// 	console.log(date);
	// }, [])


	const createEvent =(e) =>{
		e.preventDefault();
		//api call to backend

		//const data = 
		//props.createEvent(data)

		alert("an event was created!");

		// console.log(`event: ${title} on ${props.date} at ${time}`)




	}

	const detailsAdd =(e) =>{
		
	}

	const timeChange = (e) =>{
		// let time = e.currentTarget.value


	}

	const onTitleChange = (e) =>{
		let title = e.currentTarget.value;
		setTitle(title);
		console.log(title);
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
        		onChange={e => onTitleChange(e)}/>


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

