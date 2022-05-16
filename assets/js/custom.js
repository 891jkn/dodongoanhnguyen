let navbarTogglerBtn = document.getElementById("navbar-toggler-btn")
let navbar = document.querySelector(".main-nav")
let closer = document.getElementById("toggler-close-btn")
let subNav = document.querySelector(".banner-wrap")
let togller = 0;
closer.addEventListener('click',(e)=>{
    togller = 0
    if(navbar.classList.contains("show-main-nav")){
        navbarTogglerBtn.classList.remove("btn-toggler-show")
        navbar.classList.remove("show-main-nav")
        subNav.classList.add('sticky-top')
    }
})

window.onresize = (e)=>{
    if(window.screen.width >= 768){
        togller = 0
        if (subNav.classList.contains(('sticky-top'))){
            subNav.classList.remove('sticky-top')
        }
        if(navbar.classList.contains("show-main-nav")){
            navbarTogglerBtn.classList.remove("btn-toggler-show")
            navbar.classList.remove("show-main-nav")
        }
    }
}

const handleToggler = (event)=>{
    if(togller == 0){
        togller = 1
        if(!navbar.classList.contains("show-main-nav")){
            navbarTogglerBtn.classList.add("btn-toggler-show")
            navbar.classList.add("show-main-nav")
            navbar.classList.remove('sticky-top')
            subNav.classList.remove('sticky-top')
        }
    }else{
        if(navbar.classList.contains("show-main-nav")){
            togller = 0
            navbarTogglerBtn.classList.remove("btn-toggler-show")
            navbar.classList.remove("show-main-nav")
            subNav.classList.remove('sticky-top')
        }
    }
}

window.addEventListener('scroll',(e)=>{
    if(document.body.clientWidth > 767){
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            navbar.classList.add('sticky-top')
        }else{
            navbar.classList.remove('sticky-top')
        }
    }else{
        if(!togller){
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                subNav.classList.add('sticky-top')
            }else{
                subNav.classList.remove('sticky-top')
            }
        }else{
            subNav.classList.remove('sticky-top')
        }
       
    }
   
})
navbarTogglerBtn.addEventListener('click',handleToggler)

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
let rangeInput = document.getElementById("sliderRange")
let outputValue = document.getElementById("valueRange")
outputValue.innerHTML = '0đ'
rangeInput.addEventListener('input',(e)=>{
    let value = e.target.value
    let moneyFormatted = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
    outputValue.innerHTML = moneyFormatted
})
// rating
// let listRating  = document.querySelectorAll(".product-rating")
// const handleRating = (event)=>{
//     let star = event.target.dataset.star
//     if (star !== undefined){
//         parseInt(star)
//
//     }
// }
// Array.from(listRating).map((val,index)=>{
//     val.addEventListener('click',handleRating)
// })