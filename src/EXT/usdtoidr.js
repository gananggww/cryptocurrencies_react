export const convertToIDR = (value) => {
  let currentUSD = 13925
  return Math.round(value * currentUSD)
}
