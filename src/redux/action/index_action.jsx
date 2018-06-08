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

export const actionOpenModal = (payload) => {
  return {
    type: 'OPEN_MODAL',
    payload
  }
}

export const actionCryptoCurrencyListByID = (payload) => {
  return {
    type: 'GET_BY_ID',
    payload
  }
}

export const actionSold = (payload) => {
  return {
    type: 'COUNT_SOLD',
    payload
  }
}

export const actionBought = (payload) => {
  return {
    type: 'COUNT_BOUGHT',
    payload
  }
}

export const actionNext = (payload) => {
  return {
    type: 'PAGE_NEXT',
    payload
  }
}
export const actionPreviews = (payload) => {
  return {
    type: 'PAGE_PREVIEWS',
    payload
  }
}

export const sold = (payload) => {
  return (dispatch, getState) => {
    let current_myCryptoCurr = getState().myCryptoCurrency
    let result = current_myCryptoCurr - payload
    dispatch(actionSold(result))
  }
}

export const bought = (payload) => {
  return (dispatch, getState) => {
    let current_myCryptoCurr = getState().myCryptoCurrency
    let result = current_myCryptoCurr + payload
    dispatch(actionBought(result))
  }
}


export const cryptoCurrencyList = (sort_payload) => {
  return (dispatch, getState) => {
    let start = getState().start
    let limit = getState().limit
    const url = `https://api.coinmarketcap.com/v2/ticker/?start=${start}&limit=${limit}&structure=array&sort=${sort_payload}`
    console.log(url);
    axios.get(url)
    .then(resp => {
      dispatch(actionCryptoCurrencyList(resp.data.data))
    }).catch(err => console.log(err))
  }
}

export const cryptoCurrencyListByID = (id) => {
  return (dispatch, getState) => {
    const url = `https://api.coinmarketcap.com/v2/ticker/${id}/`
    axios.get(url)
    .then(resp => {
      dispatch(actionCryptoCurrencyListByID(resp.data.data))
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
