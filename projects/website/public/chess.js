import {
  setCanvas,
  drawFilledRect,
  drawText,
  clear,
  drawRect,
  height,
} from "./graphics.js";
const canvas = document.getElementById("screen");
setCanvas(canvas);
// const im I= document.createElement('img')
// im.setAttribute('src', 'https://www.shutterstock.com/image-vector/pawn-chess-icon-soldier-modern-260nw-1662529951.jpg')
// const pieceImages = [{ king: imgKing, queen: imgQueen, pawn: imgPawn }]
const WHITE_KING = "♔";
const WHITE_QUEEN = "♕";
const WHITE_ROOK = "♖";
const WHITE_BISHOP = "♗";
const WHITE_KNIGHT = "♘";
const WHITE_PAWN = "♙";
const BLACK_KING = "♚";
const BLACK_QUEEN = "♛";
const BLACK_ROOK = "♜";
const BLACK_BISHOP = "♝";
const BLACK_KNIGHT = "♞";
const BLACK_PAWN = "♟";
const SQUARE_SIZE = 62.5;

class Pawn {
  constructor(color, col) {
    this.team = color;
    this.col = col;
    this.moves = 0;
    this.kind = "pawn";
    if (color === "black") {
      this.row = 1;
      this.icon = BLACK_PAWN;
    } else {
      this.row = 6;
      this.icon = WHITE_PAWN;
    }
  }
  pawnCaptureIsLegal(col, row) {
    const pawnDirection = this.icon === WHITE_PAWN ? -1 : 1;
    if (
      (row === this.row + pawnDirection && col === this.col + 1) ||
      (row === this.row + pawnDirection && col === this.col - 1)
    ) {
      if (row === 7 || row === 0) {
        promotePawn(this);
      }
      return true;
    }
  };
  
  moveIsLegal(col, row) {
    if(board[col][row] !== 0) {
      console.log(board[col][row])
      return pawnCaptureIsLegal(col,row)
    }
    else {
    const pawnDirection = this.icon === WHITE_PAWN ? -1 : 1;
    if (this.moves === 0) {
      if (
        col === this.col &&
        (row === this.row + pawnDirection ||
          row === this.row + pawnDirection * 2)
      ) {
        this.moves++;
        if (row === 7 || row === 0) {
          promotePawn(this);
        }
        return true;
      }
    } else if (col === this.col && row === this.row + pawnDirection) {
      this.moves++;
      if (row === 7 || row === 0) {
        promotePawn(this);
      }
      return true;
    } else {
      return false;
    }
  }
}
}

class Rook {
  constructor(color, row, col) {
    this.row = row;
    this.col = col;
    this.team = color;
    this.kind = "rook";
    if (color === "black") {
      this.icon = BLACK_ROOK;
    } else {
      this.icon = WHITE_ROOK;
    }
  }
  moveIsLegal(col, row) {
    return (
      (col === this.col || row === this.row) &&
      !rookMoveIsBlocked(this.col, this.row, col, row)
    );
  }
}

class Knight {
  constructor(color, row, col) {
    this.row = row;
    this.col = col;
    this.team = color;
    this.kind = "knight";
    if (color === "black") {
      this.icon = BLACK_KNIGHT;
    } else {
      this.icon = WHITE_KNIGHT;
    }
  }
  moveIsLegal(col, row) {
    return (
      (row === this.row + 1 && col === this.col + 2) ||
      (row === this.row - 1 && col === this.col - 2) ||
      (row === this.row + 1 && col === this.col - 2) ||
      (row === this.row - 1 && col === this.col + 2) ||
      (row === this.row + 2 && col === this.col + 1) ||
      (row === this.row + 2 && col === this.col - 1) ||
      (row === this.row - 2 && col === this.col + 1) ||
      (row === this.row - 2 && col === this.col - 1)
    );
  }
}

