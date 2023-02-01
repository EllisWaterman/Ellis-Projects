const cards = document.querySelector('.cards')

cards.onclick = (e) => {
    let activeCard;
    e.path.forEach(element => {
        if (element.classList && element.classList.contains('card'))
        activeCard = element
    });
    activeCard.querySelectorAll('div').forEach(element => {
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden')
        }
    });
}

const forward = document.querySelector('.forward')
forward.onclick = (e) => {
    let active = document.querySelector('.card.active')
    active.classList.remove('active')
    active.classList.add('hidden')
    // find the active card
    // make it not active
active.nextElementSibling.classList.add('active')
active.nextElementSibling.classList.remove('hidden')

}