const defaultState = {
  cryptoCurrency100List: [],
  cryptoCurrencyList: [],
  filterEvent: '',
  myCryptoCurrency: 10000000,
  openModal: 'none',
  cryptoCurrencyListByID: [],
  bought: 0
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
    case 'GET_BY_ID':
      return {...state, cryptoCurrencyListByID: action.payload}
    case 'COUNT_SOLD':
      return {...state, myCryptoCurrency: action.payload}
    case 'COUNT_BOUGHT':
      return {...state, myCryptoCurrency: action.payload}
    default:
    return state
  }
}

export default cryptoReducer
