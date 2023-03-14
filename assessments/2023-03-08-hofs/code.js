const evens = (numbers) => {
  let returnArray = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      returnArray.push(numbers[i])
    }
  }
  return returnArray
}

const shouty = (strings) => {
  let returnArray = []
  for (let i = 0; i < strings.length; i++) {
    returnArray.push(strings[i].toUpperCase())
  }
  return returnArray
}