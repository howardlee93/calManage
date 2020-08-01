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
        

    }





    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Workout title" />
                    <input type="date" placeholder="workout date" />
                    <input type="number" placeholder="workout length"/>
                    <input type="number"  placeholder="calories burned"/>
                    <input type="textarea"
                       
                        placeholder="workout details"
                    />
                    <input type="submit" value="Submit" />
            </form>


            
        )
    }

};


export default FitForm;
