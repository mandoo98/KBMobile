const menuBtns = document.querySelectorAll('.btnList');
const menuLists = document.querySelectorAll('.listContents');
let activeTab = 0;

//탭메뉴
menuBtns.forEach((menu, index) => {
    menu.addEventListener('click', function(){
      menuLists.forEach((inner)=> {
        inner.classList.add('listOff')
      })
      menuBtns.forEach((item)=> {
        item.classList.remove('btnOn')
      })
  
      menuBtns[index].classList.add('btnOn')
      menuLists[index].classList.remove('listOff')
      activeTab = index;
    })
})