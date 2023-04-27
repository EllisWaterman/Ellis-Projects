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

class pawn {
  constructor(color, col) {
    this.team = color;
    this.col = col;
    this.moves = 0
    this.kind = 'pawn'
    if (color === "black") {
      this.row = 1;
      this.icon = BLACK_PAWN;
    } else {
      this.row = 6;
      this.icon = WHITE_PAWN;
    }
  }
  isMoveLegal = (piece,col,row) => {
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
}

class rook {

}

class knight {

}

class bishop {
 
}

class king {

}

class king {
 
}

// Example of drawing one of the pieces
let gameStatus = "ONGOING";
const MakeStartingPieces = () => {
  return [
  { team: "white", kind: "king", icon: WHITE_KING, row: 7, col: 4 },
  { team: "white", kind: "knight", icon: WHITE_KNIGHT, row: 7, col: 6 },
  { team: "white", kind: "knight", icon: WHITE_KNIGHT, row: 7, col: 1 },
  { team: "white", kind: "bishop", icon: WHITE_BISHOP, row: 7, col: 2 },
  { team: "white", kind: "bishop", icon: WHITE_BISHOP, row: 7, col: 5 },
  { team: "white", kind: "rook", icon: WHITE_ROOK, row: 7, col: 0 },
  { team: "white", kind: "rook", icon: WHITE_ROOK, row: 7, col: 7 },
  { team: "white", kind: "queen", icon: WHITE_QUEEN, row: 7, col: 3 },
  { team: "white", kind: "pawn", icon: WHITE_PAWN, row: 6, col: 0, moves: 0 },
  { team: "white", kind: "pawn", icon: WHITE_PAWN, row: 6, col: 1, moves: 0 },
  { team: "white", kind: "pawn", icon: WHITE_PAWN, row: 6, col: 2, moves: 0 },
  { team: "white", kind: "pawn", icon: WHITE_PAWN, row: 6, col: 3, moves: 0 },
  { team: "white", kind: "pawn", icon: WHITE_PAWN, row: 6, col: 4, moves: 0 },
  { team: "white", kind: "pawn", icon: WHITE_PAWN, row: 6, col: 5, moves: 0 },
  { team: "white", kind: "pawn", icon: WHITE_PAWN, row: 6, col: 6, moves: 0 },
  { team: "white", kind: "pawn", icon: WHITE_PAWN, row: 6, col: 7, moves: 0 },
  { team: "black", kind: "king", icon: BLACK_KING, row: 0, col: 4 },
  { team: "black", kind: "knight", icon: BLACK_KNIGHT, row: 0, col: 6 },
  { team: "black", kind: "knight", icon: BLACK_KNIGHT, row: 0, col: 1 },
  { team: "black", kind: "bishop", icon: BLACK_BISHOP, row: 0, col: 2 },
  { team: "black", kind: "bishop", icon: BLACK_BISHOP, row: 0, col: 5 },
  { team: "black", kind: "rook", icon: BLACK_ROOK, row: 0, col: 0 },
  { team: "black", kind: "rook", icon: BLACK_ROOK, row: 0, col: 7 },
  { team: "black", kind: "queen", icon: BLACK_QUEEN, row: 0, col: 3 },
  new pawn('black', 0),
  new pawn('black', 1),
  new pawn('black', 2), 
  new pawn('black', 3),
  new pawn('black', 4),
  new pawn('black', 5),
  new pawn('black', 6),
  new pawn('black', 7),
];
}
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
    piece.icon = WHITE_QUEEN;
    piece.kind = "queen";
  } else {
    piece.icon = BLACK_QUEEN;
    piece.kind = "queen";
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

const queenMoveIsBlocked = (srcCol, srcRow, dstCol, dstRow) => {
  if (srcCol === dstCol || srcRow === dstRow) {
    return rookMoveIsBlocked(srcCol, srcRow, dstCol, dstRow);
  } else return bishopMoveIsBlocked(srcCol, srcRow, dstCol, dstRow);
};
const isMoveBlocked = (piece, srcCol, srcRow, dstCol, dstRow) => {
  if (piece.kind === "rook") {
    return rookMoveIsBlocked(srcCol, srcRow, dstCol, dstRow);
  } else if (piece.kind === "bishop") {
    return bishopMoveIsBlocked(srcCol, srcRow, dstCol, dstRow);
  } else if (piece.kind === "queen") {
    return queenMoveIsBlocked(srcCol, srcRow, dstCol, dstRow);
  } else return false;
};
const rookMoveIsLegal = (piece, col, row) => {
  return (
    (col === piece.col || row === piece.row) &&
    !isMoveBlocked(piece, piece.col, piece.row, col, row)
  );
};

const bishopMoveIsLegal = (piece, col, row) => {
  return (
    Math.abs(col - piece.col) === Math.abs(row - piece.row) &&
    !isMoveBlocked(piece, piece.col, piece.row, col, row)
  );
};

const queenMoveIsLegal = (piece, col, row) => {
  if (col === piece.col || row === piece.row) {
    return rookMoveIsLegal(piece, col, row);
  } else return bishopMoveIsLegal(piece, col, row);
};

const kingMoveIsLegal = (piece, col, row) => {
  return (
    (row === piece.row + 1 && col === piece.col) ||
    (row === piece.row - 1 && col === piece.col) ||
    (col === piece.col - 1 && row === piece.row) ||
    (col === piece.col + 1 && row === piece.row) ||
    (col === piece.col + 1 && row === piece.row + 1) ||
    (col === piece.col - 1 && row === piece.row - 1) ||
    (col === piece.col + 1 && row === piece.row - 1) ||
    (col === piece.col - 1 && row === piece.row + 1)
  );
};

const knightMoveIsLegal = (piece, col, row) => {
  return (
    (row === piece.row + 1 && col === piece.col + 2) ||
    (row === piece.row - 1 && col === piece.col - 2) ||
    (row === piece.row + 1 && col === piece.col - 2) ||
    (row === piece.row - 1 && col === piece.col + 2) ||
    (row === piece.row + 2 && col === piece.col + 1) ||
    (row === piece.row + 2 && col === piece.col - 1) ||
    (row === piece.row - 2 && col === piece.col + 1) ||
    (row === piece.row - 2 && col === piece.col - 1)
  );
};
const moveIsLegal = (piece, col, row) => {
  if (
    piece.kind === "pawn" &&
    board[col][row] !== 0 &&
    board[col][row].team !== piece.team
  ) {
    return pawnCaptureIsLegal(piece, col, row);
  } else if (piece.kind === "pawn") {
    return pawn.isMoveLegal(piece, col, row);
  } else if (piece.kind === "rook") {
    return rookMoveIsLegal(piece, col, row);
  } else if (piece.kind === "bishop") {
    return bishopMoveIsLegal(piece, col, row);
  } else if (piece.kind === "queen") {
    return queenMoveIsLegal(piece, col, row);
  } else if (piece.kind === "king") {
    return kingMoveIsLegal(piece, col, row);
  } else if (piece.kind === "knight") {
    return knightMoveIsLegal(piece, col, row);
  }
  return false;
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
