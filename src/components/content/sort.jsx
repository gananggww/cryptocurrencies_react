import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../style/sort.css';

import { cryptoCurrencyList } from '../../redux/action/index_action.jsx'



class Sort extends Component {
  sort_filter (value) {
    this.props.cryptoCurrencyist_dispatch(value)
  }
  render() {
    return (
        <div className="sort-item">
          <div className="sort-name">
            <a onClick={() => this.sort_filter('rank')} id="rank" className="text-sort">#</a>
            <a onClick={() => this.sort_filter('name')} className="text-sort">
              Name
            </a>
          </div>
          <div className="sort-status">
            <div className="sort-status-detail color-two">
              <a>
                Market Cap
              </a>
            </div>
            <div className="sort-status-detail color-one">
              <a>
                Price
              </a>
            </div>
            <div className="sort-status-detail color-two">
              <a onClick={() => this.sort_filter('volume_24h')} className="text-sort">
                Volume (24h)
              </a>
            </div>
            <div className="sort-status-detail color-one right-sort-detail">
              <a>
                Circulating Supply
              </a>
            </div>
            <div className="sort-status-detail color-one">
              <a onClick={() => this.sort_filter('percent_change_24h')} className="text-sort">
                Change (24h)
              </a>
            </div>
          </div>
        </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    cryptoCurrencyist_dispatch: (payload) => dispatch(cryptoCurrencyList(payload)),
  }
}


const Conn = connect(null, mapDispatchToProps)(Sort)
export default Conn;
