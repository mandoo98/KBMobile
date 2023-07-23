let products;
let myProduct;

async function getJson(){
    const response = await fetch("js/json/eventList.json");  
    products = await response.json();
    return products;
}
getJson()
.then((products)=>importData(products))


//li만들어서 ul에 넣어주는 함수
//menu list
const createItem = (event)=>{
    const List = document.querySelector('.eventList > ul');
    const li = document.createElement('li');
    const a = document.createElement('a');
    const spanBlue = document.createElement('span');
    const spanRed = document.createElement('span');

    li.id = event.id;
    
    a.innerText = event.title;
    a.setAttribute('href',event.href);

    spanBlue.innerHTML = event.periodBlue;
    spanBlue.classList = 'blue';
    spanRed.innerHTML = event.periodRed;
    spanRed.classList = 'red';

    List.append(li)
    li.append(a)
    a.append(spanBlue,spanRed)
}
//만든 li들이 반복되게
const importData = ()=>{
  myProduct = products.eventList;
  myProduct.map((product)=>{ 
    //계속 추가되는 것을 방지(동일한아이디값이 이미 있을때는 작동X)
    if(!document.getElementById(product.id)) {  
      createItem(product);
    }
  })
}