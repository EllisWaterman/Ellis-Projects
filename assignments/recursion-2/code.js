const add = (a,b) => {
  let n = [a,b]
  return n[0] + add(n.slice(1))
}

const maximum = (n) => {
  if (n.length === 0) {
    return -Infinity
  } else {
    return Math.max(n[0], maximum(n.slice(1)))
}
}
