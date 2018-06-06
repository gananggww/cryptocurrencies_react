import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../../App.css';


class Header extends Component {
  render() {
    return (
      <div>
        <div>aku adalah header</div>
      </div>
    );
  }
}

const Conn = connect(null, null)(Header)
export default Conn;
