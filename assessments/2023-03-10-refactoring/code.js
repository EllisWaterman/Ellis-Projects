//
// Notes:
//
//  - Factor out all new functions to the top level of the file, i.e. not nested
//    within other functions.
//
//  - Do not introduce any new global variables. Write your new functions to
//    take the values they need as arguments and then pass them when you call
//    the function.
//
//  - When you are done you should still have a drawPicture function and the
//    call to it at the bottom of the file should be unchanged. The thing that
//    should have changed is drawPicture should be much shorter, having been
//    rewritten in terms of new functions you have defined.
//

const drawPicture = (horizon) => {
  const numTrees = 5;
  const minApples = 5;
  const maxApples = 8;


  const drawSky = () => {
    drawFilledRect(0, 0, width, horizon, 'skyblue');
  }

  const drawGround = () => {
    drawFilledRect(0, horizon, width, horizon, 'green');
  }

  const drawSun = (sunSize) => {
    drawSunRays(100, 2, 6, 7)
    drawFilledCircle(width, 0, sunSize, 'yellow');
  }

  const drawSunRays = (sunSize, sunRayProportion, sunRays, sunRayWidth) => {
    let startAngle = (Math.PI / 2) * 0.023;
    let r = ((Math.PI / 2) - 2 * startAngle) / (sunRays - 1);
    for (let i = 0; i < sunRays; i++) {
      let angle = startAngle + Math.PI + (i * r);
      let x2 = width + sunSize * sunRayProportion * Math.cos(angle);
      let y2 = 0 - sunSize * sunRayProportion * Math.sin(angle);
      drawLine(width, 0, x2, y2, 'yellow', sunRayWidth);
    }
  }
  const drawClouds = () => {
    let y = height * 0.2;
    drawSmallCloud(width * 0.1, y, 25)
    drawBigCloud(width * 0.5, y, 35)
  }
  const drawSmallCloud = (x, y, smallCloudSize) => {
    drawFilledCircle(x, y, smallCloudSize, 'white');
    drawFilledCircle(x + smallCloudSize * 2.5, y, smallCloudSize, 'white');
    drawFilledCircle(x + (smallCloudSize * 1.25), y - smallCloudSize * 0.5, smallCloudSize, 'white');
    drawFilledCircle(x + (smallCloudSize * 1.25), y + smallCloudSize * 0.5, smallCloudSize, 'white');
  }


  const drawBigCloud = (x, y, bigCloudSize) => {
    drawFilledCircle(x, y, bigCloudSize, 'white');
    drawFilledCircle(x + bigCloudSize * 2.5, y, bigCloudSize, 'white');
    drawFilledCircle(x + (bigCloudSize * 1.25), y - bigCloudSize * 0.5, bigCloudSize, 'white');
    drawFilledCircle(x + (bigCloudSize * 1.25), y + bigCloudSize * 0.5, bigCloudSize, 'white');
  }
  const gap = width / (numTrees + 1);
  
  const drawTree = () => {
    let numApples = minApples + Math.floor(Math.random() * (maxApples - minApples));
    let leavesX = treeBaseX + trunkWidth / 2;
    let leavesY = treeBaseY - trunkHeight - (leavesRadius - 2);
    let leavesRadius = 40;
    drawTrunk(treeBaseX,treeBaseY,55,20)
    drawLeaves(leavesX, leavesY, leavesRadius)
    drawApples(leavesX,6,numApples)
  }

  const drawTrunk = (treeBaseX,treeBaseY,trunkHeight,trunkWidth) => {
    drawFilledRect(treeBaseX, treeBaseY - trunkHeight, trunkWidth, trunkHeight, 'sienna');
  }

  const drawLeaves = (leavesX, leavesY, leavesRadius) => {
    drawFilledCircle(leavesX, leavesY, leavesRadius, 'forestgreen');
  }


  const drawApples = (leavesX,appleRadius,numApples) => {
    let r = appleRadius;
    drawFilledCircle(leavesX + -r / 2 + Math.random() * r, leavesY + -r / 2 + Math.random() * r, r, 'crimson');
    for (let i = 0; i < numApples; i++) {
      const angle = i * ((Math.PI * 2) / numApples);
      const d = leavesRadius - appleRadius * 1.25 - (Math.random() * appleRadius * 2);
      const ax = leavesX + d * Math.cos(angle);
      const ay = leavesY + d * Math.sin(angle);
      drawFilledCircle(ax + -r / 2 + Math.random() * r, ay + -r / 2 + Math.random() * r, r, 'crimson');
    }
  }
}

const drawBackground = () => {
  drawSky()
  drawGround()
  drawSun(100)
  drawClouds()
}
const drawTrees = () => {
  let treeBaseY = horizon * 1.1;
  let treeBaseX = (i + 1) * gap;

  for (let i = 0; i < numTrees; i++) {
    drawTree(treeBaseX,treeBaseY)
  }
  drawBackground()
  drawTrees()
};

drawPicture(height * 0.78);
