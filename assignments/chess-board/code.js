const WHITE_KING = '♔';
const WHITE_QUEEN = '♕';
const WHITE_ROOK = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN = '♙';
const BLACK_KING = '♚';
const BLACK_QUEEN = '♛';
const BLACK_ROOK = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN = '♟';
const SQUARE_SIZE = 45;

// Example of drawing one of the pieces

const playerBlack = {
  pieces: [{ icon: BLACK_KING, row: 1, col: 4 },
  { icon: BLACK_KNIGHT, row: 1, col: 6 },
  { icon: BLACK_KNIGHT, row: 1, col: 1 },
  { icon: BLACK_BISHOP, row: 1, col: 2 },
  { icon: BLACK_BISHOP, row: 1, col: 5 },
  { icon: BLACK_ROOK, row: 1, col: 0 },
  { icon: BLACK_ROOK, row: 1, col: 7 },
  { icon: BLACK_QUEEN, row: 1, col: 3 },
  { icon: BLACK_PAWN, row: 2, col: 0 },
  { icon: BLACK_PAWN, row: 2, col: 1 },
  { icon: BLACK_PAWN, row: 2, col: 2 },
  { icon: BLACK_PAWN, row: 2, col: 3 },
  { icon: BLACK_PAWN, row: 2, col: 4 },
  { icon: BLACK_PAWN, row: 2, col: 5 },
  { icon: BLACK_PAWN, row: 2, col: 6 },
  { icon: BLACK_PAWN, row: 2, col: 7 },
  ]
}

const playerWhite = {
  pieces: [{ icon: WHITE_KING, row: 8, col: 4 },
  { icon: WHITE_KNIGHT, row: 8, col: 6 },
  { icon: WHITE_KNIGHT, row: 8, col: 1 },
  { icon: WHITE_BISHOP, row: 8, col: 2 },
  { icon: WHITE_BISHOP, row: 8, col: 5 },
  { icon: WHITE_ROOK, row: 8, col: 0 },
  { icon: WHITE_ROOK, row: 8, col: 7 },
  { icon: WHITE_QUEEN, row: 8, col: 3 },
  { icon: WHITE_PAWN, row: 7, col: 0 },
  { icon: WHITE_PAWN, row: 7, col: 1 },
  { icon: WHITE_PAWN, row: 7, col: 2 },
  { icon: WHITE_PAWN, row: 7, col: 3 },
  { icon: WHITE_PAWN, row: 7, col: 4 },
  { icon: WHITE_PAWN, row: 7, col: 5 },
  { icon: WHITE_PAWN, row: 7, col: 6 },
  { icon: WHITE_PAWN, row: 7, col: 7 },
  ]
}

const board = () => {
  let colsize = 8;
  let rowsize = 8;
  for (let rows = 0; rows < rowsize; rows++) {
    for (let cols = 0; cols < colsize + 1; cols++) {
      let color = (cols % 2 === 0) ? 'transparent' : 'grey';
      drawFilledRect(rows * SQUARE_SIZE,
        cols * SQUARE_SIZE - (SQUARE_SIZE * (rows % 2 === 0 ? 0 : 1)),
        SQUARE_SIZE, SQUARE_SIZE, color);
    }
  }
};

const placePiece = (piece) => {
  drawPiece(piece.icon, piece.col, piece.row)
}
const drawPiece = (icon, col,row) => {
  drawText(icon, col * SQUARE_SIZE, row * SQUARE_SIZE, 'black', SQUARE_SIZE);
}
const placePieces = () => {
  playerBlack.pieces.forEach(piece => {
    placePiece(piece);
  });
  playerWhite.pieces.forEach(piece => {
    placePiece(piece);
  });
};

board();
placePieces();

registerOnclick((x, y) => {
  let col = Math.floor(x/SQUARE_SIZE)+1
  let row = Math.floor(y/SQUARE_SIZE)-1
 drawPiece(WHITE_PAWN, col, row);
 console.log(Math.floor(x/SQUARE_SIZE),Math.floor(y/SQUARE_SIZE))
});