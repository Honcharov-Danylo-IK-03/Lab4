const sixthElem = document.getElementById('sixthElem');
const nextElem = document.querySelector('.list__item');


const img = document.getElementById('image');

const addButton = document.getElementById('buttonAdd');
const zoom = document.getElementById('buttonZoom1');
const unZoom = document.getElementById('buttonZoom2');
const deleteButton = document.getElementById('buttonDelete');

sixthElem.addEventListener('click', () => {
  sixthElem.classList.toggle('_activeSE');
})

nextElem.addEventListener('click', () => {
  nextElem.classList.toggle('_activeNE');
})



zoom.addEventListener('click', () => {
  img.classList.remove('zoomMinus')
  img.classList.toggle('zoomPlus')
})

unZoom.addEventListener('click', () => {
  img.classList.remove('zoomPlus')
  img.classList.toggle('zoomMinus')
})

addButton.addEventListener('click', () => {
  zoom.disabled = false;
  unZoom.disabled = false;
  deleteButton.disabled = false;
  img.style.display = 'inline';
})

deleteButton.addEventListener('click', () => {
  zoom.disabled = true;
  unZoom.disabled = true;
  deleteButton.disabled = true;
  img.style.display = 'none';
})
