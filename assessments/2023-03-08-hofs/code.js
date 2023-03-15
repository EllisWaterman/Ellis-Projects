const evens = (numbers) => { // correct
  let returnArray = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      returnArray.push(numbers[i])
    }
  }
  return returnArray
}

const shouty = (strings) => { // correct
  let returnArray = []
  for (let i = 0; i < strings.length; i++) {
    returnArray.push(strings[i].toUpperCase())
  }
  return returnArray
}

const join = (strings, delimiter) => { // pattern
  for (let i = 0; i < strings.length; i++) {
    if (strings[i] === null) {
      return s;
    } else {
      return strings[i] + delimiter + s;
    }
  }
}

const allSiblings = (students) => { // pattern
  let returnArray = []
  for (let i = 0; i < students.length; i++) {
    returnArray.push(students[i].siblings)
  }
  return returnArray
}

const allPassing = (students, passing) => { // almost
  let answer = true
  for (let i = 0; i < students.length; i++) {
    if (!students.grade >= passing) {
      answer = false
    }
  }
  return answer
}

const someonesFavorite = (people, food) => { // correct
    let answer = false
  for (let i = 0; i < people.length; i++) {
    if (people.favoriteFood === food) {
      answer = true
    }
  }
  return answer
}

const strange = (people) => { // almost
  return people.map((n) => n.isStrange)
}

const birthdays = (students) => { // correct
  return students.map((n) => n.birthday)
}

const animals = (animals) => { // pattern
  return animals.reduce((n) => Math.max(n.weight))
}

const allStudents = (grades) => { // correct
  return grades.flatMap((n) => n.students)
}

const allComulent = (things) => { // correct
  return things.every((n) => isCromulent(n))
}

const notAllTerrible = (things) => { // correct
  return things.some((n) => isTerrible(n))
}
