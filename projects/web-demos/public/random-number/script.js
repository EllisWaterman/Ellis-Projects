let counter = 0;

document.querySelector('p').onclick = (e) => {
  const p = e.target;
  const random = Math.floor(Math.random()*11)
  counter = random;
  if (counter === random) {
    p.innerHTML = 'Your random number from 0-10 is <span id="counter"></span><span id="s"></span>.';
  }
  p.querySelector('#counter').textContent = `${counter}`;
};
