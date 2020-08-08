import React from 'react';

import './fitform.css';

class FitForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            date:'',
            length:0,
            calories: 0,
            details:""
        }

    }
    handleSubmit(e){
        e.preventDefault();
        //api post to backend 
        let workout = this.state;
        this.props.createNewWorkout(workout);

    }


    update(field){

    }




    render(){
        return(
    
            <form onSubmit={this.handleSubmit}>
                    <h4> Record your new workout </h4>
                    <input type="text" placeholder="Workout title" value={this.state.title} />
                    <input type="date" placeholder="workout date" value={this.state.title} />
                    <input type="number" placeholder="workout length" value={this.state.title}/>
                    <input type="number"  placeholder="calories burned" value={this.state.title}/>
                    <input type="textarea"
                       
                        placeholder="workout details"
                        value={this.state.title}
                    />
                    <input type="submit" value="Submit" />
            </form>


            
        )
    }

};


export default FitForm;
