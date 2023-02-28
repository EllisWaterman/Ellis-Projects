// N.B. Do not use the array methods of the same name to implement these functions!

const filter = (predicate, array) => {
  let returnArray = []
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      returnArray.push(array[i])
    }
  }
  return returnArray
};

const map = (fn, array) => {
  let returnArray = []
  for (let i = 0; i < array.length; i++) {
    returnArray.push(fn(array[i]))
  }
  return returnArray
};

const flatMap = (fn, array) => {
  let returnArray = []
  for (let i = 0; i < array.length; i++) {
    let a = fn(array[i])
    console.log(a)
    returnArray.push(a)
  }
  return returnArray
};

const reduce = (fn, initialValue, array) => {
  let returnArray = []
  for (let i = 0; i < array.length; i++) {
    initialValue = fn(initialValue, array[i])
  }
  return returnArray
};

const every = (predicate, array) => {
};

const some = (predicate, array) => {
};
