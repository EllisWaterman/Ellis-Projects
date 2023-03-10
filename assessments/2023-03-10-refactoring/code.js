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

  const drawTree = (treeBaseX, treeBaseY,minApples,maxApples) => {
    let trunkWidth = 20;
    let trunkHeight = 55;
    let numApples = minApples + Math.floor(Math.random() * (maxApples - minApples));
    let leavesX = treeBaseX + trunkWidth / 2;
    let leavesRadius = 40;
    let leavesY = treeBaseY - trunkHeight - (leavesRadius - 2);
    drawTrunk(treeBaseX, treeBaseY, trunkHeight, trunkWidth)
    drawLeaves(leavesX, leavesY, leavesRadius)
    drawApples(leavesX, leavesY, 6, numApples, leavesRadius)
  }

  const drawTrunk = (treeBaseX, treeBaseY, trunkHeight, trunkWidth) => {
    drawFilledRect(treeBaseX, treeBaseY - trunkHeight, trunkWidth, trunkHeight, 'sienna');
  }

  const drawLeaves = (leavesX, leavesY, leavesRadius) => {
    drawFilledCircle(leavesX, leavesY, leavesRadius, 'forestgreen');
  }

  const drawApples = (leavesX, leavesY, appleRadius, numApples, leavesRadius) => {
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

  const drawBackground = () => {
    drawSky()
    drawGround()
    drawSun(100)
    drawClouds()
  }
  const drawTrees = (horizon) => {
    let numTrees = 5;
    let minApples = 5;
    let maxApples = 8;
    let gap = width / (numTrees + 1);
    for (let i = 0; i < numTrees; i++) {
      let treeBaseY = horizon * 1.1;
      let treeBaseX = (i + 1) * gap;
      drawTree(treeBaseX, treeBaseY,minApples,maxApples)
    }
  }
  drawTrees(horizon, numTrees)
  drawBackground()
};


drawPicture(height * 0.78);
