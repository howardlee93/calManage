// eventForm.jsx


import React, {useState, useEffect} from 'react';


import './event.css';

const EventForm = (props) =>{

	const [title, setTitle] = useState("");
	const [time, setTime] =  useState("");
	const [details, setDetails] =  useState("");


	useEffect(()=>{
		let date = props.date;
		console.log(date);

		setTitle(props.title);
		setTime(props.times);

	
		setDetails(props.details)
	}, [props])


	const createEvent =(e) =>{
		e.preventDefault();
		//api call to backend


		alert("an event was created!");

		console.log(`event: ${title} on ${props.date} at ${time}`)
		let data = {
			title: title,
			date: props.date,
			time: time,
			details: details
		}

		console.log(data);

		props.createEvent(data);
	
	}

	const detailsAdd =(e) =>{
		let details = e.currentTarget.value;
		setDetails(details);
		
	}

	const timeChange = (e) =>{
		let time = e.currentTarget.value;


		console.log(time);

		setTime(time);



	}

	const onTitleChange = (e) =>{
		let title = e.currentTarget.value;
		setTitle(title);
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
                onChange={ e=> timeChange(e)}
                
              	/>

              	<label> Details</label>
              	<textarea id ="details"
              	onChange={e => detailsAdd(e)}
              	/>
              
			</fieldset>
 				{props.title ? 
					<div>
						<button  className="button" onclick={props.updateEvent}>Update Calendar</button>
						<button  className="button"  onclick={props.deleteEvent}>Delete Calendar</button>
					</div> 
					: 		
						<button  className="button" type="submit">Add to Calendar</button>
					}
			</form>

		</div>
		)


};




export default EventForm;

