
import React from 'react';
import Chart from '../chart/chart';


class Dash extends React.Component{

    constructor(props){
        super(props);
        this.state={
            workouts: []
        };

    };

    componentDidMount(){
        this.props.fetchWorkouts()
        .then( workouts => this.setState({workouts: workouts}));

        
    }

    componentDidUpdate(newState){
        // this.setState({workouts: newState.workouts})
        console.log(this.state.workouts)
    }



    render(){

        // const workouts = this.state.workouts.map((workout, i) =>(
        //         <div key={i} className="workouts-display">
                
        //             <h1 >{workout.title}</h1>



        //         </div>
        //     ));


        return(
            <div>
                <h1> This is the dashboard for your fitness needs</h1>
                <Chart workouts={this.state.workouts}/>
                <article>
                    <button> add a workout</button>
                </article>

            </div>

        )
    }

}

export default Dash;