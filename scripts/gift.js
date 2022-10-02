import { navbar } from "../components/navbar.js";

let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();

import { footer } from "../components/footer.js";

let footer_div = document.getElementById('footer');
footer_div.innerHTML = footer();


 let span =document.getElementsByTagName("span");
 let product =document.getElementsByClassName("product");
 let product_page=Math.ceil(product.length/4);
 let l =0;
 let movePer =25.34;
 let maxMove= 203;
 let mobile_view =window.matchMedia("(max-width: 768px)");
 if (mobile_view.matches){
    movePer = 50.36;
    maxMove = 504;

 }
 let right_mover = () =>{
    l =l+ movePer;
    if(product ==1) {l = 0}
    for(const i of product){
        if(l> maxMove) { l =l -movePer;}
        i.style.left = "-" + l + "%";
    }
 }
 let left_mover =()=>{
   l= l-movePer;
   if(l<=0){ l=0;}
   for(const i of product){
      if(product_page > 1)
      i.style.left = "-" + l + "%";
  }
}

 span[1].onclick =()=>{right_mover();}
 span[0].onclick =()=>{left_mover();}