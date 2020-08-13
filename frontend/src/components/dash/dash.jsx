
import React from 'react';
import Chart from '../chart/chart';
import './dash.css'

class Dash extends React.Component{

    constructor(props){
        super(props);
        this.state={
            workouts: []
        };
    };

    componentDidMount(){
        this.props.fetchWorkouts()
        .then(res  => this.setState({workouts: res.workouts.data}))
       
    };

    componentDidUpdate(prevProps){
        if(prevProps.workouts.length !== this.props.workouts.length){
            this.props.fetchWorkouts()
            .then(res  => this.setState({workouts: res.workouts.data}))
            
        }
    }

    render(){

        const workoutsDisplay = this.state.workouts.map((workout, i) =>(
                <div key={i} className="workouts-display">
                    <h3 >{workout.title}</h3>
                    <p>{workout.length}</p>
                    <p>{workout.calories}</p>
                    <p>{workout.details}</p>
                    <button id="delete-button" onClick={this.props.deleteWorkout()}>Delete workout</button>
                    <button id="delete-button" onClick={this.props.updateWorkout()}>Update workout details</button>

                </div>
            ));


        return(
            <div className="dash-main">
                <Chart workouts={this.state.workouts} className="workout-chart"/>
                <article>
                <h1 style={{textAlign:'center !important'}}>Past workouts</h1>
                    <div className="display">
                    {workoutsDisplay}
                    </div>
                    <button onClick={()=>this.props.openModal('fitform')}> add a workout</button>
                </article>

            </div>

        )
    }

}

export default Dash;