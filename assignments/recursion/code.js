const factorial = (n) => {
  if (n == 0) { 
    return 1
  } else {
    return n * factorial(n-1)
  }
}

const triangular = (n) => {
  if (n == 0) { 
    return 0
  } else {
    return n + triangular(n-1)
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

const gcd = (a, b) => {
  if (b === 0) {
    return a
  } else {
    return gcd(b, a % b)
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
    return search(n.slice(1), number)
  }
}

const reverseString = (n) => {
  if (n.length === 0) {
    return ''
  } else {
    return n.substring(n.length - 1) + reverseString((n.slice(0, -1)))
  }
}

const treeMap = (tree, treeFunction) => {
  let newTree = {}
  if (isLeaf(tree)) {
    return treeFunction(tree)
  } else {
    newTree.left = treeMap(tree.left, treeFunction)
    newTree.right = treeMap(tree.right, treeFunction)
  }
  return newTree
}

const change = (money, coinArray) => {
  let result = 0
  if (money === 0) {
    return 1
  } else if (coinArray.length === 0){
    return 0
  }else {
    if(Number.isInteger(money / coinArray[0])) {
      result++
    }
  }
  return result
}