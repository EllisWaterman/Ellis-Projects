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
  if (B === 0) {
    return A
  } else {
    return gcd(B, A % B)
  }
}

const sum = (n) => {
  if (n.length === 0) {
    return 0
  } else {
    return n[0] + sum(n.splice(1))
  }
}

const search = (n, number) => {
  if (n.length === 0) {
    return false
  } else {
  if (n[0] === number) {
    return true
  }
    return search(n.splice(1), number) 
  }
}

const reverseString = (n) => {
  if(n.length === 0) {
    return ''
   } else {
     return n.substring(n.length-1) + reverseString(n.substring(n.length-1))
   }
}
