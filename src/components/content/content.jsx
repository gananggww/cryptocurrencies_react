import React, { Component } from 'react';
import { connect } from 'react-redux'

import { cryptoCurrencyList } from '../../redux/action/index_action.jsx'


import '../../App.css';


class Content extends Component {


  componentWillMount() {
    this.props.cryptoCurrencyList_dispatch()
  }

  render() {
    return (
      <div>
        <div>aku adalah content</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cryptoCurrencyList_dispatch: () => dispatch(cryptoCurrencyList()),
  }
}

const Conn = connect(null, mapDispatchToProps)(Content)
export default Conn;
