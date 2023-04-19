const product = (n) => {
  if(n.length === 0) {
    return 1
  } else {
    return n[0] * product(n.slice(1))
  }
}

const sumSquares = (n) => {
  if (n.length === 0) {
    return 0
  }
}