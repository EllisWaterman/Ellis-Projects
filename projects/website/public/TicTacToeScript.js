import { setCanvas, drawLine, drawText, width, height, drawFilledRect } from './graphics.js';
const canvas = document.getElementById('screen')
setCanvas(canvas);


let clickCount = 0;
let isGameOver = false;
let shape;
let colour;
let size = Math.min(width, height) * 0.3;
let xoffset = width / 3 / 2 - (size / 2);
let yoffset = (height / 3 - 50) / 2;
let xs = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const drawHorizontalWinner = (pos) => {
  let linePosition = height / 3 * pos + (height / 6);
  drawLine(0, linePosition, width, linePosition, colour, 10);
}

const drawVerticalWinner = (pos) => {
  let linePosition = width / 3 * pos + (width / 6);
  drawLine(linePosition, 0, linePosition, height, colour, 10);
}

const drawDiagonalWinner = (pos) => {
  if (pos == 0) {
    drawLine(0, 0, width, height, colour, 10);
  } else {
    drawLine(width, 0, 0, height, colour, 10);
  }
}


const horizontalWinner = () => {
  for (let i = 0; i < 3; i++) {
    if (xs[i][0] !== null) {
      if (xs[i][0] === xs[i][1] && xs[i][0] == xs[i][2]) {
        drawHorizontalWinner(i);
        return xs[i][0];
      }
    }
  }
}

const verticalWinner = () => {
  for (let i = 0; i < 3; i++) {
    if (xs[0][i] !== null) {
      if (xs[0][i] === xs[1][i] && xs[0][i] == xs[2][i]) {
        drawVerticalWinner(i);
        return xs[0][i];
      }
    }
  }
}
const diagonalWinner = () => {
  if (xs[0][0] === xs[1][1] && xs[0][0] === xs[2][2] && xs[0][0] !== null) {
    drawDiagonalWinner(0);
    return xs[0][0];
  }
  if (xs[0][2] === xs[1][1] && xs[0][2] === xs[2][0] && xs[0][2] !== null) {
    drawDiagonalWinner(1);
    return xs[0][2];
  }
}


const winner = () => {
  return horizontalWinner() || verticalWinner() || diagonalWinner();
}

canvas.onclick= (e) =>{
    const {offsetX,offsetY} = e;
    let x = offsetX
    let y = offsetY
  if (isGameOver) {
    return;
  }
  console.log(x,y);
  console.log(e)

  let col = Math.floor(x / width * 3);
  let row = Math.floor(y / height * 3);
  if (xs[row][col] != null) {
    return;
  }
  clickCount++;

  if (clickCount % 2 === 0) {
    shape = 'O'
    colour = 'blue'
  } else {
    shape = 'X'
    colour = 'red'
  }
  drawText(shape,
    col * (width / 3) + xoffset, (row + 1) * (height / 3) - yoffset, colour, size);
  xs[row][col] = shape;
  if (winner() != null) {
    endGame(shape + ' WINS');
  }
  else if (clickCount == 9) {
    endGame('DRAW');
  }
};

const endGame = (message) => {
  drawText(message, width / 4, height / 2, colour, size);
  isGameOver = true;
}

const drawFrame = () => {
  drawLine(width / 3, height, width / 3, 0, 'black', 10)
  drawLine(width / 3 * 2, height, width / 3 * 2, 0, 'black', 10)
  drawLine(width, height / 3, 0, height / 3, 'black', 10)
  drawLine(width, height / 3 * 2, 0, height / 3 * 2, 'black', 10)
}
drawFrame();
