// fitform_container
import Fitform from './fitform';
import {connect} from 'react-redux';
import {createNewWorkout} from '../../actions/workout_actions';



const mapDispatchToProps = dispatch =>({
    createNewWorkout: (data)=> dispatch(createNewWorkout(data))
});

export default connect(null, mapDispatchToProps)(Fitform);

