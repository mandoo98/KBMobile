window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  if(window.pageYOffset > 30) {
    header.classList.add('change');
  } else {
    header.classList.remove('change');
  }
})