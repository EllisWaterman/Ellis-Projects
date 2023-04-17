const add = (a,b) => {
  return a + add(b)
}

const maximum = (n) => {
  if (n.length === 0) {
    return -Infinity
  } else {
    return Math.max(n[0], maximum(n.slice(1)))
}
}
