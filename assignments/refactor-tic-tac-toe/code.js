// This is a working tic tac toe game. However it is horribly factored
// insofar as there are zero functions defined in this code. Consequently
// there are many instances of duplicated code and thus many opportunities to
// break out useful functions. You should do to this what you did to the
// pie recipes but this time in code.

// A tip: make small changes and keep the thing working. If you break it
// and can't very quickly put it aright, use the Revisions menu to go back
// to the working version and try again. The goal of refactoring is to change
// the structure of the code without changing it's behavior.

// Another tip: sometimes it's easier to identify some duplicate code than
// it is to figure out exactly what it does. It's fine to break it out
// into a function with a not-great name. Later on, you may well figure out
// how it fits together and when you do you can use the Rename symbol feature
// of the editor (on the right-click menu) to change the name of the function
// to something more meaningful.

// Also remember that it can be useful to break out a big chunk of code
// just to give it a name. One clue that that might be a good idea is when
// there's a big chunk of code with a comment explaining what it does.
// Suprisingly often you can just turn the comment into a function name
// and move the chunk of code into the function and replace it with a call
// to the fuction. (Which makse sense because the original author had mentally
// chunked it already and the comment is telling you what it does.)

const boardSize = Math.min(width, height) * 0.75;
const boardLeft = (width - boardSize) / 2;
const boardTop = (height - boardSize) / 2;
const cellSize = boardSize / 3;
const fontSize = boardSize / 3;
const lineEndAdjustment = cellSize * 0.7;

let move = 0;

const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const lines = [
  // Rows
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],

  // Cols
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],

  // Diagonals
  [[0, 0], [1, 1], [2, 2]],
  [[2, 0], [1, 1], [0, 2]],
];

// Draw the board
const x1 = boardLeft + cellSize;
const x2 = boardLeft + 2 * cellSize;
const y1 = boardTop + cellSize;
const y2 = boardTop + 2 * cellSize;;
drawLine(x1, boardTop, x1, boardTop + boardSize, 'grey', 2);
drawLine(x2, boardTop, x2, boardTop + boardSize, 'grey', 2);
drawLine(boardLeft, y1, boardLeft + boardSize, y1, 'grey', 2);
drawLine(boardLeft, y2, boardLeft + boardSize, y2, 'grey', 2);

registerOnclick((x, y) => {

  let winner = null;
  let r;
  let c;

  // Check if there's a winner already.
  for (let i = 0; i < lines.length; i++) {
    r = lines[i][0][0];
    c = lines[i][0][1];
    const m0 = board[r][c];
    r = lines[i][1][0];
    c = lines[i][1][1];
    const m1 = board[r][c];
    r = lines[i][2][0];
    c = lines[i][2][1];
    const m2 = board[r][c];
    if (m0 !== '' && m0 === m1 && m0 === m2) {
      winner = lines[i];
    }
  }

  r = Math.floor((y - boardTop) / cellSize);
  c = Math.floor((x - boardLeft) / cellSize);

  // Only do anything if it's a legal move and the game isn't over.
  if (winner === null && 0 <= r && r < 3 && 0 <= c && c < 3 && board[r][c] === '') {

    // Draw the mark and record the move
    const marker = move % 2 === 0 ? 'X' : 'O';
    const x = boardLeft + c * cellSize + cellSize / 2;
    const y = boardTop + r * cellSize + cellSize / 2;
    const nudge = marker === 'O' ? cellSize / 9 : cellSize / 19;
    drawText(marker, x - (fontSize * 0.3 + nudge), y + fontSize * 0.3, 'black', fontSize);
    board[r][c] = marker;
    move++;

    // Check if there's a winner now
    winner = null;
    for (let i = 0; i < lines.length; i++) {
      r = lines[i][0][0];
      c = lines[i][0][1];
      const m0 = board[r][c];
      r = lines[i][1][0];
      c = lines[i][1][1];
      const m1 = board[r][c];
      r = lines[i][2][0];
      c = lines[i][2][1];
      const m2 = board[r][c];
      if (m0 !== '' && m0 === m1 && m0 === m2) {
        winner = lines[i];
      }
    }
    if (winner !== null) {
      // Draw the line through three in a row
      const [r1, c1] = winner[0];
      const [r2, c2] = winner[winner.length - 1];

      const x1 = boardLeft + c1 * cellSize + cellSize / 2;
      const y1 = boardTop + r1 * cellSize + cellSize / 2;
      const x2 = boardLeft + c2 * cellSize + cellSize / 2;
      const y2 = boardTop + r2 * cellSize + cellSize / 2;

      let adjX1 = x1;
      let adjX2 = x2;
      let adjY1 = y1;
      let adjY2 = y2;

      if (y1 === y2 || x1 !== x2) {
        adjX1 -= lineEndAdjustment;
        adjX2 += lineEndAdjustment;
      }

      if (x1 === x2 || y1 !== y2) {
        const slope = y1 < y2 ? 1 : -1;
        adjY1 -= (slope * lineEndAdjustment);
        adjY2 += (slope * lineEndAdjustment);
      }

      drawLine(adjX1, adjY1, adjX2, adjY2, 'red', 15);
    }
  }
});



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

registerOnclick((x, y) => {
  if (isGameOver) {
    return;
  }
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
});

const endGame = (message) => {
  drawFilledRect(0, 0, width, height, '#000000aa');
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

