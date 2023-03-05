const calculate = (x1,x2,y1,y2) => {
   return Math.sqrt(((x2-x1)**2)+((y2-y1)**2))
}
const roundToDecimalPlace = (number, places) => {
   return Math.round(number*10**places)/10**places
    
}
const submit = document.querySelector('.submit')
submit.onclick = () => {
   let x1 = document.querySelector('#x1').value
   let x2 = document.querySelector('#x2').value
   let y1 = document.querySelector('#y1').value
   let y2 = document.querySelector('#y2').value
   document.querySelector('#output').innerHTML = roundToDecimalPlace(calculate(x1,x2,y1,y2),2)
}