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
    x[pos]
    total++
  }
  return total
}.