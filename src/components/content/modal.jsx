import React, { Component } from 'react';
import { connect } from 'react-redux'

import { actionOpenModal } from '../../redux/action/index_action.jsx'


import '../../style/modal.css';

class Modal extends Component {
  close_modal() {
    this.props.actionOpenModal_dispatch('none')
  }
  render() {
    return (
      <div>
        <div className="modal" style={{display:`${this.props.openModal_state}`}}>
          <div class="modal-content">
            <a onClick={() => this.close_modal()} class="close">&times;</a>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    openModal_state: state.openModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionOpenModal_dispatch: (payload) => dispatch(actionOpenModal(payload)),
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(Modal)
export default Conn;
