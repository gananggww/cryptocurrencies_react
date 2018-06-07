import axios from 'axios'

export const actionCryptoCurrencyList = (payload) => {
  return {
    type: 'GET_ALL_CRYPTO_CURRENCY',
    payload
  }
}


export const cryptoCurrencyList = () => {
  return (dispatch, getState) => {
    const url = `https://api.coinmarketcap.com/v2/ticker/?start=1&limit=30&structure=array`
    axios.get(url)
    .then(resp => {
      dispatch(actionCryptoCurrencyList(resp.data.data))
    }).catch(err => console.log(err))
  }
}
