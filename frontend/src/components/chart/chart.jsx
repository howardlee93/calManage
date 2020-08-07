import React, {useState, useEffect} from 'react';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';



const data = [
  {_id: "5f284ccca2b86b67bac78a45", title: "run", time: "5:00", details: "testing", calories: 200, },
  {_id: "5f284d26a2b86b67bac78a46", title: "run", time: "6:00", details: "testing", calories: 1000,}, 
  {_id: "5f284d76a2b86b67bac78a47", title: "jog", time: "7:00", details: "testing", calories: 1200}
  ];

const Chart = (props) =>{

    const [workouts, setWorkouts] = useState([]);

    useEffect(()=>{
      setWorkouts(props.workouts)
    },[props.workouts])
    
 
    return(
      <div>

        <h1>Progress</h1>
          <XYPlot
            height={500} width= {500} 
            getY={ d=> d.calories}
            getX={ d =>d.time.split(":")[0]}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis/>
            <LineSeries data={workouts}  />
          </XYPlot>   
          </div> 
        )
};


export default Chart;
