
/* Event to toggle nav visibility (Kx web menu) */
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
/* End Event to toggle nav visibility (Kx web menu) */


/* These showld be the indexes of the main__mainSections
    0= Home
    1= Courses
    2= Questions
    3= SupportUs
    4= AboutUs
*/

