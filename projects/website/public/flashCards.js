const card = document.getElementsByClassName('card')[0];
const div = document.createElement('div');

card.onclick = (e) => {
    let classesSide1 = card.querySelector('div')
    let classesSide2 = card.querySelector('div.hidden')
    console.log(classesSide1.outerHTML)
    console.log(classesSide2.outerHTML)
    if(classesSide1.outerHTML.indexOf('hidden') || classesSide2.outerHTML.indexOf('hidden')) {
classesSide1.classList.add('hidden')
classesSide2.classList.remove('hidden')
    }
    //  card.querySelectorAll('div').forEach(element => {
    //     let classes = element.getAttribute('class').split(' ');
    //     let index;
    //     console.log(classes.outerHTML)

    //     if ((index = classes.indexOf('hidden')) > -1) {
    //         classes.classList.remove('hidden');
    //     } else {
    //         classes.classList.add('hidden')
    //     }
    //     element.setAttribute('class', classes.join(' '))
    // });
}
