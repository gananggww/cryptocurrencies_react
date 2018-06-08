import React, { Component } from 'react';
import { connect } from 'react-redux'

import { cryptoCurrencyList, actionOpenModal, cryptoCurrencyListByID } from '../../redux/action/index_action.jsx'
import { searchCoin } from '../../EXT/filter.js'
import Sort from './sort.jsx';
import Wallet from './wallet.jsx';


import '../../style/content.css';


class Content extends Component {

  componentWillMount() {
    this.props.cryptoCurrencyList_dispatch()
  }
  componentDidMount() {
    setInterval(() => {
      this.dispatch_cron()
    }, 86400000)
  }

  dispatch_cron () {
    this.props.cryptoCurrencyList_dispatch()
  }

  convert_currency(value) {
    if (value) {
      return '$' + value.toLocaleString('es-US')
    } else {
      return '$0'
    }
  }

  convert_percent(value) {
    if (value) {
      return value + "%"
    } else {
      return '0%'
    }
  }

  open_modal(id) {
    this.props.actionOpenModal_dispatch('block')
    this.props.cryptoCurrencyListByID_dispatch(id)
  }

  render() {
    if (this.props.cryptoCurrencyList_state) {
      return (
        <div className="container">
          <Wallet/>
          <Sort/>
          {
            this.props.cryptoCurrencyList_state.map((item, idx) => {
              return (
                <a onClick={()=> this.open_modal(item.id)} className="item">
                  <div className="name-list">
                    <div className="img-base-list">
                      <img src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${item.id}.png`} alt={item.name}></img>
                    </div>
                    <div key={item.id}>{item.name}</div>
                  </div>
                  <div className="status-item">
                    <div className="status-detail color-one">{this.convert_currency(item.quotes.USD.market_cap)}</div>
                    <div className="status-detail color-two">{this.convert_currency(item.quotes.USD.price)}</div>
                    <div className="status-detail color-one">{this.convert_currency(item.quotes.USD.volume_24h)}</div>
                    <div className="status-detail color-two">{item.circulating_supply || 0}</div>
                    <div id={item.quotes.USD.percent_change_24h.toString()[0] !== '-' ? 'color-black' : 'color-red'}
                      className="status-detail color-one right-item-detail">
                      {this.convert_percent(item.quotes.USD.percent_change_24h)}
                    </div>
                  </div>
                </a>
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
    cryptoCurrencyList_state: searchCoin(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cryptoCurrencyList_dispatch: () => dispatch(cryptoCurrencyList()),
    actionOpenModal_dispatch: (payload) => dispatch(actionOpenModal(payload)),
    cryptoCurrencyListByID_dispatch: (payload) => dispatch(cryptoCurrencyListByID(payload)),
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(Content)
export default Conn;
