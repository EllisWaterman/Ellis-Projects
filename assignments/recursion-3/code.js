const product = (n) => {
  if(n.length === 0) {
    return 1
  } else {
    return n[0] * product(n.slice(1))
  }
}

const sumSquares = (n) => {
  if (n === 0) {
    return 0
  } else {
    return n**2 + sumSquares(n-1)
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
  if (n.length < 2) {
    return true
  } else if(n[0] <= n[1]) {
    return isAscending(n.slice(1))
  } else return false
}

const isDescending = (n) => {
  if (n.length < 2) {
    return true
  } else if(n[0] >= n[1]) {
    return isDescending(n.slice(1))
  } else return false
}

const sumNested = (n) => {
  if(n.length === 0) {
    return 0
  } else if (isNumber(n[0])) {
    return n[0] + sumNested(n.slice(1))
  } else {
    return n.reduce((x,y) => x+y,1 )
  }
}