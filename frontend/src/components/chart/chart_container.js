import Chart from './chart';
import {connect} from 'react-redux';
import {fetchWorkouts} from '../../actions/workout_actions';



const mapStateToProps = state =>({
    workouts: state.workouts
});


const mapDispatchToProps = dispatch =>({
    fetchWorkouts: ()=> dispatch(fetchWorkouts()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);

