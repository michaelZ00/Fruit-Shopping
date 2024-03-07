let counter = 3
const banan = {
    name:"Banana",
    price: 2,
    category:"Fruit",
    pic:"/img/banana.jpg",
    stage:0
}
const orange = {
    name:"Orange",
    price: 2.5,
    category:"Fruit",
    pic:"/img/orange.jpg",
    stage:0
}
const apple = {
    name:"Apple",
    price: 3,
    category:"Fruit",
    pic:"/img/apple.jpg",
    stage:0
}
function add(index){
   arr[index].stage++
   build()
}
function build(){
    counter = 3
    model.innerHTML = ""
    localStorage.setItem("cart",JSON.stringify(arr))
        arr.forEach((element, index) =>{
        element.stage > 0 ? model.innerHTML += `<div>
        <img src="${element.pic}" height="100px">
        <button onclick="mp(-1,${index})">-</button>${element.stage}<button onclick="mp(1,${index})">+</button>
        <br>
        <button onclick="del(${index})">X</button>
        </div>` 
        : counter--}
    )
    counter === 0 ? model.innerHTML = "there is nothing in the cart": model.innerHTML +=""
}
function mp(ml,num){
    arr[num].stage += ml
    build()
}
function del(num){
    arr[num].stage = 0
    build()
}

const model = document.querySelector(".modal-body")
const arr = localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")): []
build()
if (arr.length === 0){
arr.push(banan)
arr.push(orange)
arr.push(apple)
}
const fruits = document.querySelector(".fruit_basket")
arr.forEach((element, index) =>{
    fruits.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${element.pic}" class="card-img-top" alt="${element.name}">
  <div class="card-body">
    <p class="card-text">our ${element.name}'s are the best and they only cost <strong>${element.price}$</strong>
    a kilo so buy them befor someon else  </p>
    <button onclick="add(${index})"><h3>add to cart</h3></button>
  </div>
</div>
    `
})
build()
const empty = document.querySelector("#empty")
function clear(){
    console.log("hey")
}
empty.addEventListener("click", function(){ 
    arr.forEach((element) => {
        element.stage = 0
        build()
    }) });

