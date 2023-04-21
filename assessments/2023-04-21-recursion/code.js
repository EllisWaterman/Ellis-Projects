////////////////////////////////////////////////////////////////
// Write your code here ...




////////////////////////////////////////////////////////////////
// Functions you will use in your code. No need to touch these
// or understand these beyond understanding what they do which
// is described in the appropriate questions.

const isLeaf = (o) => typeof o !== 'object' || (!(('left' in o) && ('right' in o)));

const isPrime = (n) => {
  const loop = (f) => f ** 2 > n || (n % f !== 0 && loop(f + 1));
  return n > 1 && loop(2);
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const mod = (n, m) => ((n % m) + m) % m;

const rotate = (char, places) => {
  const lower = char.toLowerCase();
  const i = alphabet.indexOf(lower);
  if (i === -1) {
    return char;
  } else {
    const rotated = alphabet[mod(i + places, alphabet.length)];
    return lower === char ? rotated : rotated.toUpperCase();
  }
}


const factorial = (n) => {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n-1)
  }
}

const fibonacci = (n) => {
  if(n === 0) {
    return 0
  } else if (n === 1) {
    return 1
    }else {
    return fibonacci(n-1) + fibonacci(n-2)
  }
}

const sumSquares = (n) => {
  if(n === 0) {
    return 0
  } else {
    return n**2 + sumSquares(n-1)
  }
}

const maximum = (n) => {
  if(n.length === 0) {
    return -Infinity
  } else {
    return Math.max(n[0], maximum(n.slice(1)))
  }
}

const treeMap = (tree,fn) => {
  let newTree = tree
  if(isLeaf(tree)) {
    return fn(tree)
  } else {
    newTree.left = treeMap(tree.left, fn)
    newTree.right = treeMap(tree.right, fn)
  }
  return newTree
}

const sumPrimesBelow = (n) => {
  if (n === 1) {
    return 1
  } else if(isPrime(n)) {
    return 1 + sumPrimesBelow(n-1)
  } else {
    return sumPrimesBelow(n-1)
  }
}