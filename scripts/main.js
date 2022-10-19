// Nav-bar styles on scroll \\
window.addEventListener('scroll', () => {
  const navBar = document.querySelector('nav')
  navBar.classList.toggle('window-scroll', scrollY > 0)
})


// Frequentlty asked questions \\
const FAQ = document.querySelectorAll('.faq')

FAQ.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    // change icon
    const icon = faq.querySelector('.faq__icon i')
    if (icon.className == 'uil uil-plus') {
      icon.className = 'uil uil-minus'
    } else {
      icon.className = 'uil uil-plus'
    }
  })
})


// Nav-menu btn \\

const menu = document.querySelector('.nav__list')
const openBtn = document.querySelector('#menu__btn')
const closeBtn = document.querySelector('#close__menu-btn')

const closeMenu = () => {
  menu.style.display = 'none'
  openBtn.style.display = 'inline-block'
  closeBtn.style.display = 'none'
}

openBtn.addEventListener('click', () => {
  menu.style.display = 'flex'
  openBtn.style.display = 'none'
  closeBtn.style.display = 'inline-block'
})

closeBtn.addEventListener('click', closeMenu)




