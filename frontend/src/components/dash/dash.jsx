
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
        // this.interval = setInterval(() => this.props.fetchWorkouts()
        //         .then(res  => this.setState({workouts: res.workouts.data})), 
        //         60000
        //     );

    };

    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    componentDidUpdate(prevProps){
        if(this.props.workouts !== prevProps.workouts){
            this.props.fetchWorkouts()
            .then(res  => this.setState({workouts: res.workouts.data}))
            
        }else{
            return;

        }
    }


    render(){

        const workoutsDisplay = this.state.workouts.map((workout, i) =>(
                <div key={i} className="workouts-display">
                    <h3 >{workout.title}</h3>
                    <p>{workout.time}</p>
                    <p>{workout.calories}</p>
                    <p>{workout.details}</p>


                </div>
            ));


        return(
            <div className="dash-main">
                <Chart workouts={this.state.workouts} className="workout-chart"/>
                <article>
                    <h1>Past workouts</h1>
                    {workoutsDisplay}
                    <button onClick={()=>this.props.openModal('fitform')}> add a workout</button>
                </article>

            </div>

        )
    }

}

export default Dash;