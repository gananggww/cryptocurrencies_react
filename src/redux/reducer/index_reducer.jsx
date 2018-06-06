const defaultState = {
  cryptoCurrencyList: [],
}

const cryptoReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'GET_ALL_CRYPTO_CURRENCY':
      return {...state, cryptoCurrencyList: action.payload}
    default:
    return state
  }
}

export default cryptoReducer
