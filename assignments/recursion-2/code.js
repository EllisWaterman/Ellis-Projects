const add = (a, b) => {
  if (b === 0) {
    return 0
  } else {
    return 1 + add(a,b-1)
  }
}

const multiply = () => {
  const add = (a, b) => {
  if (b === 0) {
    return 0
  } else {
    return 1 * add(a,b-1)
  }
}
}
const double = (a,b) => { 
  if (b === 0) {
    return 0
  } else {
    return a * (2*(double(a,b--)))
  }
}
const maximum = (n) => {
  if (n.length === 0) {
    return -Infinity
  } else {
    return Math.max(n[0], maximum(n.slice(1)))
  }
}
