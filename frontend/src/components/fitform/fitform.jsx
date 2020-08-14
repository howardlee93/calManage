import React from 'react';

import './fitform.css';

class FitForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            date:'',
            length:0,
            calories:0,
            details:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleSubmit(e){
        e.preventDefault();
        //api post to backend 

        console.log(this.state);
        this.props.createWorkout(this.state)
        .then(()=>alert('workout added!'));
        
    }

    update(field){
		return e => this.setState({
			[field] : e.currentTarget.value
		});
	}


    render(){
        return(
    
            <form onSubmit={this.handleSubmit}>
                    <h4> Record your new workout </h4>

                    <input type="text" placeholder="Workout title" 
                    value={this.state.title} onChange={this.update("title")}
                    />

                    <input type="date" placeholder="workout date" 
                    value={this.state.date} onChange={this.update("date")}/>

                    <input type="number" placeholder="workout length" 
                    value={this.state.length} onChange={this.update('length')}
                    />

                    <input type="number"  placeholder="calories burned" 
                    value={this.state.calories} onChange={this.update('calories')}/>

                    <input type="textarea"
                        placeholder="workout details"
                        value={this.state.details}
                        onChange={this.update('details')}
                    />


                    <input type="submit" value="Submit" />
            </form>
            
        )
    }

};


export default FitForm;
