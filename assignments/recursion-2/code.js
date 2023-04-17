const maximum = (n) => {
  if (n.length === 0) {
    return -Infinity
  } else {
    return Math.max(maximum(n.slice(1)))
}
}
