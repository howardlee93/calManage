import EditForm from './editform';
import {connect} from 'react-redux';
import{ updateUserWorkout } from '../../actions/workout_actions';


const mapStateToProps = state => ({
    workouts: state.workouts

})


const mapDispatchToProps = dispatch => ({
    updateUserWorkout: (id, data )=> dispatch(updateUserWorkout(id, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)