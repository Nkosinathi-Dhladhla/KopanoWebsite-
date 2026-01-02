const burger = document.getElementById("Burger");
const burgerImg = document.getElementById("HamburgerLogo");
const header = document.getElementById("header");

burgerImg.addEventListener("click", function(){
    if(burger.style.display === "none"){
        burger.style.display = "block";
        burgerImg.src = "Images/cross-svgrepo-com.png";
    } else{
        burger.style.display = "none";
        burgerImg.src = "Images/hamburger-svgrepo-com.png";
    };
});

window.addEventListener("scroll", function(){
    if(this.window.scrollY > 500){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const scroller = document.querySelector(".scroller");

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    const scrollerTop = scroller.getBoundingClientRect().top;

    if (scrollerTop < triggerBottom) {
        scroller.classList.add("visible");
    } else {
        scroller.classList.remove("visible");
    }
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);
