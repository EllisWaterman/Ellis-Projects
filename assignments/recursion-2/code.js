const add = (a, b) => {
  let n = [a, b]
  if (n.length === 0) {
    return 0
  } else {
    return n[0] + add(n.slice(1),0)
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
