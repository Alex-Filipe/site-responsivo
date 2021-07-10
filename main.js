const nav = document.querySelector('#header nav')

/*Open and close menu*/
const toggle = document.querySelectorAll('nav .toggle')
for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/*Close menu click */
const links = document.querySelectorAll('nav ul li a')
for(const link of links) {
  link.addEventListener('click', function() {
  nav.classList.remove('show')  
})
}