window.onload = function(){
  const pageList = document.querySelectorAll('.pageList li');
  const pageListIcon = document.querySelectorAll('.pageList li a')
  const pageCon = document.querySelectorAll('.pageContents');
  let activeTab = 0;

  //탭메뉴
  pageList.forEach((list, index) => {
      list.addEventListener('click', function(){
        pageCon.forEach((inner)=> {
          inner.classList.add('off')
        })  
        pageList.forEach((item)=> {
          item.classList.remove('on')
        })
        pageListIcon.forEach((icon)=> {
          icon.classList.remove('on')
        })
    
        pageList[index].classList.add('on')
        pageListIcon[index].classList.add('on')
        pageCon[index].classList.remove('off')
        activeTab = index;
      })
  })
}