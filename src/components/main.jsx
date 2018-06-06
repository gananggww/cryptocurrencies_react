import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';

import Content from './content/content.jsx';
import Header from './header/header.jsx';


class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}


const Conn = connect(null, null)(Main)
export default Conn;
