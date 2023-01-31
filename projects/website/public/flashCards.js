const card = document.getElementsByClassName('card')[0]

card.onclick = (e) => {
    Array.from(card.getElementsByTagName('div')).forEach(element => {
        let classes = element.getAttribute('class').split(' ');
        let index;
        if ((index = classes.indexOf('hidden')) > -1) {
            classes.splice(index, 1)
        } else {
            classes.push('hidden')
        }
        element.setAttribute('class', classes.join(' '))
    });
}
