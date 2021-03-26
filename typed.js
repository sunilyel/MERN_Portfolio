var ele = document.querySelector('#typed')

var infoContainer = document.querySelector('.info_container')
var qualifiedContainer = document.querySelector('.qualification_container')
var downloadContainer = document.querySelector('.download_container')

var infoLink = document.querySelector('#info_link')
var qualifiedLink = document.querySelector('#qualified_link')
var downloadLink = document.querySelector('#download_cv')

infoLink.addEventListener('click', function () {
  infoContainer.style.display = 'block'
  infoLink.style.color = 'yellow'
  qualifiedContainer.style.display = 'none'
  qualifiedLink.style.color = 'white'
  downloadContainer.style.display = 'none'
  downloadLink.style.color = 'white'
})

qualifiedLink.addEventListener('click', function () {
  infoContainer.style.display = 'none'
  infoLink.style.color = 'white'
  qualifiedContainer.style.display = 'block'
  qualifiedLink.style.color = 'yellow'
  downloadContainer.style.display = 'none'
  downloadLink.style.color = 'white'
})

downloadLink.addEventListener('click', function () {
  infoContainer.style.display = 'none'
  qualifiedContainer.style.display = 'none'
  qualifiedLink.style.color = 'white'
  downloadContainer.style.display = 'block'
  downloadLink.style.color = 'yellow'
})

var start = ''
var end = 'Sunil Yeligeti'

var idx = 1
var pointer = 0
setInterval(() => {
  if (pointer == 14 || pointer == -1) {
    idx = idx * -1
  }
  start = end.substring(0, pointer)
  ele.textContent = start
  pointer = pointer + idx
}, 100)
