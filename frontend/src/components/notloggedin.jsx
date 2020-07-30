import React from 'react';

import workout from '../assets/images/workout.jpg';


function NotLoggedIn(){

    return(
        <div>
        <img src={workout} alt='landing'></img>
        <p>Log in to keep track of your progress</p>
        </div>
    )
    
};

export default NotLoggedIn;