class Bishop {
  constructor(color, row, col) {
    this.row = row;
    this.col = col;
    this.team = color;
    this.kind = "bishop";
    if (color === "black") {
      this.icon = BLACK_BISHOP;
    } else {
      this.icon = WHITE_BISHOP;
    }
  }
  
  moveIsLegal(col, row) {
    return (
      Math.abs(col - this.col) === Math.abs(row - this.row) &&
      !bishopMoveIsBlocked(this, this.col, this.row, col, row)
    );
  }
}

class King {
  constructor(color, row, col) {
    this.row = row;
    this.col = col;
    this.team = color;
    this.kind = "king";
    if (color === "black") {
      this.icon = BLACK_KING;
    } else {
      this.icon = WHITE_KING;
    }
  }
  moveIsLegal(col, row) {
    return (
      (row === this.row + 1 && col === this.col) ||
      (row === this.row - 1 && col === this.col) ||
      (col === this.col - 1 && row === this.row) ||
      (col === this.col + 1 && row === this.row) ||
      (col === this.col + 1 && row === this.row + 1) ||
      (col === this.col - 1 && row === this.row - 1) ||
      (col === this.col + 1 && row === this.row - 1) ||
      (col === this.col - 1 && row === this.row + 1)
    );
  }
}

class Queen {
  constructor(team, row, col) {
    this.row = row;
    this.col = col;
    this.team = team;
    this.kind = "queen";
    if (team === "black") {
      this.icon = BLACK_QUEEN;
    } else {
      this.icon = WHITE_QUEEN;
    }
  }
  moveIsLegal(col, row) {
    if (col === this.col || row === this.row) {
     return rookMoveIsLegal(this, col, row);
    } else return bishopMoveIsLegal(this, col, row);
  }
}

// Example of drawing one of the pieces
let gameStatus = "ONGOING";
const MakeStartingPieces = () => {
  return [
    new King("white", 7, 4),
    new Knight("white", 7, 6),
    new Knight("white", 7, 1),
    new Bishop("white", 7, 2),
    new Bishop("white", 7, 5),
    new Rook("white", 7, 0),
    new Rook("white", 7, 7),
    new Queen("white", 7, 3),
    new Pawn("white", 0),
    new Pawn("white", 1),
    new Pawn("white", 2),
    new Pawn("white", 3),
    new Pawn("white", 4),
    new Pawn("white", 5),
    new Pawn("white", 6),
    new Pawn("white", 7),
    new King("black", 0, 4),
    new Knight("black", 0, 6),
    new Knight("black", 0, 1),
    new Bishop("black", 0, 2),
    new Bishop("black", 0, 5),
    new Rook("black", 0, 0),
    new Rook("black", 0, 7),
    new Queen("black", 0, 3),
    new Pawn("black", 0),
    new Pawn("black", 1),
    new Pawn("black", 2),
    new Pawn("black", 3),
    new Pawn("black", 4),
    new Pawn("black", 5),
    new Pawn("black", 6),
    new Pawn("black", 7),
  ];
};
console.log(MakeStartingPieces());

let pieces = MakeStartingPieces();
let pieceSelected = null;
let turn = "white";

const drawBoard = () => {
  let colsize = 8;
  let rowsize = 8;
  for (let rows = 0; rows < rowsize; rows++) {
    for (let cols = 0; cols < colsize + 1; cols++) {
      let color = cols % 2 === 0 ? "#C4A484" : "white";
      drawFilledRect(
        rows * SQUARE_SIZE,
        cols * SQUARE_SIZE - SQUARE_SIZE * (rows % 2 === 0 ? 0 : 1),
        SQUARE_SIZE,
        SQUARE_SIZE,
        color
      );
    }
  }
};

const placePiece = (piece) => {
  drawPiece(piece.icon, piece.col, piece.row);
  board[piece.col][piece.row] = piece;
};

let board = new Array(8).fill(0).map(() => new Array(8).fill(0));

