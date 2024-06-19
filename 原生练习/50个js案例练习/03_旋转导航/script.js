const open = document.getElementById('open')
const close = document.getElementById('close')
const flexCircle = document.querySelector('.flex-circle')

open.addEventListener('click', () => flexCircle.classList.add('show-nav'))

close.addEventListener('click', () => flexCircle.classList.remove('show-nav'))