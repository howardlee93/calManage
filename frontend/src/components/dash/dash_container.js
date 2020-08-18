import {connect} from 'react-redux';
import Dash from './dash';
import {fetchWorkouts, deleteUserWorkout, fetchUserWorkouts} from '../../actions/workout_actions';
import{openModal} from '../../actions/modal_actions';


const mapStateToProps = state => ({
    workouts: state.workouts,
    modal: state.modal
})

const mapDispatchToProps = dispatch =>({
    fetchWorkouts: ()=> dispatch(fetchWorkouts()),
    openModal: (modal) => dispatch(openModal(modal)),
    deleteUserWorkout: id => dispatch(deleteUserWorkout(id)),
    fetchUserWorkouts: id => dispatch(fetchUserWorkouts(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
