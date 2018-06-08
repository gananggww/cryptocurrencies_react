export const convertToUSD = (value) => {
  let currentUSD = 13925
  return Math.round(value / currentUSD)
}
