const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mousedown', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
        console.log(portfolioItem.childNodes[2]);
    })
    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})


const titles = document.querySelectorAll('.title')

titles.forEach(title => {
    title.addEventListener('mousedown', () => {
        title.childNodes[1].classList.add('subtitle-active');
        title.childNodes[2].classList.add('text-active');
    })
    title.addEventListener('mouseout', () => {
        title.childNodes[1].classList.remove('subtitle-active');
        title.childNodes[2].classList.remove('text-active');
    })
})