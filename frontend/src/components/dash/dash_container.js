import {connect} from 'react-redux';
import Dash from './dash';
import {fetchWorkouts} from '../../actions/workout_actions';
import{openModal} from '../../actions/modal_actions';


const mapStateToProps = state => ({
    workouts: state.workouts,
    modal: state.modal
})

const mapDispatchToProps = dispatch =>({
    fetchWorkouts: ()=> dispatch(fetchWorkouts()),
    openModal: (modal) => dispatch(openModal(modal))

});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
