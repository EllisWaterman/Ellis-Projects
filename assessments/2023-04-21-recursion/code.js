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

//code below

const factorial = (n) => { // correct
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

const fibonacci = (n) => { // correct
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

const sumSquares = (n) => { // correct
  if (n === 0) {
    return 0
  } else {
    return n ** 2 + sumSquares(n - 1)
  }
}

const maximum = (n) => { // correct
  if (n.length === 0) {
    return -Infinity
  } else {
    return Math.max(n[0], maximum(n.slice(1)))
  }
}

const treeMap = (tree, fn) => { // almost
  let newTree = tree
  if (isLeaf(tree)) {
    return fn(tree)
  } else {
    newTree.left = treeMap(tree.left, fn)
    newTree.right = treeMap(tree.right, fn)
  }
  return newTree
}

const sumPrimesBelow = (n) => { // correct
  if (n === 1) {
    return 0
  } else if (isPrime(n)) {
    return n + sumPrimesBelow(n - 1)
  } else {
    return sumPrimesBelow(n - 1)
  }
}

const nvwls = (s) => { // correct
  if (s.length === 0) {
    return s
  } else if (s[0] === 'a' || s[0] === 'e' || s[0] === 'i' || s[0] === 'o' || s[0] === 'u') {
    return nvwls(s.slice(1))
  } else {
    return s[0] + nvwls(s.slice(1))
  }
}

const caesar = (s, key) => { // correct
  if (s.length === 0) {
    return s
  } else {
    return rotate(s[0],key) + caesar(s.slice(1), key)
  }
}

const toList = (n) => { // correct
  let listFormat = {first : 0, rest: 0}
  if (n.length === 0) {
    return null
  } else {
     listFormat.first = n[0]
     listFormat.rest = toList(n.slice(1))
  }
   return listFormat
}

const map = (list, fn) => { // almost
  let newList = list
  if (newList.rest === null) {
    newList.first = fn(newList.first)
    return newList
  } else {
    newList.first = fn(newList.first)
    newList.rest = map(newList.rest,fn)
  }
  return newList
}
