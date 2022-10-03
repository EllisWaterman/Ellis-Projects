// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...
const avarageWeight = (totalWeight, numberOfItems) => {
  return totalWeight / numberOfItems
}
// put values in ()
const hypotenuse = (a, b) => {
  return Math.sqrt(a ** 2 + b ** 2)
}
//plug in a and b value in ()
// ex. hypotenuse(3,4) will return 5

const maxRadius = (width, heightOfDrawingArea) => {
  if (width > heightOfDrawingArea)
    return heightOfDrawingArea / 2
  else
    return width / 2
}

const numCircles = (radius, width) => {
  return width / (radius * 2)
}

const offset = (widthOfArea, widthOfFigure) => {
  return (widthOfArea - widthOfFigure) / 2
}

const canSleepIn = (weekday, vacation) => {
  return !weekday || vacation
}

const canGoToProm = (isSenior, invitedBySenior, promExclusionList) => {
  return isSenior || invitedBySenior && !promExclusionList
}

const getsSpeedingTicket = (mph, grouchyCop) => {
  return mph > 70 || grouchyCop && mph > 65;
}

const moreThanTwiceAsLong = (x, y) => {
  let a = s.length(x)
  let b = s.length(y)
  if (a > b / 2)
    return true
  else
    return false
}

const aFartherThanB = (a, b, c) => {
  //noTime = true
}

const firstHalf = (s) => {
  return s.substring(0, s.length / 2)
}

const secondHalf = (s) => {
  return s.substring(s.length / 2)
}

const upDown = (s) => {
 return s.toUpperCase(0)+s.substring()
}
