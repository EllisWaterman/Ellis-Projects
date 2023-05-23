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
  }
  checkIfCheck() {
    let opposingKing;
    if (this.team === "white") {
      opposingKing = BLACK_KING;
    } else {
      opposingKing = WHITE_KING;
    }
    const pawnDirection = this.icon === WHITE_PAWN ? -1 : 1;
    if (
      (isSquareOnBoard(this.col + 1, this.row + pawnDirection) &&
        board[this.col + 1][this.row + pawnDirection].icon === opposingKing) ||
      (isSquareOnBoard(this.col - 1, this.row + pawnDirection) &&
        board[this.col - 1][this.row + pawnDirection].icon === opposingKing)
    ) {
      return { isCheck: true, opposingKing: opposingKing };
    } else {
      return { isCheck: false, opposingKing: opposingKing };
    }
  }
  moveIsLegal(col, row) {
    if (board[col][row] !== 0) {
      return this.pawnCaptureIsLegal(col, row);
    } else {
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
  checkIfCheck() {
    let possibleCheckedKing = 0;
    let opposingKing;
    if (this.team === "white") {
      opposingKing = BLACK_KING;
    } else {
      opposingKing = WHITE_KING;
    }
    let targetCol = board[this.col];
    let targetRow = [];
    for (let i = 0; i < 8; i++) {
      targetRow.push(board[i][this.row]);
    }
    possibleCheckedKing =
      findKing(targetCol, opposingKing, possibleCheckedKing) ||
      findKing(targetRow, opposingKing, possibleCheckedKing);
    if (possibleCheckedKing) {
      if (
        !rookMoveIsBlocked(
          this.col,
          this.row,
          possibleCheckedKing.col,
          possibleCheckedKing.row
        )
      ) {
        return { isCheck: true, opposingKing: opposingKing };
      }
    }
    return { isCheck: false, opposingKing: opposingKing };
  }
  //should work if the rook can see through peices.
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
    let colChange = Math.abs(col - this.col);
    let rowChange = Math.abs(row - this.row);
    return (
      (rowChange === 1 && colChange === 2) ||
      (rowChange === 2 && colChange === 1)
    );
  }
  checkIfCheck() {
    let opposingKing;
    if (this.team === "white") {
      opposingKing = BLACK_KING;
    } else {
      opposingKing = WHITE_KING;
    }

    if (
      getPiece(this.col + 1, this.row + 2) === opposingKing ||
      getPiece(this.col - 1, this.row - 2) === opposingKing ||
      getPiece(this.col + 1, this.row - 2) === opposingKing ||
      getPiece(this.col - 1, this.row + 2) === opposingKing ||
      getPiece(this.col + 2, this.row + 1) === opposingKing ||
      getPiece(this.col + 2, this.row - 1) === opposingKing ||
      getPiece(this.col - 2, this.row + 1) === opposingKing ||
      getPiece(this.col - 2, this.row - 1) === opposingKing
    ) {
      return { isCheck: true, opposingKing: opposingKing };
    } else {
      return { isCheck: false, opposingKing: opposingKing };
    }
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
  checkIfCheck() {
    let possibleCheckedKing = 0;
    let targetUpRight = [];
    let targetDownRight = [];
    let targetUpLeft = [];
    let targetDownLeft = [];
    for (let i = 0; i < 0; i++)
      possibleCheckedKing =
        findKing(targetDownRight) ||
        findKing(targetUpRight) ||
        findKing(targetDownLeft) ||
        findKing(targetUpLeft);
    return bishopMoveIsBlocked(
      this.col,
      this.row,
      possibleCheckedKing.col,
      possibleCheckedKing.row
    );
  }

  moveIsLegal(col, row) {
    let stmt1 = Math.abs(col - this.col) === Math.abs(row - this.row);
    let stmt2 = bishopMoveIsBlocked(this.col, this.row, col, row);
    //console.log("stmt1: " + stmt1);
    //console.log("stmt2: " + stmt2);
    return stmt1 && !stmt2;
  }
}

const findKing = (kingArray, opposingKing, possibleCheckedKing) => {
  kingArray.forEach((element) => {
    if (element.icon === opposingKing) {
      possibleCheckedKing = element;
    }
  });
  return possibleCheckedKing;
};

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
const whiteKing = new King("white", 7, 4);
const blackKing = new King("black", 0, 4);
// Example of drawing one of the pieces
let gameStatus = "ONGOING";
const MakeStartingPieces = () => {
  return [
    whiteKing,
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
    blackKing,
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
//console.log(MakeStartingPieces());

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

const isSquareOnBoard = (col, row) => {
  return col < 7 && col >= 0 && row < 7 && row >= 0;
};

const getPiece = (col, row) => {
  if (isSquareOnBoard(col, row) && board[col][row] !== 0) {
    return board[col][row].icon;
  }
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
  if (turn === "white") {
    turn = "black";
  } else {
    turn = "white";
  }
  console.log(selected.checkIfCheck());
};

const capturePiece = (selected, row, col) => {
  //console.log(board[col][row]);
  if (board[col][row].kind === "king") {
    //console.log("GAME ENDED");
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
  if (turn === "white") {
    turn = "black";
  } else {
    turn = "white";
  }
  console.log(selected.checkIfCheck());
};

const endTheGame = (KingColor) => {
  gameStatus = "ENDED";
  if (KingColor === "black") {
    //console.log("White Wins");
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

    // console.log("Black Wins");
  }
};

const promotePawn = (piece) => {
  if (piece.icon === WHITE_PAWN) {
    board[piece.col][piece.row] = new Queen("white", piece.row, piece.col);
  } else {
    board[piece.col][piece.row] = new Queen("black", piece.row, piece.col);
  }
};
const rookMoveIsBlocked = (srcCol, srcRow, dstCol, dstRow) => {
  const dr = Math.sign(dstRow - srcRow);
  const dc = Math.sign(dstCol - srcCol);

  let r = srcRow + dr;
  let c = srcCol + dc;

  while (r !== dstRow || c !== dstCol) {
    if (board[c][r] !== 0) {
      return true;
    }
    r += dr;
    c += dc;
  }
  return false;
};

const bishopMoveIsBlocked = (srcCol, srcRow, dstCol, dstRow) => {
  //console.log('Starting Col ' + srcCol, 'Srarting Row ' + srcRow, 'End Col ' + dstCol, 'End Row ' + dstRow)
  if (srcCol < dstCol && srcRow > dstRow) {
    let col = srcCol + 1;
    let row = srcRow - 1;
    for (let i = dstCol - srcCol - 1; i > 0; i--) {
      //console.log('check square' + i)
      if (board[col][row] !== 0) return true;
      col++;
      row--;
    }
  } else if (srcCol > dstCol && srcRow < dstRow) {
    let col = srcCol - 1;
    let row = srcRow + 1;
    for (let i = srcCol - dstCol - 1; i > 0; i--) {
      //console.log('check square' + i)
      if (board[col][row] !== 0) return true;
      col--;
      row++;
    }
  } else if (srcCol > dstCol && srcRow > dstRow) {
    let col = srcCol - 1;
    let row = srcRow - 1;
    for (let i = srcCol - dstCol - 1; i > 0; i--) {
      // console.log('check square' + i)
      if (board[col][row] !== 0) return true;
      col--;
      row--;
    }
  } else if (srcCol < dstCol && srcRow < dstRow) {
    let col = srcCol + 1;
    let row = srcRow + 1;
    for (let i = dstCol - srcCol - 1; i > 0; i--) {
      //console.log('check square' + i)
      if (board[col][row] !== 0) return true;
      col++;
      row++;
    }
  }
  //console.log("false");
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

const isCurrentKingInCheck = (currentKing) => {};
drawBoard();
placePieces();

const isCheck = () => {
  let opposingKing;
  let isCheck = false;
  let currentPossibleChecks = [];
  board.forEach((element) => {
    element.forEach((element1) => {
      if (
        element1.kind === "rook" ||
        element1.kind === "pawn" ||
        element1.kind === "knight"
      ) {
        currentPossibleChecks.push(element1);
      }
    });
  });
  currentPossibleChecks.forEach((element) => {
    if (element.checkIfCheck().isCheck) {
      isCheck = true;
      opposingKing = element.checkIfCheck().opposingKing;
    }
  });
  console.log(isCheck, opposingKing);
  if (isCheck === true) {
    return opposingKing;
  }
};

const isCheckMate = () => {
  let squaresToCheck = []
  let king = turn === "white" ? blackKing : whiteKing;
  if (isCheck() === king) {
    squaresToCheck.push(board[king.col][king.row+1],
      board[king.col][king.row-1],
      board[king.col-1][king.row],
      board[king.col+1][king.row],
      board[king.col+1][king.row+1],
      board[king.col-1][king.row-1],
      board[king.col+1][king.row-1],
      board[king.col-1][king.row+1],)
  }
  return squaresToCheck
};
canvas.onclick = (e) => {
  const { offsetX, offsetY } = e;
  let x = offsetX;
  let y = offsetY;
  let col = Math.floor(x / SQUARE_SIZE);
  let row = Math.floor(y / SQUARE_SIZE);
  if (gameStatus === "ONGOING") {
    if (pieceSelected === null) {
      if (board[col][row] !== 0 && board[col][row].team === turn) {
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

const checkifCheckButton = document.querySelector(".checkButton");
checkifCheckButton.onclick = (e) => {
  isCheck();
  console.log(isCheckMate());
};
//TO DO LIST (not in any order)
// make the a1 square actually 1,1 in row and col
// Show the legal moves of a peice when it is selected
//promotion
// checks and checkmates
//checkButton
//castling and en passant
// make a home screen
// make a chess engine that plays a random move (do last obv)
