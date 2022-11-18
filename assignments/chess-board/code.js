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

// Example of drawing one of the pieces

const playerWhite = {
 pieces: [{ piece: WHITE_KING, row: 8, col: 4 },
 { piece: WHITE_KNIGHT, row: 1, col: 4 },
 { piece: WHITE_KNIGHT, row: 1, col: 4 },
 { piece: WHITE_BISHOP, row: 1, col: 1 },
 { piece: WHITE_BISHOP, row: 1, col: 1 },
 { piece: WHITE_ROOK, row: 1, col: 1 },
 { piece: WHITE_ROOK, row: 1, col: 1 },
 { piece: WHITE_QUEEN, row: 8, col: 3 },
 { piece: WHITE_PAWN, row: 1, col: 0 },
 { piece: WHITE_PAWN, row: 1, col: 1 },
 { piece: WHITE_PAWN, row: 1, col: 2 },
 { piece: WHITE_PAWN, row: 1, col: 3 },
 { piece: WHITE_PAWN, row: 1, col: 4 },
 { piece: WHITE_PAWN, row: 1, col: 5 },
 { piece: WHITE_PAWN, row: 1, col: 6 },
 { piece: WHITE_PAWN, row: 1, col: 7 },
 ]
}

const playerBlack = {
  pieces: [{ piece: BLACK_KING, row: 8, col: 4 },
  { piece: BLACK_KNIGHT, row: 1, col: 4 },
  { piece: BLACK_KNIGHT, row: 1, col: 4 },
  { piece: BLACK_BISHOP, row: 1, col: 1 },
  { piece: BLACK_BISHOP, row: 1, col: 1 },
  { piece: BLACK_ROOK, row: 1, col: 1 },
  { piece: BLACK_ROOK, row: 1, col: 1 },
  { piece: BLACK_QUEEN, row: 8, col: 3 },
  { piece: BLACK_PAWN, row: 7, col: 0 },
  { piece: BLACK_PAWN, row: 7, col: 1 },
  { piece: BLACK_PAWN, row: 7, col: 2 },
  { piece: BLACK_PAWN, row: 7, col: 3 },
  { piece: BLACK_PAWN, row: 7, col: 4 },
  { piece: BLACK_PAWN, row: 7, col: 5 },
  { piece: BLACK_PAWN, row: 7, col: 6 },
  { piece: BLACK_PAWN, row: 7, col: 7 },
  ]
}




const board = () => {
  let s = 35
  let colsize = 9
  let rowsize = 8
  for (let rows = 0; rows < rowsize; rows++) {
    for (let cols = 0; cols < colsize; cols++) {
      let color = (cols % 2 === 0) ? 'grey' : 'transparent';
      if (rows % 2 === 0)
        drawFilledRect(rows * s, cols * s, s, s, color)
      else
        drawFilledRect(rows * s, cols * s - s, s, s, color)
    }
  }
}
board()
const placePiecesWhite = () => {
  for (let i = 0; i < 8; i++) {
    drawText(playerWhite.pieces[0].piece, playerWhite.pieces[0].col * 35, playerWhite.pieces[0].row * 35, 'black', 50);
    drawText(playerWhite.pieces[7].piece, playerWhite.pieces[7].col * 35, playerWhite.pieces[7].row * 35, 'black', 50);
    drawText(playerWhite.pieces[8].piece, playerWhite.pieces[i + 8].col * 35, playerWhite.pieces[i + 8].row * 35, 'black', 50);
  }
}

const placePiecesBlack = () => {
  for (let i = 0; i < 8; i++) {
     drawText(playerBlack.pieces[7].piece, playerBlack.pieces[7].col * 35, playerBlack.pieces[7].row * 35, 'black', 50);
    drawText(playerBlack.pieces[0].piece, playerBlack.pieces[0].col * 35, playerBlack.pieces[0].row * 35, 'black', 50);
    drawText(playerBlack.pieces[8].piece, playerBlack.pieces[i + 8].col * 35, playerBlack.pieces[i + 8].row * 35, 'black', 50);
  }
}
placePiecesWhite()
placePiecesBlack()
//drawText(BLACK_KING, x, y, 'black', size);

