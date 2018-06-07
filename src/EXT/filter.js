export const searchCoin = ({ cryptoCurrencyList, filterEvent, cryptoCurrency100List }) => {
  let filterEventTrim = filterEvent.trim().toLowerCase()
  if (filterEventTrim === '')
    return cryptoCurrencyList
  else
    return cryptoCurrency100List.filter(item => item.name.toLowerCase().includes(filterEventTrim) || item.name.toLowerCase().includes(filterEventTrim) )
}
