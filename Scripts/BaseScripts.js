
/* Event to show nav (Kx web menu) */
document.querySelector(".btnMenu").onclick= function(){
    let menu = document.querySelector("nav");
    menu.classList.toggle("display-y");
    menu.classList.toggle("display-n");
}
document.querySelector(".nav__header-text").onclick= function(){
    let menu = document.querySelector("nav");
    menu.classList.toggle("display-y");
    menu.classList.toggle("display-n");
}
document.querySelector(".btnMenuClose").onclick= function(){
    let menu = document.querySelector("nav");
    menu.classList.toggle("display-y");
    menu.classList.toggle("display-n");
}