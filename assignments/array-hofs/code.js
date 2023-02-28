const evens = (array) => {
  let returnArray = []
  returnArray = array.filter((n) => n % 2 === 0)
  return returnArray
}