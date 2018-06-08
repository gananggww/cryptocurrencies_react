import axios from 'axios'

export const actionCryptoCurrencyList = (payload) => {
  return {
    type: 'GET_ALL_CRYPTO_CURRENCY',
    payload
  }
}

export const actionFilteringEventDispatch = (payload) => {
  return {
    type: 'FILTER_EVENT',
    payload
  }
}

export const actionCryptoCurrency100List = (payload) => {
  return {
    type: 'GET_ALL_100_CRYPTO_CURRENCY',
    payload
  }
}


export const cryptoCurrencyList = (sort_payload) => {
  return (dispatch, getState) => {
    const url = `https://api.coinmarketcap.com/v2/ticker/?start=1&limit=20&structure=array&sort=${sort_payload}`
    console.log(url);
    axios.get(url)
    .then(resp => {
      dispatch(actionCryptoCurrencyList(resp.data.data))
    }).catch(err => console.log(err))
  }
}

export const cryptoCurrency100List = () => {
  return (dispatch, getState) => {
    const url = `https://api.coinmarketcap.com/v2/ticker/?structure=array`
    axios.get(url)
    .then(resp => {
      dispatch(actionCryptoCurrency100List(resp.data.data))
    }).catch(err => console.log(err))
  }
}
