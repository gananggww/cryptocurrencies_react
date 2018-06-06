import axios from 'axios'

export const actionCryptoCurrencyList = (payload) => {
  return {
    type: 'GET_ALL_CRYPTO_CURRENCY',
    payload
  }
}


export const cryptoCurrencyList = () => {
  return (dispatch, getState) => {
    const url = `https://api.coinmarketcap.com/v2/listings/`
    axios.get(url)
    .then(resp => {
      console.log(resp);
      dispatch(actionCryptoCurrencyList(resp))
    }).catch(err => console.log(err))
  }
}
