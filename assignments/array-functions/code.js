function countTens(x) {
  let totalTens = 0
  while (x.length > 0) {
    if (x.pop() === 10)
      totalTens++
  }
  return totalTens
}

function sum(x) {
  let total = 0
  for (let pos = 0; pos < x.length; pos++) {
    total = total + x[pos]
  }
  return total
}

function evens(x) {
  const xs = []
  for (let position = 0; position <= x.length; position++) {
    if (x[position] % 2 === 0) {
      xs.push(x[position]);
    }
  }
  return xs
}

function anyOverOneHundred(x) {
  for(let position= 0; position <= x.length; position++) {
  let biggestNumber = 0
  for (let numbOver100 = 101; numbOver100 < biggestNumber; numbOver100++) {
    if (x.indexOf(numbOver100) >= 0)
      return true
    else
      return false
  }
}
}

function pyramid(x) {
  const xs = []
  for (let i = 0; i <= x; i++)
    for (let j = 0; j < i; j++)
      xs.push(i)
  return xs
}
