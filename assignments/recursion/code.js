const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const triangular = (n) => {
  if (n === 0) {
    return 0;
  } else {
    return n + triangular(n - 1);
  }
}

const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

const gcd = (A, B) => {
  if (A === 0) {
    return B
  } else if (B === 0) {
    return A
  } else {
    return gcd(A&B)
  }
}

const sum = (n) => {
  if (n.length === 0) {
    return 0
  } else {
    return sum(n[1])
  }
}