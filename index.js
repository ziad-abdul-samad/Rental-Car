let menu = document.querySelector("header .container #menu-icon");
let navbar = document.querySelector("header ul");
menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
} 
const sr = ScrollReveal ({
distance:'90px',
duration:"1500",
delay:"100",
reset:true
}) 

sr.reveal('header' ,{delay:200 , origin: "top"} )
sr.reveal('.landing' ,{delay:200 , origin: "left"} )
sr.reveal('.text' ,{delay:200 , origin: "top"} )
sr.reveal('.heading' ,{delay:800 , origin: "top"} )
sr.reveal('.ride-container .box' ,{delay:600 , origin: "top"} )
sr.reveal('.serv-container .box' ,{delay:600 , origin: "bottom"} )
sr.reveal('.about .container ' ,{delay:600 , origin: "bottom"} )
sr.reveal('.about .container img ' ,{delay:800 , origin: "left"} )
sr.reveal('.reviews .container .box' ,{delay:600 , origin: "top"} )
sr.reveal('.news .container ' ,{delay:400 , origin: "bottom"} )
sr.reveal('.copyright ' ,{delay:200 , origin: "top"} )
sr.reveal('.ziad-info ' ,{delay:200 , origin: "top"} )