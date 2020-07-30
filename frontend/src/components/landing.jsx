import React from 'react';
import workout from '../assets/images/workout.jpg';
import { Route, Switch} from 'react-router-dom';

import Resources from './resources';
import Dash from './dash/dash';
import NotLoggedIn from './notloggedin';




function Landing(){


    return(
        <div>
            <Switch>
                <Route exact path='/' component={NotLoggedIn} />
                
                <Route path='/resources' component={Resources} />
                <Route path='/dash' component={Dash} />

            </Switch>
               
        </div>
    )

}

export default Landing;