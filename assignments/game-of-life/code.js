

const CELLSIZE = 13;
const cellArray = new Array(Math.floor(width / CELLSIZE)).fill().map(() =>
  new Array(Math.floor(height / CELLSIZE)).fill({ health: 'dead' }));


const cells = () => {
  let xsize = width / CELLSIZE
  let ysize = height / CELLSIZE
  for (let yposition = 0; yposition < ysize; yposition++) {
    for (let xposition = 0; xposition < xsize; xposition++) {
      if (Math.random() > (1 - .23)) {
      drawFilledRect(xposition * CELLSIZE, yposition * CELLSIZE, CELLSIZE, CELLSIZE, 'black')
     
      }
    }
  }
}
//animate(cells)
cells()
//make a delay possibly

drawFilledRect(0,0, 100, 50, 'blue')
drawText('START', 0,50,'black', 200)
registerOnclick((x, y) => {
drawFilledRect(Math.floor(x), Math.floor(y), CELLSIZE, CELLSIZE, 'black');
 cellArray[Math.floor(y/CELLSIZE)][Math.floor(x/CELLSIZE)] = {health : 'alive'}
});