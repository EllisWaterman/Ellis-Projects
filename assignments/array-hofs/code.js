const evens = (array) => {
  return array.filter((n) => n % 2 === 0)
}

const odds = (array) => {
  return array.filter((n) => n % 2 !== 0)
}

const big = (array) => {
  return array.filter((n) => n > 100)
}

const names = (array) => {
  return array.filter((n) => console.log(n.name))
}