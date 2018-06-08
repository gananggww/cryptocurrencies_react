import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../style/sort.css';


class Sort extends Component {
  render() {
    return (
        <div className="sort-item">
          <div className="sort-name">
            <a className="text-sort">
              Name
            </a>
          </div>
          <div className="sort-status">
            <div className="sort-status-detail color-two">
              <a className="text-sort">
                Market Cap
              </a>
            </div>
            <div className="sort-status-detail color-one">
              <a className="text-sort">
                Price
              </a>
            </div>
            <div className="sort-status-detail color-two">
              <a className="text-sort">
                Volume (24h)
              </a>
            </div>
            <div className="sort-status-detail color-one right-sort-detail">
              <a className="text-sort">
                Circulating Supply
              </a>
            </div>
            <div className="sort-status-detail color-one">
              <a className="text-sort">
                Change (24h)
              </a>
            </div>
          </div>
        </div>
    );
  }
}


const Conn = connect(null, null)(Sort)
export default Conn;
