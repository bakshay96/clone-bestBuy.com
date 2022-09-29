/********** When the user clicks on the button, 
toggle between hiding and showing the dropdown content **********/

const drop_btn = document.querySelector('.dropbtn');
const drop_menu = document.querySelector('.dropdown');

drop_btn.addEventListener("click", () => {
    drop_menu.classList.toggle("hide");
});


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}