import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../style/main.css';

import Content from './content/content.jsx';
import Header from './header/header.jsx';
import Modal from './content/modal.jsx';


class Main extends Component {
  render() {
    return (
      <div>
        <Modal/>
        <div>
          <Header/>
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    );
  }
}


const Conn = connect(null, null)(Main)
export default Conn;
