import EditForm from './editform';
import {connect} from 'react-redux';
import{ updateUserWorkout } from '../../actions/workout_actions';
import {withRouter} from 'react-router-dom';


const mapStateToProps = state => ({
    workouts: state.workouts

})


const mapDispatchToProps = dispatch => ({
    updateUserWorkout: (id, data )=> dispatch(updateUserWorkout(id, data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditForm));
