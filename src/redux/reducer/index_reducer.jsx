const defaultState = {
  cryptoCurrency100List: [],
  cryptoCurrencyList: [],
  filterEvent: '',
  myCryptoCurrency: 10000000,
  openModal: 'none'
}

const cryptoReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'GET_ALL_CRYPTO_CURRENCY':
      return {...state, cryptoCurrencyList: action.payload}
    case 'FILTER_EVENT':
      return {...state, filterEvent: action.payload}
    case 'GET_ALL_100_CRYPTO_CURRENCY':
      return {...state, cryptoCurrency100List: action.payload}
    case 'OPEN_MODAL':
      return {...state, openModal: action.payload}
    default:
    return state
  }
}

export default cryptoReducer
