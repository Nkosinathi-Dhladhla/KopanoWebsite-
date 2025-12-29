const burger = document.getElementById("Burger");
const burgerImg = document.getElementById("HamburgerLogo");

burgerImg.addEventListener("click", function(){
    if(burger.style.display === "none"){
        burger.style.display = "block";
        burgerImg.src = "Images/cross-svgrepo-com.png";
    } else{
        burger.style.display = "none";
        burgerImg.src = "Images/hamburger-svgrepo-com.png";
    };
});