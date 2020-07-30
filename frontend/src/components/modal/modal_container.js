import {connect} from 'react-redux';
import Modal from './modal';

import {openModal, closeModal} from '../../actions/modal_actions';


const mapStateToProps = (state)=>{
    return{
        modal: state.modal,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
