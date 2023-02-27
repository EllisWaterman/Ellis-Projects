const base = height * 0.9
const size = height * 0.8

const drawBackground = () => {
  const horizon = height * 0.7

  drawFilledRect(0, 0, width, horizon, '#ddeeff');
  drawFilledRect(0, horizon, width, height, 'white');
  drawLine(0, horizon, width, horizon, '#bbb');
}




const x = width / 2;
const proportions = [3, 4, 5];
const [headP, torsoP, buttP] = proportions;
const total = proportions.reduce((tot, p) => tot + p, 0);

const headSize = size * (headP / total);
const torsoSize = size * (torsoP / total)
const buttSize = size * (buttP / total);


const drawHead = (headY) => {
  const headRadius = headSize / 2
  drawHeadCircle(headY,headRadius)
  drawEyes(headRadius * 0.25,headY)
  drawNose(headRadius * 0.8,headY)
  drawMouth(headRadius,headY)
  drawHat(headY - headRadius * 0.9, headRadius * 2.25, headRadius * 1.25)
}
const drawHeadCircle = (headY,headRadius) => {
  drawCircle(x, headY, headRadius + 2, 'black', 3);
  drawFilledCircle(x, headY, headRadius, 'white', 3);
}
const drawEyes = (eyeSpacing,headY) => {
  drawFilledCircle(x - eyeSpacing, headY - eyeSpacing, 4, 'black');
  drawFilledCircle(x + eyeSpacing, headY - eyeSpacing, 4, 'black');
}


const drawNose = (noseLength,headY) => {
  drawFilledTriangle(x, headY, x + noseLength, headY + noseLength * 0.2, x, headY + noseLength * 0.3, 'orange');
}
const drawMouth = (headRadius,headY) => {
  for (let i = 0; i < 5; i++) {
    const dy = -2 * (2.1 ** Math.abs(i - 2));
    drawFilledCircle(x - (i - 2.3) * headRadius * 0.21, headY + headRadius * 0.65 + dy, 4, 'black');
  }
}
const drawHat = (brimTop, brimWidth, hatHeight) => {
  let brimHeight = brimWidth * 0.08;
  let hatWidth = brimWidth * 0.7;
  drawFilledRect(x - brimWidth / 2, brimTop, brimWidth, brimHeight, 'black');
  drawFilledRect(x - hatWidth / 2, brimTop - hatHeight, hatWidth, hatHeight, 'black');
}
const drawTorso = (headY) => {
  const torsoRadius = torsoSize / 2;
  const torsoY = headY + headSize / 2 + torsoSize / 2;
  drawTorsoCircle(x,torsoY,torsoRadius)
  drawButtons(x,torsoY,torsoRadius)
  drawArms(x + torsoRadius * 0.6, x + torsoRadius * 2.35,x1, x2,torsoY,torsoRadius);

}
const drawTorsoCircle = (x,torsoY,torsoRadius) => {
  drawCircle(x, torsoY, torsoRadius + 2, 'black', 3);
  drawFilledCircle(x, torsoY, torsoRadius, 'white', 3);
}


const drawArms = (x1, x2,torsoY,torsoRadius) => {
  drawLine(x1, torsoY - torsoRadius * 0.25, x2, torsoY - torsoRadius * 0.85, 'black', 3);
  x1 = x + torsoRadius * 0.6 * -1;
  x2 = x + torsoRadius * 2.35 * -1;
  drawLine(x1, torsoY - torsoRadius * 0.25, x2, torsoY - torsoRadius * 0.85, 'black', 3);
}




const drawButtons = (x,torsoY,torsoRadius) => {
  for (let i = 0; i < 3; i++) {
    drawFilledCircle(x, torsoY - torsoRadius * 0.5 + i * torsoRadius * 0.5, 4, 'black');
  }
}
const drawButt = () => {
  drawButtCircle(buttSize / 2, torsoY)
}
const drawButtCircle = (buttRadius,torsoY) => {
  const buttY = torsoY + torsoSize / 2 + buttSize / 2;
  drawCircle(x, buttY, buttRadius + 2, 'black', 3);
  drawFilledCircle(x, buttY, buttRadius, 'white', 3);
}



const drawSnowman = () => {
  const headY = (base - size) + headSize / 2;
  drawHead(headY)
  drawTorso(headY)

}
drawBackground()
drawSnowman()
