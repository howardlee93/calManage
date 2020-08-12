import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Resources from './resources';
import DashContainer from './dash/dash_container';
import NotLoggedIn from './notloggedin';
import {ProtectedRoute} from '../util/route_util';




function Landing(){


    return(
        <div>
            <Switch>
                <Route exact path='/' component={NotLoggedIn} />
                
                <Route path='/resources' component={Resources} />
                <ProtectedRoute path='/dash' component={DashContainer} />

            </Switch>
               
        </div>
    )

}

export default Landing;