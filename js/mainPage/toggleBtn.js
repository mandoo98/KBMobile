const toggleBtn = document.querySelector('.toggleBtn');
const toggleClose = document.querySelector('.toggleClose');
const togglePage = document.querySelector('.togglePage');

toggleBtn.addEventListener('click', () => {
  togglePage.classList.add('toggleOpen')
})
toggleClose.addEventListener('click', () => {
  togglePage.classList.remove('toggleOpen')
})