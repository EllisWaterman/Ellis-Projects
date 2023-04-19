const add = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return 1 + add(a, b - 1);
  }
};

const multiply = (a, b) => {
  if (b === 0) {
    return 0
  } else {
    return a + multiply(a, b - 1)
  }
}

const double = (a, b) => {
  if (b === 0) {
    return a
  } else {
    return double(a * 2, b - 1)
  }
}

const triple = (a, b) => {
  if (b === 0) {
    return a
  } else {
    return triple(a * 3, b - 1)
  }
}
const maximum = (n) => {
  if (n.length === 0) {
    return -Infinity
  } else {
    return Math.max(n[0], maximum(n.slice(1)))
  }
}

const power = (number, exponent) => {
  if (exponent === 0) {
    return 0
  }else {
    return number * power(number, exponent-1)
  }
}