const drawPiece = (icon, col, row, color = "black") => {
  let displacement = 3;
  drawText(
    icon,
    col * SQUARE_SIZE + displacement,
    row * SQUARE_SIZE + SQUARE_SIZE - displacement,
    color,
    SQUARE_SIZE
  );
};

const highlightPeice = (icon, col, row, color) => {
  emptySpace(pieceSelected);
  drawPiece(icon, col, row, color);
};
const placePieces = () => {
  pieces.forEach(placePiece);
};
const emptySpace = (piece) => {
  let color = (piece.col + piece.row) % 2 === 0 ? "#C4A484" : "white";
  drawFilledRect(
    piece.col * SQUARE_SIZE,
    piece.row * SQUARE_SIZE,
    SQUARE_SIZE,
    SQUARE_SIZE,
    color
  );
};

const movePiece = (selected, row, col) => {
  emptySpace(selected);
  board[selected.col][selected.row] = 0;
  selected.row = row;
  selected.col = col;
  board[col][row] = selected;
  pieceSelected = null;
  emptySpace(selected);
  drawPiece(selected.icon, col, row);
  // if (turn === 'white') {
  //     turn = 'black'
  // } else {
  //     turn = 'white'
  // }
};

const capturePiece = (selected, row, col) => {
  console.log(board[col][row]);
  if (board[col][row].kind === "king") {
    console.log("GAME ENDED");
    return endTheGame(board[col][row].team);
  }
  emptySpace(selected);
  board[selected.col][selected.row] = 0;
  selected.row = row;
  selected.col = col;
  board[col][row] = selected;
  pieceSelected = null;
  emptySpace(selected);
  drawPiece(selected.icon, col, row);
  // if (turn === 'white') {
  //     turn = 'black'
  // } else {
  //     turn = 'white'
  // }
};

const endTheGame = (KingColor) => {
  gameStatus = "ENDED";
  // has a "play again button or a exit button"
  if (KingColor === "black") {
    console.log("White Wins");
    drawFilledRect(0, 0, canvas.width, canvas.height, "White");
    drawText("White Wins!", canvas.width / 3, canvas.height / 2, "Black", 50);
    drawText(
      "Click Anywhere To Play Again",
      canvas.width / 4,
      canvas.height / 1.3,
      "Black",
      30
    );
  } else {
    drawFilledRect(0, 0, canvas.width, canvas.height, "Black");
    drawText("Black Wins!", canvas.width / 3, canvas.height / 3, "White", 50);
    drawText(
      "Click Anywhere To Play Again",
      canvas.width / 4,
      canvas.height / 1.3,
      "White",
      30
    );

    console.log("Black Wins");
  }
};

const pawnMoveIsLegal = (piece, col, row) => {
  const pawnDirection = piece.icon === WHITE_PAWN ? -1 : 1;
  if (piece.moves === 0) {
    if (
      col === piece.col &&
      (row === piece.row + pawnDirection ||
        row === piece.row + pawnDirection * 2)
    ) {
      piece.moves++;
      if (row === 7 || row === 0) {
        promotePawn(piece);
      }
      return true;
    }
  } else if (col === piece.col && row === piece.row + pawnDirection) {
    piece.moves++;
    if (row === 7 || row === 0) {
      promotePawn(piece);
    }
    return true;
  } else {
    return false;
  }
};
const pawnCaptureIsLegal = (piece, col, row) => {
  const pawnDirection = piece.icon === WHITE_PAWN ? -1 : 1;
  if (
    (row === piece.row + pawnDirection && col === piece.col + 1) ||
    (row === piece.row + pawnDirection && col === piece.col - 1)
  ) {
    if (row === 7 || row === 0) {
      promotePawn(piece);
    }
    return true;
  }
};

