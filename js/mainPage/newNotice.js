let products;
let myProduct;

async function getJson(){
    const response = await fetch("js/json/newNotice.json");  
    products = await response.json();
    return products;
}
getJson()
.then((products)=>importData(products))


//li만들어서 ul에 넣어주는 함수
//menu list
const createItem = (product)=>{
    const notice = document.querySelector('.notices > ul');
    const li = document.createElement('li');
    const a = document.createElement('a');
    const p = document.createElement('p');
    const span = document.createElement('span');

    li.id = product.id;
    
    a.setAttribute('href',product.href);

    p.innerHTML = product.title;

    span.innerHTML = product.date;

    notice.append(li)
    li.append(a)
    a.append(p,span)
}
//만든 li들이 반복되게
const importData = ()=>{
  myProduct = products.newNotice;
  myProduct.map((product)=>{ 
    //계속 추가되는 것을 방지(동일한아이디값이 이미 있을때는 작동X)
    if(!document.getElementById(product.id)) {  
      createItem(product);
    }
  })
}