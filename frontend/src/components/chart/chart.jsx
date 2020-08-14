import React, {useState, useEffect} from 'react';
import {XYPlot, LineSeries, XAxis, YAxis, ChartLabel} from 'react-vis';

// const data = [
//   {_id: "5f284ccca2b86b67bac78a45", title: "run", time: "5:00", details: "testing", calories: 200},
//   {_id: "5f284d26a2b86b67bac78a46", title: "run", time: "6:00", details: "testing", calories: 1000}, 
//   {_id: "5f284d76a2b86b67bac78a47", title: "jog", time: "7:00", details: "testing", calories: 1200}
//   ];

const Chart = (props) =>{

    const [workouts, setWorkouts] = useState([]);

    useEffect(()=>{
      setWorkouts(props.workouts)
    },[props.workouts])
    
    let xAxisOn0 = true;
 
    return(
      <div>

        <h1>Progress</h1>
          <XYPlot
            height={400} width= {500} 
            getY={ d=> d.calories}
            getX={ d =>d.length}
            xType="linear"
            yType="linear"
          >
           
            <XAxis  />
            <YAxis
             style={{
              textAnchor: 'start',
            }}/>
            <ChartLabel 
            text="Length of workout"
            className="alt-x-label"
            includeMargin={false}
            xPercent={0.025}
            yPercent={1.01}
            style={{
              textAnchor: 'start',
              transform: 'translate(300)'
            }}
            />

          <ChartLabel 
            text="Calories burned"
            className="alt-y-label"
            includeMargin={false}
            xPercent={0.06}
            yPercent={0.06}
            style={{
              transform: ' translate(50) rotate(-90)',
              textAnchor: 'end'
            }}
            />

            <LineSeries data={workouts} />

          </XYPlot>   
          </div> 
        )
};


export default Chart;
