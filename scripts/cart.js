
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
let cart= JSON.parse( localStorage.getItem("cart"))||[];

console.log(cart);

function display(cart)
{
    container.innerHTML=null;
    cart.forEach((el,index)=>{
    let div = document.createElement("div");
    div.setAttribute("class","product");
    let img = document.createElement("img");
    img.src=el.image;
    let title = document.createElement("h3");
    title.innerText=el.name;
    let price = document.createElement("p");
    price.innerText=el.price;
    let removeItem=document.createElement("button");
    removeItem.innerText="Remove Item"
    removeItem.addEventListener("click",function()
    {
        deleteItem(el);
    })

    Subtotal+=Number(el.priceb)
    console.log(Subtotal)
    div.append(img,title,price,removeItem);
    container.append(div);
    })

    // console.log(Subtotal)
    let subtotal = document.getElementById("subtotal")
    subtotal.innerText=`$. ${Subtotal}`;
    localStorage.setItem("subtotal",JSON.stringify(Subtotal))
}
display(cart);

function deleteItem(index)
{
    let deleteData=cart.filter(function(e,i)
    {
        return e!=index;
    });

    localStorage.setItem("cart",JSON.stringify(deleteData))
    cart= JSON.parse( localStorage.getItem("cart"))||[];
    display(cart);
    window.location. reload();
    
}