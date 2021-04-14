let show = (e) => {
    // hide()


    let clickedContent = e.target.nextElementSibling
    let checkClicked = window.getComputedStyle(clickedContent, null).getPropertyValue('display')

    if (checkClicked === 'block') {
        clickedContent.style.display = 'none'
    } else {
        hide()
        clickedContent.style.display = 'initial'
    }
}

let hide = () => {

    for (i = 0; i < listItems.length; i++) {
        let hidenContent = document.getElementsByClassName('open')
        hidenContent[i].style.display = "none"
    }
}

let listItems = document.getElementsByClassName('list-items')
for (i = 0; i < listItems.length; i++) {
    document.addEventListener('click', show)
}