const promotePawn = (piece) => {
  if (piece.icon === WHITE_PAWN) {
    new Queen("white", piece.row, piece.col);
  } else {
    new Queen("white", piece.row, piece.col);
  }
};
const rookMoveIsBlocked = (srcCol, srcRow, dstCol, dstRow) => {
  const dr = Math.sign(dstRow - srcRow);
  const dc = Math.sign(dstCol - srcCol);

  let r = srcRow + dr;
  let c = srcCol + dc;

  while (r !== dstRow || c !== dstCol) {
    if (board[c][r] !== 0) return true;
    r += dr;
    c += dc;
  }
  return false;
};

const bishopMoveIsBlocked = (srcCol, srcRow, dstCol, dstRow) => {
  if (srcCol < dstCol && srcRow > dstRow) {
    let col = srcCol + 1;
    let row = srcRow - 1;
    for (let i = dstCol - srcCol - 1; i > 0; i--) {
      if (board[col][row] !== 0) return true;
      col++;
      row--;
    }
  } else if (srcCol > dstCol && srcRow < dstRow) {
    let col = srcCol - 1;
    let row = srcRow + 1;
    for (let i = srcCol - dstCol; i > 0; i--) {
      if (board[col][row] !== 0) return true;
      col--;
      row++;
    }
  } else if (srcCol > dstCol && srcRow > dstRow) {
    let col = srcCol - 1;
    let row = srcRow - 1;
    for (let i = srcCol - dstCol; i > 0; i--) {
      if (board[col][row] !== 0) return true;
      col--;
      row--;
    }
  } else if (srcCol < dstCol && srcRow < dstRow) {
    let col = srcCol + 1;
    let row = srcRow + 1;
    for (let i = dstCol - srcCol - 1; i > 0; i--) {
      if (board[col][row] !== 0) return true;
      col++;
      row++;
    }
  }
  return false;
};



const rookMoveIsLegal = (piece, col, row) => {
  return (
    (col === piece.col || row === piece.row) &&
    !rookMoveIsBlocked(piece.col, piece.row, col, row)
  );
};

const bishopMoveIsLegal = (piece, col, row) => {
  return (
    Math.abs(col - piece.col) === Math.abs(row - piece.row) &&
    !bishopMoveIsBlocked(piece, piece.col, piece.row, col, row)
  );
};


const moveIsLegal = (piece, col, row) => {
  return piece.moveIsLegal(col, row);
};

const checkIfCheck = (piece) => {
  if (piece.kind === "rook") {
    return checkIfRookCheck(piece);
  }
  //return if( an enemey piece can see your king) {
  //}
};
drawBoard();
placePieces();

canvas.onclick = (e) => {
  const { offsetX, offsetY } = e;
  let x = offsetX;
  let y = offsetY;
  let col = Math.floor(x / SQUARE_SIZE);
  let row = Math.floor(y / SQUARE_SIZE);
  if (gameStatus === "ONGOING") {
    if (pieceSelected === null) {
      if (board[col][row] !== 0 /* && board[col][row].team === turn*/) {
        pieceSelected = board[col][row];
        highlightPeice(pieceSelected.icon, col, row, "blue");
      }
    } else {
      if (board[col][row] === 0) {
        if (moveIsLegal(pieceSelected, col, row)) {
          movePiece(pieceSelected, row, col);
        }
        return;
      }
      if (pieceSelected.team !== board[col][row].team) {
        if (moveIsLegal(pieceSelected, col, row)) {
          capturePiece(pieceSelected, row, col);
        }
        return;
      }
      if (board[col][row] === pieceSelected) {
        highlightPeice(pieceSelected.icon, col, row, "black");
        pieceSelected = null;
        return;
      }
    }
  } else if ((gameStatus = "ENDED")) {
    board = new Array(8).fill(0).map(() => new Array(8).fill(0));
    clear();
    pieces = MakeStartingPieces();

    pieceSelected = null;
    drawBoard();
    placePieces();
    gameStatus = "ONGOING";
  }
};

// make the a1 square actually 1,1 in row and col
// Show the legal moves of a peice when it is selected
// checks and checkmates
// make a home screen
// make a chess engine that plays a random move
