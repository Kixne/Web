/********* Toggle spiner visibility *********/
function SpinerShow(show){
    let $spiner = document.querySelector(".spinerContent");
    /* Show spiner */
    if(show){
        $spiner.classList.replace("display-n", "display-y");
    }
    /* Hide spiner after wait 500ms */
    else{
        setTimeout(function(){
            $spiner.classList.replace("display-y", "display-n");
        }, 500);
    }
}




/********* Toggle nav visibility function*********/
function NavShow(){
    let menu = document.querySelector(".nav");
    menu.classList.toggle("display-n");
    menu.classList.toggle("display-y");
}
/* Nav toggler buttons (Kx web menu) */
document.querySelector(".btnMenu").onclick= function(){
    NavShow();
}
document.querySelector(".nav__header-text").onclick= function(){
    NavShow();
}
document.querySelector(".btnMenuClose").onclick= function(){
    NavShow();
}
/********* Toggle nav visibility function*********/




/* nav subSections links */
const $navLinks = document.querySelectorAll(".nav__link");
/* main__mainSection Home */
$navLinks[0].onclick = function(){
    SpinerShow(true);
    ToggleMainSectionVisibility(0);
    NavShow();
    /* StopAllPlayers(); */
    SpinerShow(false);
};
/* main__mainSection Courses */
$navLinks[1].onclick = function(){
    SpinerShow(true);
    ToggleMainSectionVisibility(1);
    NavShow();
    /* StopAllPlayers(); */
    SpinerShow(false);
};
/* main__mainSection Questions */
$navLinks[2].onclick = function(){
    SpinerShow(true);
    ToggleMainSectionVisibility(2);
    NavShow();
    /* StopAllPlayers(); */
    SpinerShow(false);
};
/* $navLinks[3] correspond to toggle langs visibility */
$navLinks[3].onclick = function(){
    /* show/hide languages */
    document.querySelector(".langsList-container").classList.toggle("display-y");
    document.querySelector(".langsList-container").classList.toggle("display-n");
    /* toggling arrows icons visibility*/
    document.querySelector(".navLinkLangs .Kx-arrow-down").classList.toggle("display-y");
    document.querySelector(".navLinkLangs .Kx-arrow-down").classList.toggle("display-n");
    document.querySelector(".navLinkLangs .Kx-arrow-up").classList.toggle("display-y");
    document.querySelector(".navLinkLangs .Kx-arrow-up").classList.toggle("display-n");
};
/* main__mainSection SupporUs */
$navLinks[4].onclick = function(){
    SpinerShow(true);
    ToggleMainSectionVisibility(3);
    NavShow();
    /* StopAllPlayers(); */
    SpinerShow(false);
};
/* main__mainSection AboutUs */
$navLinks[5].onclick = function(){
    SpinerShow(true);
    ToggleMainSectionVisibility(4);
    NavShow();
    /* StopAllPlayers(); */
    SpinerShow(false);
};




/********* Toggle mainSection[x] visibility function *********/
/* indexes of the main__mainSections
    (if the values change, update the comment)
    0= Home     1= Courses      2= Questions
    3= AboutUs  4= SupportUs */
function ToggleMainSectionVisibility(mainSectionNumber){
    const $toggleMainSection= document.querySelectorAll(".main__mainSection");
    /* Traversing the mainSections (The code should define the value of the 'i' var automatically) */
    for(i=0; i<=4; i++){
        /* Showing the expected main__mainSection */
        if(i==mainSectionNumber){
            if(!$toggleMainSection[mainSectionNumber].classList.contains("display-y")){
                $toggleMainSection[mainSectionNumber].classList.toggle("display-y");
            }
            if($toggleMainSection[mainSectionNumber].classList.contains("display-n")){
                $toggleMainSection[mainSectionNumber].classList.toggle("display-n");
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
}




/********* Youtube API scripts
These should be the indexes of the videos
(if you change the values, update the comment)
    0= course module    1= aboutUs knowUs *********/

/* global variable for the players (videos) */
var player= new Array();
/* this function gets called when API is ready to use */
function onYouTubePlayerAPIReady() { 
    // create the global player from the specific iframe (#video)
    player[0] = new YT.Player('courses__moduleVideo', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
    
    player[1] = new YT.Player('aboutUs__knowUsVideo', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}
/* Whithout this empty function the youtubeAPI doesnt work */
function onPlayerReady(event) {
    /* here you can declare the onclick or listener videos buttons controllers */
}
/* Later, change this function by one that pause only the playing videos */
function StopAllPlayers(){
    player[0].pauseVideo();
    player[1].pauseVideo();
}
/********* End Youtube API scripts *********/




/********* CopyElement function *********/
function CopyElement(x){
    /* In html, the fake copyable element is so that the user cannot modify the text that we want to be copied */
    let $copyableElement= document.querySelectorAll(".copyableElement");
    $copyableElement[x].classList.replace("display-n", "display-y");
    $copyableElement[x].focus();
    $copyableElement[x].select();
    document.execCommand("copy");
    $copyableElement[x].classList.replace("display-y", "display-n");
    
    let $copyButton= document.querySelectorAll(".button-copy")[x];
    $copyButton.textContent= "Copied";
    setTimeout(function(){
        $copyButton.textContent= "Copy";
    }, 1000);
}
const $copyButtons= document.querySelectorAll(".button-copy");
/* copy buttons onclick "listeners" */
for (let i = 0; i < $copyButtons.length; i++) {
    $copyButtons[i].onclick= function(){
        CopyElement(i);
    }
}
/********* End CopyElement function *********/




/********* Toggle methodDetails visibility function *********/
function ToggleMethodDetails(x){
    let $methodCards= document.querySelectorAll(".methodCard__details");
    $methodCards[x].classList.toggle("display-y");
    $methodCards[x].classList.toggle("display-n");
}

const $methodCardButtons= document.querySelectorAll(".methodCard__button");
/* methods buttons onclick "listeners" */
for (let i = 0; i < $methodCardButtons.length; i++) {
    $methodCardButtons[i].onclick= function(){
        ToggleMethodDetails(i);
    }
}
/********* End Toggle methodDetails visibility function *********/