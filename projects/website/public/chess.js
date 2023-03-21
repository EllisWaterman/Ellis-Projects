import { setCanvas, drawFilledRect, drawText } from './graphics.js';
const canvas = document.getElementById('screen')
setCanvas(canvas);
// const im I= document.createElement('img')
// im.setAttribute('src', 'https://www.shutterstock.com/image-vector/pawn-chess-icon-soldier-modern-260nw-1662529951.jpg')
// const pieceImages = [{ king: imgKing, queen: imgQueen, pawn: imgPawn }]
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
const SQUARE_SIZE = 62.5;

// Example of drawing one of the pieces



const pieces = [
    { team: 'white', icon: WHITE_KING, row: 7, col: 4 },
    { team: 'white', icon: WHITE_KNIGHT, row: 7, col: 6 },
    { team: 'white', icon: WHITE_KNIGHT, row: 7, col: 1 },
    { team: 'white', icon: WHITE_BISHOP, row: 7, col: 2 },
    { team: 'white', icon: WHITE_BISHOP, row: 7, col: 5 },
    { team: 'white', icon: WHITE_ROOK, row: 7, col: 0 },
    { team: 'white', icon: WHITE_ROOK, row: 7, col: 7 },
    { team: 'white', icon: WHITE_QUEEN, row: 7, col: 3 },
    // { team: 'white', icon: WHITE_PAWN, row: 6, col: 0, moves: 0 },
    // { team: 'white', icon: WHITE_PAWN, row: 6, col: 1, moves: 0 },
    // { team: 'white', icon: WHITE_PAWN, row: 6, col: 2, moves: 0 },
    // { team: 'white', icon: WHITE_PAWN, row: 6, col: 3, moves: 0 },
    // { team: 'white', icon: WHITE_PAWN, row: 6, col: 4, moves: 0 },
    // { team: 'white', icon: WHITE_PAWN, row: 6, col: 5, moves: 0 },
    // { team: 'white', icon: WHITE_PAWN, row: 6, col: 6, moves: 0 },
    { team: 'white', icon: WHITE_PAWN, row: 6, col: 7, moves: 0 },
    { team: 'black', icon: BLACK_KING, row: 0, col: 4 },
    { team: 'black', icon: BLACK_KNIGHT, row: 0, col: 6 },
    { team: 'black', icon: BLACK_KNIGHT, row: 0, col: 1 },
    { team: 'black', icon: BLACK_BISHOP, row: 0, col: 2 },
    { team: 'black', icon: BLACK_BISHOP, row: 0, col: 5 },
    { team: 'black', icon: BLACK_ROOK, row: 0, col: 0 },
    { team: 'black', icon: BLACK_ROOK, row: 0, col: 7 },
    { team: 'black', icon: BLACK_QUEEN, row: 0, col: 3 },
    { team: 'black', icon: BLACK_PAWN, row: 1, col: 0, moves: 0 },
    // { team: 'black', icon: BLACK_PAWN, row: 1, col: 1, moves: 0 },
    // { team: 'black', icon: BLACK_PAWN, row: 1, col: 2, moves: 0 },
    // { team: 'black', icon: BLACK_PAWN, row: 1, col: 3, moves: 0 },
    // { team: 'black', icon: BLACK_PAWN, row: 1, col: 4, moves: 0 },
    // { team: 'black', icon: BLACK_PAWN, row: 1, col: 5, moves: 0 },
    // { team: 'black', icon: BLACK_PAWN, row: 1, col: 6, moves: 0 },
    // { team: 'black', icon: BLACK_PAWN, row: 1, col: 7, moves: 0 },

]
let pieceSelected = null;
let clickCount = 0
let turn = 'white'


const drawBoard = () => {
    let colsize = 8;
    let rowsize = 8;
    for (let rows = 0; rows < rowsize; rows++) {
        for (let cols = 0; cols < colsize + 1; cols++) {
            let color = (cols % 2 === 0) ? 'silver' : '#D4AF37';
            drawFilledRect(rows * SQUARE_SIZE,
                cols * SQUARE_SIZE - (SQUARE_SIZE * (rows % 2 === 0 ? 0 : 1)),
                SQUARE_SIZE, SQUARE_SIZE, color);
        }
    }
};

const placePiece = (piece) => {
    drawPiece(piece.icon, piece.col, piece.row);
    board[piece.col][piece.row] = piece
}

const board = new Array(8).fill(0).map(() => new Array(8).fill(0));

const drawPiece = (icon, col, row) => {
    drawText(icon, col * SQUARE_SIZE,
        row * SQUARE_SIZE + SQUARE_SIZE,
        'black', SQUARE_SIZE);
}

