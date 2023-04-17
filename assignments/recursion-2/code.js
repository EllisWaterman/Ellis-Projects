const maximum = (n) => {
  if (n.length === 0) {
    return -Infinity
  } else {
    return n[0] + Math.max(maximum(n.slice(1)))
}
}
