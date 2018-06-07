import React, { Component } from 'react';
import { connect } from 'react-redux'

import { cryptoCurrencyList } from '../../redux/action/index_action.jsx'


import '../../App.css';
// {JSON.stringify(Object.values(this.props.cryptoCurrencyList_state.cryptoCurrencyList))}


class Content extends Component {

  componentWillMount() {
    this.props.cryptoCurrencyList_dispatch()
  }

  render() {
    if (this.props.cryptoCurrencyList_state) {
      return (
        <div className="content">
          {
            this.props.cryptoCurrencyList_state.map(item => {
              return (
                <div key={item.id}>{item.name}</div>
              )
            })
          }
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    cryptoCurrencyList_state: state.cryptoCurrencyList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cryptoCurrencyList_dispatch: () => dispatch(cryptoCurrencyList()),
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(Content)
export default Conn;
