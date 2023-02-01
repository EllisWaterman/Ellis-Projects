const card = document.getElementsByClassName('card')[0];

card.onclick = (e) => {
    card.querySelectorAll('div').forEach(element => {
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden')
        }
    });
}
