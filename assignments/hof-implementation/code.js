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
    for (let j = 0; j < array.length; j++) {
      let a = fn(array[i])
      returnArray.push(a[j])
    }
  }
  return returnArray
};

const reduce = (fn, initialValue, array) => {
  for (let i = 0; i < array.length; i++) {
    initialValue = fn(initialValue, array[i])
  }
  return initialValue
};

const every = (predicate, array) => {
  for (let i = 0; i < array.length; i++) {

  }
};

const some = (predicate, array) => {
};
