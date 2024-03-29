const fruitBowl = [
  {
    name: 'apple',
    colors: ['red', 'green', 'yellow', 'brown'],
    grams: 150,
    grownIn: ['USA', 'China', 'Poland', 'Turkey'],
    tastiness: 8,
    inconvenience: 2,
  },
  {
    name: 'banana',
    colors: ['yellow'],
    grams: 120,
    grownIn: ['Ecuador', 'Costa Rica', 'Colombia', 'Philippines'],
    tastiness: 6,
    inconvenience: 1
  },
  {
    name: 'orange',
    colors: ['orange'],
    grams: 150,
    grownIn: ['Brazil', 'USA', 'Mexico', 'Spain'],
    tastiness: 7,
    inconvenience: 3
  },
  {
    name: 'mango',
    colors: ['yellow', 'orange', 'red'],
    grams: 200,
    grownIn: ['India', 'China', 'Thailand', 'Mexico'],
    tastiness: 9,
    inconvenience: 5
  },
  {
    name: 'pineapple',
    colors: ['brown', 'green', 'yellow'],
    grams: 1000,
    grownIn: ['Costa Rica', 'Philippines', 'Brazil', 'Thailand'],
    tastiness: 7,
    inconvenience: 8,
  },
  {
    name: 'watermelon',
    colors: ['green', 'red'],
    grams: 5000,
    grownIn: ['China', 'Turkey', 'Iran', 'Brazil'],
    tastiness: 6,
    inconvenience: 9
  },
  {
    name: 'peach',
    colors: ['orange', 'yellow'],
    grams: 150,
    grownIn: ['China', 'Spain', 'Italy', 'USA'],
    tastiness: 8,
    inconvenience: 4
  },
  {
    name: 'kiwi',
    colors: ['brown', 'green'],
    grams: 50,
    grownIn: ['New Zealand', 'Italy', 'Chile', 'Greece'],
    tastiness: 7,
    inconvenience: 6
  },
  {
    name: 'grapefruit',
    colors: ['pink', 'red', 'white'],
    grams: 300,
    grownIn: ['USA', 'Mexico', 'China', 'Turkey'],
    tastiness: 5,
    inconvenience: 7,
  },
  {
    name: 'grape',
    colors: ['purple', 'green'],
    grams: 5,
    grownIn: ['Italy', 'China', 'Spain', 'USA'],
    tastiness: 6,
    inconvenience: 2
  },
  {
    name: 'blueberry',
    colors: ['blue'],
    grams: 1,
    grownIn: ['USA', 'Canada', 'Chile', 'Peru'],
    tastiness: 8,
    inconvenience: 3
  },
  {
    name: 'strawberry',
    colors: ['red'],
    grams: 20,
    grownIn: ['USA', 'Spain', 'Mexico', 'Egypt'],
    tastiness: 9,
    inconvenience: 4
  },
  {
    name: 'lemon',
    colors: ['yellow'],
    grams: 60,
    grownIn: ['Spain', 'USA', 'Turkey', 'India'],
    tastiness: 5,
    inconvenience: 6
  }
];

const isTasty = (fruit) => fruit.tastiness >= 5;

const isInconvenient = (fruit) => fruit.inconvenience >= 5;

const redFruits = (fruits) => { // correct
  return fruits.filter((n) => n.colors.includes('red'))
}

const weights = (fruits) => { // correct
  return fruits.map((n) => n.grams)
}

const heaviest = (fruits) => { // correct
  return fruits.reduce((f, n) => {
    return Math.max(f, n.grams)
  }, 0)
}

const allColors = (fruits) => { // correct
  return fruits.flatMap((n) => n.colors)
}

const areAllTasty = (fruits) => { // correct
  return fruits.every((n) => isTasty(n))
}

const notAllInconvenient = (fruits) => { // almost (fixed)
  return fruits.some((n) => !isInconvenient(n))
}

const tasty = (fruits) => { // correct
  let r = []
  for (let i = 0; i < fruits.length; i++) {
    if (isTasty(fruits[i])) {
      r.push(fruits[i])
    }
  }
  return r
}

const names = (fruits) => { // correct
  let r = []
  for (let i = 0; i < fruits.length; i++) {
    r.push(fruits[i].name)
  }
  return r
}

const avarageInconvenince = (fruits) => { // correct
  let r = 0
  for (let i = 0; i < fruits.length; i++) {
    r = r + fruits[i].inconvenience
  }
  return r / fruits.length
}

const allCountries = (fruits) => { // correct
  const r = []
  for (let i = 0; i < fruits.length; i++) {
    const countries = fruits[i].grownIn
    for (let j = 0; j < countries.length; j++) {
      r.push(countries[j])
    }
  }
  return r
};

const allGrownInMoreThanNCountries = (fruits, n) => { // correct
  let answer = true
  for (let i = 0; i < fruits.length; i++) {
    if (!(fruits[i].grownIn.length > n)) {
      answer = false
    }
  }
  return answer
}

const someMoreThanNColors = (fruits, n) => { // correct
  let answer = false
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].colors.length > n) {
      answer = true
    }
  }
  return answer
}
