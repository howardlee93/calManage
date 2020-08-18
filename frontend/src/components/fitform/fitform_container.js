// fitform_container
import Fitform from './fitform';
import {connect} from 'react-redux';

import {createWorkout } from '../../actions/workout_actions';


const mapDispatchToProps = dispatch =>({
    createWorkout: (data)=> dispatch(createWorkout(data))
});

export default connect(null, mapDispatchToProps)(Fitform);

