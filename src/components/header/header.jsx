import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../../style/header.css';

import { cryptoCurrency100List, actionFilteringEventDispatch } from '../../redux/action/index_action.jsx'

class Header extends Component {
  clickSearch() {
    this.props.cryptoCurrency100List_dispatch()
  }
  filtering_event(event) {
    this.props.filtering_event_dispatch(event.target.value)
  }
  render() {
    return (
      <div>
        <div className="header">
          <a onClick={() => this.clickSearch()}><input onChange={(e)=> this.filtering_event(e)} id="searchBar" type="text" name="search"/></a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filtering_event_dispatch: (payload) => dispatch(actionFilteringEventDispatch(payload)),
    cryptoCurrency100List_dispatch: () => dispatch(cryptoCurrency100List()),
  }
}

const Conn = connect(null, mapDispatchToProps)(Header)
export default Conn;
