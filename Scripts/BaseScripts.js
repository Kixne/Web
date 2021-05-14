/* Toggle spiner visibility */
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

/* Toggle nav visibility */
function NavShow(){
    let menu = document.querySelector(".nav");
    menu.classList.toggle("display-n");
    menu.classList.toggle("display-y");
}

/* Event to toggle nav visibility (Kx web menu) */
document.querySelector(".btnMenu").onclick= function(){
    NavShow();
}
document.querySelector(".nav__header-text").onclick= function(){
    NavShow();
}
document.querySelector(".btnMenuClose").onclick= function(){
    NavShow();
}
/* End Event to toggle nav visibility (Kx web menu) */


/* These should be the indexes of the main__mainSections
(if you change the values, update the comment)
    0= Home
    1= Courses
    2= Questions
    3= AboutUs
    4= SupportUs
*/

/* Toggle a defined mainSection visibility */
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

/* Toggle btnMenu visibility */
function ShowBtnMenu(view){
    const $btnMenu = document.querySelector(".btnMenu");
    /* Showing btnMenu */
    if(view){
        $btnMenu.classList.add("display-y");
        $btnMenu.classList.remove("display-n");
    }
    /* Hiding btnMenu */
    else{
        $btnMenu.classList.remove("display-y");
        $btnMenu.classList.add("display-n");
    }
}

/* nav subSections links */
let $navLinks = document.querySelectorAll(".nav__link");

/* main__mainSection Home */
$navLinks[0].onclick = function(){
    SpinerShow(true);
    ToggleMainSectionVisibility(0);
    NavShow();
    /* ShowBtnMenu() */
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
    /* showing languages */
    document.querySelector(".langsList-container").classList.toggle("display-y");
    document.querySelector(".langsList-container").classList.toggle("display-n");
    /* toggling arrows icons */
    document.querySelector(".navLinkLangs .Kx-arrow-down").classList.toggle("display-n");
    document.querySelector(".navLinkLangs .Kx-arrow-down").classList.toggle("display-y");
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


/* Youtube API scripts
These should be the indexes of the videos
(if you change the values, update the comment)
    0= course module
    1= aboutUs knowUs
*/

// global variable for the player
var player= new Array();

// this function gets called when API is ready to use
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

/* Whithout thiss function the youtubeAPI doesnt work */
function onPlayerReady(event) {
}

/* Lster, change this function by one that pause the played video */
function StopAllPlayers(){
    player[0].pauseVideo();
    player[1].pauseVideo();
}