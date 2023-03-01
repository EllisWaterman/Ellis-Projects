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
  return array.map((n) => n.name)
}

const grades = (array) => {
  return array.map((n) => n.grade)
}

const pairs = (array) => {
  return array.map((n) => [n,n])
}

const averageGrade = (array) => {
  let result = 0
  let newArray = array.map((n) => n.grade)
  for(let i = 0; i< newArray; i++) {
    console.log(newArray)
    result + newArray[i]
    result/i
  }
  return result
}

const flatpairs = (array) => {
    return array.flatMap((n) => [n,n])
}

const allEven = (array) => {
  return array.every((n) => n % 2 === 0)
}

const someEven = (array) => {
  return array.some((n) => n % 2 === 0)
}

const lengthOfNames = (array) => {
  return array.filter((n) => n(0).toUpperCase() === n(0))
}