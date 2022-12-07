

let cellsize = 15;
const cellArray = new Array(Math.floor(width / cellsize)).fill().map(() =>
  new Array(Math.floor(height / cellsize)).fill({ health: 'dead' }));


const cells = () => {
  let xsize = width / cellsize
  let ysize = height / cellsize
  for (let yposition = 0; yposition < ysize; yposition++) {
    for (let xposition = 0; xposition < xsize; xposition++) {
      if (Math.random() > (1 - .23))
        drawFilledRect(xposition * cellsize, yposition * cellsize, cellsize, cellsize, 'black')
      cellArray[yposition][xposition] = {health : 'alive'}
    }
  }
}
//animate(cells)
cells()
//make a delay possibly
//find a way to cellArray[x of block][y of block]
drawFilledRect(width/10, height/10, 25, 25, 'blue')