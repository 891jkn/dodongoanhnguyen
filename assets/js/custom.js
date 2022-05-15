let navbarTogglerBtn = document.getElementById("navbar-toggler-btn")
let navbar = document.querySelector(".main-nav")
let closer = document.getElementById("toggler-close-btn")
// window.onclick = (e)=>{
//     if(navbar.classList.contains("show-main-nav")){
//         navbarTogglerBtn.classList.remove("btn-toggler-show")
//         navbar.classList.remove("show-main-nav")
//     }
// }
// let backDrop = document.querySelector(".back-drop")
let togller = 0;
closer.addEventListener('click',(e)=>{
        togller = 0
        if(navbar.classList.contains("show-main-nav")){
            navbarTogglerBtn.classList.remove("btn-toggler-show")
            navbar.classList.remove("show-main-nav")
        }
})

window.onresize = (e)=>{
    if(window.screen.width >= 768){
        togller = 0
        if(navbar.classList.contains("show-main-nav")){
            navbarTogglerBtn.classList.remove("btn-toggler-show")
            navbar.classList.remove("show-main-nav")
        }
    }
}

const handleToggler = (event)=>{
    console.log(event.target.parent)
    if(togller == 0){
        togller = 1
        if(!navbar.classList.contains("show-main-nav")){
            navbarTogglerBtn.classList.add("btn-toggler-show")
            navbar.classList.add("show-main-nav")
        }
    }else{
        if(navbar.classList.contains("show-main-nav")){
            togller = 0
            navbarTogglerBtn.classList.remove("btn-toggler-show")
            navbar.classList.remove("show-main-nav")
        }
    }
}
navbarTogglerBtn.addEventListener('click',handleToggler)

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });