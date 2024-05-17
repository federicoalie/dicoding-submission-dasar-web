// dropdown menu
const clickedButton = document.querySelector('.responsive_btn');
const changeButtonIcon = document.querySelector('.responsive_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const navBar = document.getElementById("header")

clickedButton.onclick = function () {
    dropDownMenu.classList.toggle('active');
}

window.addEventListener("scroll", function(){
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky")
    }
})


