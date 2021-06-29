/********* ********* Block basics ********* *********/

/* Funtion Show/Hide spiner */
function ShowOrHideSpiner(x){
    //x gets true (show) or false (hide)
    let $spiner= document.querySelector(".container-spiner");
    if(show){
        $spiner.classList.replace("display-n", "display-y");
    }
    else{
        setTimeout(function(){
            $spiner.classList.replace("display-y", "display-n");
        }, 500);
    }
}

/* Function Scroll up of the page */
function ScrollUp(){
    let currentScroll= document.documentElement.scrollTop;
    if(currentScroll> 0){ window.scrollTo( 0, 0); }
}

/* Function Switch to mainSection */
function SwitchToMainSection(mainSectionIndex){    
}

/* Function CopyElements */
function CopyElement(x){
    /* Fake copyable element is so that the user cannot modify the text that we want to be copied */
    let $copyableElement= document.querySelectorAll(".copyableElement");
    $copyableElement[x].classList.replace("display-n", "display-y");
    $copyableElement[x].focus();
    $copyableElement[x].select();
    document.execCommand("copy");
    $copyableElement[x].classList.replace("display-y", "display-n");
    /* Showing that the text has been copied */
    let $copyButton= document.querySelectorAll(".button-copy")[x];
    $copyButton.textContent= "Copied";
    setTimeout(function(){
        $copyButton.textContent= "Copy";
    }, 1000);
}
/* Function Setting onclick copyElements */
function SetCopyElements(){
    const $copyButtons= document.querySelectorAll(".button-copy");
    for (let i = 0; i < $copyButtons.length; i++) {
        $copyButtons[i].onclick= function(){
            CopyElement(i);
        }
    }
}
//Activate the next lines after create some copiable elements on html
//CopyElement();
//SetCopyElements();

/* Function switch to mainSection X */



/********* ********* End Block basics ********* *********/




/********* ********* Block nav ********* *********/

/* Function Show/Hide nav/languajes*/
function ShowHideNav(x){
    let menu = document.querySelectorAll(".nav")[x];
    menu.classList.toggle("display-n");
    menu.classList.toggle("display-y");
}

/* Setting header__button */
for (let x= 0; x<2; x++) {
    document.querySelectorAll(".header__button")[x].onclick= function(){
        ShowHideNav(x);
    }
}

/* Setting onclick nav__header-text */
for (let x= 0; x<2; x++) {
    document.querySelectorAll(".nav__header-text")[x].onclick= function(){
        ShowHideNav(x);
    }
}

/* Setting onclick btnMenuClose */
for (let x= 0; x<2; x++) {
    document.querySelectorAll(".btnMenuClose")[x].onclick= function(){
        ShowHideNav(x);
    }
}

/********* ********* End Block nav ********* *********/




/* Function onclick nav/languages button */
