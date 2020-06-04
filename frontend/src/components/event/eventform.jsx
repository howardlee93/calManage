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
		// props.fetchEvents();
		
		// setTitle(props.event.title);
		// setTime(props.event.times);

	
		// setDetails(props.event.details)
	}, [props.date])


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

	const updateEvent = e =>{

		e.preventDefault();
		let data = {
			title: title,
			date: props.date,
			time: time,
			details: details
		}
		props.updateEvent(data);
		

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
        		size="large"
        		id="title"
        		value={title}
        		autoFocus={true}
        		onChange={e => onTitleChange(e)}/>


        		<label> Time:</label>
                <input type="time" 
                id="time"
                value={time}
                onChange={ e=> timeChange(e)}
              	/>

              	<label> Details</label>
              	<textarea id ="details"
              	value={details}
              	onChange={e => detailsAdd(e)}
              	/>
              
             
			</fieldset>


 			{props.event ? 
					<div>
						<button  className="button" onclick={updateEvent}>Update Calendar</button>
					</div> 
					: 		
						<button  className="button" type="submit">Add to Calendar</button>
					}

			</form>

		</div>
		)


};





export default EventForm;

