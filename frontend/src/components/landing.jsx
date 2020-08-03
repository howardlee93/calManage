import React from 'react';
import workout from '../assets/images/workout.jpg';
import { Route, Switch} from 'react-router-dom';

import Resources from './resources';
import Dash from './dash/dash';
import NotLoggedIn from './notloggedin';
import {ProtectedRoute} from '../util/route_util';




function Landing(){


    return(
        <div>
            <Switch>
                <Route exact path='/' component={NotLoggedIn} />
                
                <Route path='/resources' component={Resources} />
                <ProtectedRoute path='/dash' component={Dash} />

            </Switch>
               
        </div>
    )

}

export default Landing;