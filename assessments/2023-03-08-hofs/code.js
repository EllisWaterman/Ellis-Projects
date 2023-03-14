const evens = (numbers) => {
  let returnArray = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      returnArray.push(numbers[i])
    }
  }
  return returnArray
}

const shouty = (strings) => {
  let returnArray = []
  for (let i = 0; i < strings.length; i++) {
    returnArray.push(strings[i].toUpperCase())
  }
  return returnArray
}

const join = (strings, delimiter) => {
  for (let i = 0; i < strings.length; i++) {
    joined[i] + s
  }
}

const allSiblings = (students) => {
  let returnArray = []
  for (let i = 0; i < students.length; i++) {
    returnArray.push(students[i].siblings)
  }
  return returnArray
}

const allPassing = (students, passing) => {
  let answer = true
  for (let i = 0; i < students.length; i++) {
    if (!students.grade >= passing) {
      answer = false
    }
  }
  return answer
}

const someonesFavorite = (people, food) => {
    let answer = false
  for (let i = 0; i < people.length; i++) {
    if (people.favoriteFood === food) {
      answer = true
    }
  }
  return answer
}

const strange = (people) => {
  return people.map((n) => n.isStrange)
}

const birthdays = (students) => {
  return students.map((n) => n.birthday)
}

const animals = (animals) => {
  return animals.reduce((n) => Math.max(n.weight))
}

const allStudents = (grades) => {
  return grades.flatMap((n) => n.students)
}

const allComulent = (things) => {
  return things.every((n) => isCromulent(n))
}

const notAllTerrible = (things) => {
  return things.some((n) => isTerrible(n))
}
