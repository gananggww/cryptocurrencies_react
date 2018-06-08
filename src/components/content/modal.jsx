import React, { Component } from 'react';
import { connect } from 'react-redux'

import { actionOpenModal, sold, bought } from '../../redux/action/index_action.jsx'

import { convertToUSD } from '../../EXT/idrtousd.js'
import { convertToIDR } from '../../EXT/usdtoidr.js'


import '../../style/modal.css';

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sell: 0,
      buy:0,
      warning_message: "",
      tab_sell: 'tab-active',
      tab_buy: 'tab-hidden',
      tab_sell_active: 'tab-detail active',
      tab_buy_active: 'tab-detail passive'
    }
  }
  close_modal() {
    this.props.actionOpenModal_dispatch('none')
  }

  buy(event) {
    this.setState({buy:parseInt(event.target.value)})
  }

  buySubmit() {
    if (this.state.buy == 0) {
        this.setState({warning_message:"You cannot buying 0 Currency"})
    } else if (this.state.buy < 0) {
        this.setState({warning_message:"You cannot buying (-) Currency"})
    } else if (this.state.buy > this.props.cryptoCurrencyListByID_state.quotes.USD.price) {
        this.setState({warning_message:`${this.props.cryptoCurrencyListByID_state.name} Currency is not enough`})
    } else {
        this.props.bought_dispatch(this.state.buy)
    }
  }


  sell(event) {
    this.setState({sell:parseInt(event.target.value)})
  }
  sellSubmit () {
    if (this.state.sell == 0) {
        this.setState({warning_message:"You cannot selling 0 Currency"})
    } else if (this.state.sell < 0) {
        this.setState({warning_message:"You cannot selling (-) Currency"})
    } else if (this.state.sell > this.props.myCryptoCurrency_state) {
        this.setState({warning_message:"Your Currency is not enough"})
    } else {
        this.props.sold_dispatch(this.state.sell)
    }
  }

  tab_sell_clicked () {
    if (this.state.tab_sell != 'tab-active') {
      this.setState({
        tab_sell:'tab-active',
        tab_buy: 'tab-hidden',
        tab_sell_active:'tab-detail active',
        tab_buy_active:'tab-detail passive'
      })
    }
  }

  tab_buy_clicked () {
    if (this.state.tab_buy != 'tab-active') {
      this.setState({
        tab_buy:'tab-active',
        tab_sell: 'tab-hidden',
        tab_buy_active:'tab-detail active',
        tab_sell_active:'tab-detail passive',
      })
    }
  }

  warning() {
    if (this.state.warning_message) {
      return (
        <div className="warning-modal">
          {this.state.warning_message}
        </div>
      )
    }
  }

  render() {
    return (
        <div className="modal" style={{display:`${this.props.openModal_state}`}}>
          <div class="modal-content">
            <a onClick={() => this.close_modal()} class="close">&times;</a>
              <div>
                <div className="tab-layout">
                  <a className={this.state.tab_sell_active} onClick={() => this.tab_sell_clicked()} id="tab1">
                    Sell</a>
                  <a className={this.state.tab_buy_active} onClick={() => this.tab_buy_clicked()} id="tab2">
                    Buy</a>
                  <a className="tab-passive"></a>
                </div>

                <section id="content1" className={this.state.tab_sell}>
                  <div className="status-currency">
                    Your Current Currency: {this.props.myCryptoCurrency_state} IDR / {convertToUSD(this.props.myCryptoCurrency_state)} USD
                  </div>
                  {this.warning()}
                  <div className="form">
                    <div >
                      <div>
                        Name : {this.props.cryptoCurrencyListByID_state.name} <img src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${this.props.cryptoCurrencyListByID_state.id}.png`} alt={this.props.cryptoCurrencyListByID_state.name}></img>
                      </div>
                      <div>
                        Price : {this.props.cryptoCurrencyListByID_state.quotes ? convertToIDR(this.props.cryptoCurrencyListByID_state.quotes.USD.price) : 0} IDR / {this.props.cryptoCurrencyListByID_state.quotes ? this.props.cryptoCurrencyListByID_state.quotes.USD.price : 0} USD
                      </div>
                      <div>
                        Rank : #{this.props.cryptoCurrencyListByID_state.rank}
                      </div>
                      <div>
                        Source link : <a href={`https://coinmarketcap.com/currencies/${this.props.cryptoCurrencyListByID_state.website_slug}/`}>Click Me!</a>
                      </div>
                    </div>
                    <div>
                      IDR : <input className="input" type="number" onChange={(e) => this.sell(e)}></input>
                    </div>
                  </div>
                  <div className="submit-layout">
                    <a className="button-submit" onClick={() => this.sellSubmit()}>Sell</a>
                  </div>
                </section>



                <section id="content1" className={this.state.tab_buy}>
                  <div className="status-currency">
                    Your Current Currency: {this.props.myCryptoCurrency_state} IDR / {convertToUSD(this.props.myCryptoCurrency_state)} USD
                  </div>
                  {this.warning()}
                  <div className="form">
                    <div >
                      <div>
                        Name : {this.props.cryptoCurrencyListByID_state.name} <img src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${this.props.cryptoCurrencyListByID_state.id}.png`} alt={this.props.cryptoCurrencyListByID_state.name}></img>
                      </div>
                      <div>
                        Price : {this.props.cryptoCurrencyListByID_state.quotes ? convertToIDR(this.props.cryptoCurrencyListByID_state.quotes.USD.price) : 0} IDR / {this.props.cryptoCurrencyListByID_state.quotes ? this.props.cryptoCurrencyListByID_state.quotes.USD.price : 0} USD
                      </div>
                      <div>
                        Rank : #{this.props.cryptoCurrencyListByID_state.rank}
                      </div>
                      <div>
                        Source link : <a href={`https://coinmarketcap.com/currencies/${this.props.cryptoCurrencyListByID_state.website_slug}/`}>Click Me!</a>
                      </div>
                    </div>
                    <div>
                      IDR : <input className="input" type="number" onChange={(e) => this.buy(e)}></input>
                    </div>
                  </div>
                  <div className="submit-layout">
                    <a className="button-submit" onClick={() => this.buySubmit()}>Buy</a>
                  </div>
                </section>
              </div>


          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    openModal_state: state.openModal,
    cryptoCurrencyListByID_state: state.cryptoCurrencyListByID,
    myCryptoCurrency_state: state.myCryptoCurrency
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionOpenModal_dispatch: (payload) => dispatch(actionOpenModal(payload)),
    sold_dispatch: (payload) => dispatch(sold(payload)),
    bought_dispatch: (payload) => dispatch(bought(payload)),
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(Modal)
export default Conn;
