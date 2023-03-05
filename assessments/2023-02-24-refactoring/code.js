const drawPicture = (horizon, base, size) => {
  drawBackground(horizon)
  drawSnowman(width/2, base,size)
}
const drawBackground = (horizon) => {
  drawFilledRect(0, 0, width, horizon, '#ddeeff');
  drawFilledRect(0, horizon, width, height, 'white');
  drawLine(0, horizon, width, horizon, '#bbb');
}

const drawSnowball = (x,y, radius) => {
  drawCircle(x, y, radius + 2, 'black', 3);
  drawFilledCircle(x, y, radius, 'white', 3);
}

const drawHead = (x,headY,headSize) => {
  const headRadius = headSize / 2
  drawSnowball(x,headY, headRadius)
  drawEyes(headRadius * 0.25, headY)
  drawNose(headRadius * 0.8, headY)
  drawMouth(headRadius, headY)
  drawHat(headY - headRadius * 0.9, headRadius * 2.25, headRadius * 1.25)
}

const drawEyes = (x,eyeSpacing, headY) => {
  drawFilledCircle(x - eyeSpacing, headY - eyeSpacing, 4, 'black');
  drawFilledCircle(x + eyeSpacing, headY - eyeSpacing, 4, 'black');
}

const drawNose = (x,noseLength, headY) => {
  drawFilledTriangle(x, headY, x + noseLength, headY + noseLength * 0.2, x, headY + noseLength * 0.3, 'orange');
}

const drawMouth = (x,headRadius, headY) => {
  for (let i = 0; i < 5; i++) {
    const dy = -2 * (2.1 ** Math.abs(i - 2));
    drawFilledCircle(x - (i - 2.3) * headRadius * 0.21, headY + headRadius * 0.65 + dy, 4, 'black');
  }
}

const drawHat = (x,brimTop, brimWidth, hatHeight) => {
  let brimHeight = brimWidth * 0.08;
  let hatWidth = brimWidth * 0.7;
  drawFilledRect(x - brimWidth / 2, brimTop, brimWidth, brimHeight, 'black');
  drawFilledRect(x - hatWidth / 2, brimTop - hatHeight, hatWidth, hatHeight, 'black');
}

const drawTorso = (x,torsoY) => {
  const torsoRadius = torsoSize / 2;
  drawSnowball(torsoY, torsoRadius)
  drawButtons(x, torsoY, torsoRadius)
  drawArm(x, torsoRadius, torsoY, 1)
  drawArm(x, torsoRadius, torsoY, -1)
}

const drawArm = (x, torsoRadius, torsoY, sign) => {
  let x1 = x + torsoRadius * 0.6 * sign;
  let x2 = x + torsoRadius * 2.35 * sign;
  drawLine(x1, torsoY - torsoRadius * 0.25, x2, torsoY - torsoRadius * 0.85, 'black', 3);
}

const drawButtons = (x, torsoY, torsoRadius) => {
  for (let i = 0; i < 3; i++) {
    drawFilledCircle(x, torsoY - torsoRadius * 0.5 + i * torsoRadius * 0.5, 4, 'black');
  }
}

const drawButtCircle = (buttRadius, torsoY) => {
  drawCircle(x, buttY, buttRadius + 2, 'black', 3);
  drawFilledCircle(x, buttY, buttRadius, 'white', 3);
}

const drawSnowman = (x,base,size) => {
  const proportions = [3, 4, 5];
  const [headP, torsoP, buttP] = proportions;
  const total = proportions.reduce((tot, p) => tot + p, 0);
  const headSize = size * (headP / total);
  const torsoSize = size * (torsoP / total)
  const buttSize = size * (buttP / total);

  const headY = (base - size) + headSize / 2;
  const torsoY = headY + headSize / 2 + torsoSize / 2;
  drawHead(x,headY,headSize)
  drawTorso(torsoY)
  drawSnowball(x,torsoY + torsoSize / 2 + buttSize / 2, buttSize / 2)
}


drawPicture(height * 0.7, height * 0.9, height * 0.8)