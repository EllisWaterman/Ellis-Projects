const evens = (numbers) => {
  let returnArray = []
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
      returnArray.push(numbers[i])
    }
  }
  return returnArray
}