const calculate = (x1,x2,y1,y2) => {
   return Math.hypot(x2 - x1, y2 - y1)
}
const roundToDecimalPlace = (number, places) => {
   return number.toFixed(places)
    
}
const submit = document.querySelector('.submit')
submit.onclick = () => {
   let x1 = parseFloat(document.querySelector('#x1').value);
   let y1 = parseFloat(document.querySelector('#y1').value);
   let x2 = parseFloat(document.querySelector('#x2').value);
   let y2 = parseFloat(document.querySelector('#y2').value);
   document.querySelector('#output').innerHTML = roundToDecimalPlace(calculate(x1,x2,y1,y2),2)
}