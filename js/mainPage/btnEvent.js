const menuBtn = document.querySelector('.menuBtn');
const exchangeBtn = document.querySelector('.exchangeBtn');
const noticeBtn = document.querySelector('.noticeBtn');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('on');
  noticeBtn.classList.remove('on');
  exchangeBtn.classList.remove('on');
})

exchangeBtn.addEventListener('click', () => {
  menuBtn.classList.remove('on');
  noticeBtn.classList.remove('on');
  exchangeBtn.classList.add('on');
})

noticeBtn.addEventListener('click', () => {
  menuBtn.classList.remove('on');
  exchangeBtn.classList.remove('on');
  noticeBtn.classList.add('on');
})