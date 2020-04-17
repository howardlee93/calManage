// eventForm.jsx


import React from 'react';


const eventForm = () =>{





	const createEvent =(e) =>{
		e.preventDefault();
		//api call to backend 

		alert("an event was created!");


	}

	return (
		<div className="event-form">
			<form onSubmit{e => createEvent()}>
			<fieldset>

				<datepicker>
				</datepicker>

				<input  type="email"
                placeholder="Where should I remind you?"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}/>


                <input 
                type="text"
                placeholder="What are you up to?"
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />

              
			</fieldset>
			</form>

		</div>
		)



};




export default eventForm;

