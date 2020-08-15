
import React from 'react';
import Chart from '../chart/chart';
import './dash.css'

class Dash extends React.Component{

    constructor(props){
        super(props);
        this.state={
            workouts: []
        };
        this.handleDeleteClick = this.handleDeleteClick.bind(this);

    };

    componentDidMount(){
        this.props.fetchWorkouts()
        .then(res => this.setState({workouts: res.workouts.data}))
       
    };

    componentDidUpdate(prevProps, prevState){
        if(prevProps.workouts.length !== this.props.workouts.length && prevState.workouts.length !== this.state.workouts){
            this.props.fetchWorkouts()
            .then(res  => this.setState({workouts: res.workouts.data}))
            
        }
    }

    handleDeleteClick(id){

        const currentWorkouts = this.state.workouts;

        this.setState({
            workouts: currentWorkouts.filter(workout => workout.id !== id),
        });

        this.props.deleteUserWorkout(id);
        
    }

    render(){

        const workoutsDisplay = this.state.workouts.map((workout, i) =>(
                <div key={i} className="workouts-display">
                    <h3 >{workout.title}</h3>
                    <p>{workout.length} hours </p>
                    <p>{workout.calories} calories</p>
                    <p>{workout.details}</p>

                    <button id="delete-button" onClick={()=> this.handleDeleteClick(workout._id)} >Delete </button>
                    <button id="update-button" >Update</button>

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
                    <button id="submit-button" onClick={()=>this.props.openModal('fitform')}> add a workout</button>
                </article>

            </div>

        )
    }

}

export default Dash;