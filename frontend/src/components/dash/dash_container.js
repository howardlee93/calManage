import {connect} from 'react-redux';
import Dash from './dash';



const mapStateToProps = state => ({
    workout: state.workout
})

const mapDispatchToProps = dispatch =>({


});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
