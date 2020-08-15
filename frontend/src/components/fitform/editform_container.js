import EditForm from './editform';
import {connect} from 'react-redux';
import{fetchUserWorkouts,updateUserWorkout } from '../../actions/workout_actions';




const mapDispatchToProps = dispatch => ({
    fetchUserWorkouts: id => dispatch(fetchUserWorkouts(id)),
    updateUserWorkout: data => dispatch(updateUserWorkout(data))
});

export default connect(null, mapDispatchToProps)(EditForm)