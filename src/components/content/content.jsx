import React, { Component } from 'react';
import { connect } from 'react-redux'

import { cryptoCurrencyList } from '../../redux/action/index_action.jsx'


import '../../style/content.css';


class Content extends Component {
  constructor() {
    super();
    this.state = {
      color_percent: 'color-red'
    }
  }

  componentWillMount() {
    this.props.cryptoCurrencyList_dispatch()
  }

  convert_currency(value) {
    return '$' + value.toLocaleString('es-US')
  }

  convert_percent(value) {
    if (true) {
      // this.setState({color_percent:'color_red'})
      return value + "%"
    }
  }

  render() {
    if (this.props.cryptoCurrencyList_state) {
      return (
        <div className="container">
          {
            this.props.cryptoCurrencyList_state.map(item => {
              return (
                <div className="item">
                  <div className="name-list">
                    <div className="img-base-list">
                      <img src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${item.id}.png`}></img>
                    </div>
                    <div key={item.id}>{item.name}</div>
                  </div>
                  <div className="status-item">
                    <div className="status-detail color-one">{this.convert_currency(item.quotes.USD.market_cap)}</div>
                    <div className="status-detail color-two">{this.convert_currency(item.quotes.USD.price)}</div>
                    <div className="status-detail color-one">{this.convert_currency(item.quotes.USD.volume_24h)}</div>
                    <div className="status-detail color-two">{item.circulating_supply}</div>
                    <div id={item.quotes.USD.percent_change_24h.toString()[0] !== '-' ? 'color-black' : 'color-red'} className="status-detail color-one right-item-detail">{this.convert_percent(item.quotes.USD.percent_change_24h)}</div>
                  </div>
                </div>
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
