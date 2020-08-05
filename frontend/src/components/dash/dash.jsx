
import React from 'react';
import ChartContainer from '../chart/chart';


class Dash extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data: {}
        };

    };

    componentDidMount(){
        this.props.fetchWorkouts()
        .then(res => this.setState( {data: res}))
    }


    render(){
        return(
            <div>
                <h1> This is the dashboard for your fitness needs</h1>
                <ChartContainer/>

            </div>

        )
    }

}

export default Dash;