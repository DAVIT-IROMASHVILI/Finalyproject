let burger = document.querySelector(".burger_icon");
let mobileMenu = document.querySelector(".header_nav");
let xmark = document.querySelector(".xmark");

burger.addEventListener("click", ()=>{
    mobileMenu.classList.add("show");
    xmark.style.display="block";
    burger.style.display="none";
});

xmark.addEventListener("click", ()=>{
    mobileMenu.classList.remove("show");
    xmark.style.display="none";
    burger.style.display="block";
});