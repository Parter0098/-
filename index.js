let openModal = document.getElementById('openModal')
let closeModal = document.getElementById('closeModal')
let modal = document.getElementById('modal')

openModal.addEventListener(
  'click',
  () => ((modal.style.display = 'flex'), (openModal.style.display = 'none'))
)

closeModal.addEventListener(
  'click',
  () => ((modal.style.display = 'none'), (openModal.style.display = 'block'))
)

