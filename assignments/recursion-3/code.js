const product = (n) => {
  if (n.length === 0) {
    return 1
  } else {
    return n[0] * product(n.slice(1))
  }
}

const sumSquares = (n) => {
  if (n === 0) {
    return 0
  } else {
    return n ** 2 + sumSquares(n - 1)
  }
}

const lucas = (n) => {
  if (n === 0) {
    return 2;
  } else if (n === 1) {
    return 1;
  } else {
    return lucas(n - 1) + lucas(n - 2)
  }
}

const isAscending = (n) => {
  if (n.length === 0) {
    return false
  } else if (n[0] <= isAscending(n.slice(1))) {
    return true
  }
}