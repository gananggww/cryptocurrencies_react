import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../../style/header.css';


class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div id="title">
            <img id="img-logo" src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg"></img>
          </div>
          <input id="searchBar" type="text" name="search"/>
        </div>
      </div>
    );
  }
}

const Conn = connect(null, null)(Header)
export default Conn;
