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
  let y = 0
  for (let position = 0; position < x.length; position++) {
    if (x[y] % 2 === 0) {
    xs.push[y]
    }
  }
  return xs
}