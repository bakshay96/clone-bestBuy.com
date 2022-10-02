
//     let cart = JSON.parse(localStorage.getItem('cart'));
//     let container = document.getElementById("cart-product");
//     let product = document.getElementById("cart-product");
//     let Subtotal = 0;

//     cart.forEach((el)=>{
//    let div = document.createElement("div");
// div.setAttribute("class","product");
// let img = document.createElement("img");
// img.src=el.image;
// let title = document.createElement("h3");
// title.innerText=el.name;
// let price = document.createElement("p");
// price.innerText=el.price;
// Subtotal+=Number(el.price)
// //  console.log(typeof(Subtotal))
// div.append(img,title,price);
// container.append(div);
// })

// let subtotal = document.getElementById("subtotal")
// subtotal.innerText=`$. ${Subtotal.toFixed(2)}`;
// localStorage.setItem("subtotal",JSON.stringify(Subtotal))



let product = document.getElementById("cart-product");

// let dataFromHome = JSON.parse(localStorage.getItem("product"));

//subtotal
let Subtotal = 0;
//get the items from local storage
let container = document.getElementById("cart-product");
let cart= JSON.parse( localStorage.getItem("products"));
console.log(cart);
cart.forEach((el)=>{
let div = document.createElement("div");
div.setAttribute("class","product");
let img = document.createElement("img");
img.src=el.image;
let title = document.createElement("h3");
title.innerText=el.name;
let price = document.createElement("p");
price.innerText=el.price;
Subtotal+=Number(el.priceb)
 console.log(Subtotal)
div.append(img,title,price);
container.append(div);
})

// console.log(Subtotal)
let subtotal = document.getElementById("subtotal")
subtotal.innerText=`$. ${Subtotal}`;
localStorage.setItem("subtotal",JSON.stringify(Subtotal))

