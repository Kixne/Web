/********* ********* Block basics ********* *********/

/* Funtion Show/Hide spiner */
function ShowHideSpiner(show){
    //x gets true (show) or false (hide)
    let $spiner= document.querySelector(".container-spiner");
    if(show){
        document.querySelector(".spiner").classList.toggle("spin")
        $spiner.classList.replace("display-n", "display-y");
    }
    else{
        setTimeout(function(){
            document.querySelector(".spiner").classList.toggle("spin")
            $spiner.classList.replace("display-y", "display-n");
        }, 500);
    }
}

/* Function Scroll up of the page */
function ScrollUp(){
    let currentScroll= document.documentElement.scrollTop;
    if(currentScroll> 0){ window.scrollTo( 0, 0); }
}
/* Ensuring that the page starts at the top */
ScrollUp();

/* Function Show/Hide header__buttons */
function ShowHideHeaderButton(x){
    let $button= document.querySelectorAll(".header__button");
    /* if x= 0 show nav, else show langs button */
    if(x==0){
        if( $button[0].classList.contains("display-n")){
            $button[0].classList.remove("display-n");
            $button[1].classList.add("display-n");
        }
    }
    else{
        if(x==1){
            $button[1].classList.remove("display-n");
            $button[0].classList.add("display-n");
        }
    }
}

/* Function Switch to mainSection */
function SwitchToMainSection(mainSectionIndex){
    /* StopAllPlayers(); */
    ScrollUp();
    ShowHideNav(0);
    ShowHideSpiner(true);
    const $toggleMainSection= document.querySelectorAll(".mainSection");
    /* Traversing the mainSections (The code should define the value of the 'i' var automatically) */
    for(i=0; i<=4; i++){
        
        /* Showing the expected main__mainSection */
        if(i==mainSectionIndex){
            if(!$toggleMainSection[mainSectionIndex].classList.contains("display-y")){
                $toggleMainSection[mainSectionIndex].classList.toggle("display-y");
            }
            if($toggleMainSection[mainSectionIndex].classList.contains("display-n")){
                $toggleMainSection[mainSectionIndex].classList.toggle("display-n");
            }
        }
        /* Hiding the unexpexted main__mainSection */
        else{
            if($toggleMainSection[i].classList.contains("display-y")){
                $toggleMainSection[i].classList.toggle("display-y");
            }
            if(!$toggleMainSection[i].classList.contains("display-n")){
                $toggleMainSection[i].classList.toggle("display-n");
            }
        }
    }
    ShowHideSpiner(false);
}

/* Function setting onclick mainSectionCard__button */
const $mainSectionCardLinks = document.querySelectorAll(".mainSectionCard__button");
for (let i= 0; i < $mainSectionCardLinks.length; i++) {
    $mainSectionCardLinks[i].onclick= function(){
        ShowHideNav(0);
        SwitchToMainSection(i+1);
        ShowHideHeaderButton(0);
    }
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

/* Setting onclick nav-items */
const $navLinks = document.querySelectorAll(".nav__item");
/* mainSection Home */
$navLinks[0].onclick = function(){
    SwitchToMainSection(0);
    ShowHideHeaderButton(1);
};
/* mainSection Courses */
$navLinks[1].onclick = function(){
    SwitchToMainSection(1);
};
/* mainSection Questions */
$navLinks[2].onclick = function(){
    SwitchToMainSection(2);
};
/* $navLinks[3] correspond to toggle langs visibility */
$navLinks[3].onclick= function(){
    document.querySelector(".container-langsList").classList.toggle("display-n");
    document.querySelectorAll(".arrow")[0].classList.toggle("display-n");
    document.querySelectorAll(".arrow")[1].classList.toggle("display-n");
};
/* mainSection SupporUs */
$navLinks[4].onclick = function(){
    SwitchToMainSection(3);
};
/* mainSection AboutUs */
$navLinks[5].onclick = function(){
    SwitchToMainSection(4);
};




/* Setting onclick btnMenuClose */
for (let x= 0; x<2; x++) {
    document.querySelectorAll(".btnMenuClose")[x].onclick= function(){
        ShowHideNav(x);
    }
}

/********* ********* End Block nav ********* *********/








/********* ********* Block courses ********* *********/
/* Course card create course section butotnAfter create a loop that declare all the course buttons onclick
right now isnt necessary because we have only one active course */
document.querySelector(".courseCard__button").onclick= function(){
    alert("Hello");
    /* SpinerShow(true);
    ScrolllUp();
    CreateCourseSubSection(0);
    document.querySelectorAll(".mainSection__subSection")[0].classList.toggle("display-y");
    document.querySelectorAll(".mainSection__subSection")[0].classList.toggle("display-n");
    document.querySelectorAll(".mainSection__subSection")[1].classList.toggle("display-y");
    document.querySelectorAll(".mainSection__subSection")[1].classList.toggle("display-n");
    SpinerShow(false);
    CreateSubSectionModuleButtonLinks(); */
};
/********* ********* End Block courses ********* *********/








/********* ********* Block courses ********* *********/
/********* ********* End Block courses ********* *********/