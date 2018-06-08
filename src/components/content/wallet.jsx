import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../../style/wallet.css';

class Wallet extends Component {
  render() {
    return (
      <div className="my-currency">
        Your Currency : {this.props.myCryptoCurrency_state}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myCryptoCurrency_state: state.myCryptoCurrency
  }
}

const Conn = connect(mapStateToProps, null)(Wallet)
export default Conn;
