import React, { Component } from 'react';
import { connect } from 'react-redux'

import { cryptoCurrencyList, actionNext, actionPreviews } from '../../redux/action/index_action.jsx'

import '../../style/pagination.css';


class Pagination extends Component {
  goToPreviews () {
    if (this.props.start_state && this.props.start_state > 20) {
      let start = this.props.start_state - 20
      let payload = start
      this.props.previews_dispatch(payload)
      this.props.cryptoCurrencyList_dispatch()
    } else {

    }

  }
  goToNext () {
    if (this.props.start_state) {
      let start = this.props.start_state + 20
      let payload = start
      this.props.next_dispatch(payload)
      this.props.cryptoCurrencyList_dispatch()
    }
  }
  render() {
    return (
      <div>
        <div className="pagination">
          <a onClick={() => this.goToPreviews()}>❮ 20</a>
          <a onClick={() => this.goToNext()}> 20 ❯</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    start_state: state.start,
    limit_state: state.limit,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    next_dispatch: (payload) => dispatch(actionNext(payload)),
    previews_dispatch: (payload) => dispatch(actionPreviews(payload)),
    cryptoCurrencyList_dispatch: () => dispatch(cryptoCurrencyList()),
  }
}
const Conn = connect(mapStateToProps, mapDispatchToProps)(Pagination)
export default Conn;
