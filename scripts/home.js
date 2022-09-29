/*********** IMPORT NAVBAR ***********/

import { navbar } from "../components/navbar.js";

let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();


/********** When the user clicks on the button, 
toggle between hiding and showing the dropdown content **********/

const drop_btn = document.querySelector('.dropbtn');
const drop_menu = document.querySelector('.dropdown');

drop_btn.addEventListener("click", () => {
    drop_menu.classList.toggle("hide");
});