const highlightPeice = (icon, col, row, color) => {
    emptySpace(pieceSelected)
    drawText(icon, col * SQUARE_SIZE,
        row * SQUARE_SIZE + SQUARE_SIZE,
        color, SQUARE_SIZE);
}
const placePieces = () => {
    pieces.forEach(placePiece);
};
const emptySpace = (piece) => {
    let color = (piece.col + piece.row) % 2 === 0 ? 'silver' : '#D4AF37';
    drawFilledRect(piece.col * SQUARE_SIZE,
        piece.row * SQUARE_SIZE,
        SQUARE_SIZE, SQUARE_SIZE, color);
}

const movePiece = (selected, row, col) => {
    emptySpace(selected)
    board[selected.col][selected.row] = 0
    selected.row = row
    selected.col = col
    board[col][row] = selected
    pieceSelected = null
    emptySpace(selected)
    drawPiece(selected.icon, col, row)
}

const capturePiece = (selected, row, col) => {
    emptySpace(selected)
    board[selected.col][selected.row] = 0
    selected.row = row
    selected.col = col
    board[col][row] = selected
    pieceSelected = null
    emptySpace(selected)
    drawPiece(selected.icon, col, row)
}
const pawnMoveIsLegal = (piece, col, row) => {
    const pawnDirection = (piece.icon === WHITE_PAWN ? -1 : 1)
    const pawnDirectionFirstMove = (piece.icon === WHITE_PAWN ? -2 : 2)
    if (piece.moves === 0) {
        if (col === piece.col && row === piece.row + pawnDirection || col === piece.col && row === piece.row + pawnDirectionFirstMove) {
            piece.moves++
            return true
        }
    } else if (col === piece.col && row === piece.row + pawnDirection) {
        piece.moves++
        return true
    } else {
        return false
    }
}

const rookMoveIsLegal = (piece, col, row) => {
    return col === piece.col || row === piece.row;
};

const bishopMoveIsLegal = (piece, col, row) => {
    return Math.abs(col - piece.col) === Math.abs(row - piece.row)
}

const queenMoveIsLegal = (piece, col, row) => {
    return Math.abs(col - piece.col) === Math.abs(row - piece.row) || (col === piece.col || row === piece.row)
}
const kingMoveIsLegal = (piece, col, row) => {
    return (row === piece.row + 1 && col === piece.col) ||
        (row === piece.row - 1 && col === piece.col) ||
        (col === piece.col - 1 && row === piece.row) ||
        (col === piece.col + 1 && row === piece.row) ||
        (col === piece.col + 1 && row === piece.row + 1) ||
        (col === piece.col - 1 && row === piece.row - 1) ||
        (col === piece.col + 1 && row === piece.row - 1) ||
        (col === piece.col - 1 && row === piece.row + 1)
}
const moveIsLegal = (piece, col, row) => {
    if (piece.icon === WHITE_PAWN || piece.icon === BLACK_PAWN) {
        return pawnMoveIsLegal(piece, col, row);
    } else if (piece.icon === WHITE_ROOK || piece.icon === BLACK_ROOK) {
        return rookMoveIsLegal(piece, col, row);
    } else if (piece.icon === WHITE_BISHOP || piece.icon === BLACK_BISHOP) {
        return bishopMoveIsLegal(piece, col, row)
    } else if (piece.icon === WHITE_QUEEN || piece.icon === BLACK_QUEEN) {
        return queenMoveIsLegal(piece, col, row)
    } else if (piece.icon === WHITE_KING || piece.icon === BLACK_KING) {
        return kingMoveIsLegal(piece, col, row)
    }
    return false
}
drawBoard();
placePieces();

canvas.onclick = (e) => {
    const { offsetX, offsetY } = e;
    let x = offsetX
    let y = offsetY
    let col = Math.floor(x / SQUARE_SIZE);
    let row = Math.floor(y / SQUARE_SIZE);

    // 1. selecting a new piece to move

    // 2. Moving selected piece

    // 3. Capturing with a slected peice

    // 4. unselecting current peice
    if (pieceSelected === null) {
        if (board[col][row] !== 0) {
            pieceSelected = board[col][row]
            highlightPeice(pieceSelected.icon, col, row, 'blue')
        }
    }
    else {
        if (board[col][row] === 0) {
            if (moveIsLegal(pieceSelected, col, row)) {
                movePiece(pieceSelected, row, col)
            }
            return;
        }
        if (pieceSelected.team !== board[col][row].team) {
            capturePiece(pieceSelected, row, col)
            return
        }
        if (board[col][row] === pieceSelected) {
            highlightPeice(pieceSelected.icon, col, row, 'black')
            pieceSelected = null
            return
        }
    }
}
