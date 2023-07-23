const drop = document.querySelectorAll('.drop');

for (i = 0; i < drop.length; i++) {
  drop[i].addEventListener('click', function(){
    this.classList.toggle('afterChange');
    this.lastElementChild.classList.toggle('on');
  })
}
