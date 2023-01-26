import { setCanvas, drawFilledRect, width, height } from './graphics.js';
const canvas = document.getElementById('screen')
setCanvas(canvas);

drawFilledRect(width/2, height/2, 100,100, 'black')