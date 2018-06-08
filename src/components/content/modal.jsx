import React, { Component } from 'react';
import { connect } from 'react-redux'

import { actionOpenModal, sold } from '../../redux/action/index_action.jsx'

import { convertToUSD } from '../../EXT/idrtousd.js'
import { convertToIDR } from '../../EXT/usdtoidr.js'


import '../../style/modal.css';

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sell: 0,
      status_buy: false,
      status_sell: false,
      warning_message: ""
    }
  }
  close_modal() {
    this.props.actionOpenModal_dispatch('none')
  }
  buy(e) {

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

  buyORsell() {

  }

  render() {
    return (
        <div className="modal" style={{display:`${this.props.openModal_state}`}}>
          <div class="modal-content">
            <a onClick={() => this.close_modal()} class="close">&times;</a>
              <div>
                <input id="tab1" type="radio" name="tabs" checked/>
                  <label for="tab1">Sell</label>

                <input id="tab2" type="radio" name="tabs"/>
                  <label for="tab2">Buy</label>

                    <section id="content1">
                      {this.state.warning_message ? this.state.warning_message: ""}
                      <div>
                        your Currency: {this.props.myCryptoCurrency_state} IDR /
                        {convertToUSD(this.props.myCryptoCurrency_state)} USD
                      </div>
                      <div>
                        <div> Name : {this.props.cryptoCurrencyListByID_state.name}</div>
                        <div>
                          Price :{this.props.cryptoCurrencyListByID_state.quotes ? convertToIDR(this.props.cryptoCurrencyListByID_state.quotes.USD.price) : 0} IDR /
                          {this.props.cryptoCurrencyListByID_state.quotes ? this.props.cryptoCurrencyListByID_state.quotes.USD.price : 0} USD
                        </div>
                      </div>
                      <div>
                        Sell:
                        <input type="number" onChange={(e) => this.sell(e)}></input>
                      </div>
                      <div>
                        <button onClick={() => this.sellSubmit()}>Sell</button>
                      </div>
                    </section>



                    <section id="content2">
                        <div>
                          your Currency: {this.props.myCryptoCurrency_state} IDR /
                          {convertToUSD(this.props.myCryptoCurrency_state)} USD
                        </div>
                        <div>
                          <div> Name : {this.props.cryptoCurrencyListByID_state.name}</div>
                          <div>
                            Price :{this.props.cryptoCurrencyListByID_state.quotes ? convertToIDR(this.props.cryptoCurrencyListByID_state.quotes.USD.price) : 0} IDR /
                            {this.props.cryptoCurrencyListByID_state.quotes ? this.props.cryptoCurrencyListByID_state.quotes.USD.price : 0} USD
                          </div>
                        </div>
                        <div>
                          Buy:
                          // <input type="number" onChange={(e) => this.buy(e)} disabled={this.state.status_buy}></input>
                        </div>
                        <div>
                          <button >Sell</button>
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
    sold_dispatch: (payload) => dispatch(sold(payload))
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(Modal)
export default Conn;
