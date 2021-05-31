/********* Toggle spiner visibility funtionality *********/
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
/********* End Toggle spiner visibility funtionality *********/


/********* ScrollUp functionality *********/
function ScrolllUp(){
    let currentScroll= document.documentElement.scrollTop;
    if(currentScroll> 0){ window.scrollTo( 0, 0); }
}
/* Ensuring that the page starts at the top */
ScrolllUp();
/********* End ScrollUp functionality *********/


/********* CopyElement function *********/
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
/* Adding copyButtons onclick functionality */
const $copyButtons= document.querySelectorAll(".button-copy");
for (let i = 0; i < $copyButtons.length; i++) {
    $copyButtons[i].onclick= function(){
        CopyElement(i);
    }
}
/********* End CopyElement function *********/


/********* Toggle nav visibility functionality *********/
function NavShow(x){
    let menu = document.querySelectorAll(".nav");
    menu[x].classList.toggle("display-n");
    menu[x].classList.toggle("display-y");
}
/* Toggle Menu buttons Visibiility function */
function ToggleMenuButtonsVisibility(){
    let $menuButton = document.querySelectorAll(".btnMenu");
    $menuButton[0].classList.toggle("display-y");
    $menuButton[0].classList.toggle("display-n");
    $menuButton[1].classList.toggle("display-y");
    $menuButton[1].classList.toggle("display-n");
}
/* Nav toggler buttons (Kx web menu) */
document.querySelectorAll(".btnMenu")[0].onclick= function(){
    NavShow(0);
}
document.querySelectorAll(".nav__header-text")[0].onclick= function(){
    NavShow(0);
}
document.querySelectorAll(".btnMenuClose")[0].onclick= function(){
    NavShow(0);
}
/* Language picker toggler buttons (Borrows nav scripts) */
document.querySelectorAll(".btnMenu")[1].onclick= function(){
    NavShow(1);
}
document.querySelectorAll(".nav__header-text")[1].onclick= function(){
    NavShow(1);
}
document.querySelectorAll(".btnMenuClose")[1].onclick= function(){
    NavShow(1);
}
/********* End Toggle nav visibility functionality *********/


/********* ToglingToMainSection functionality *********/
function TogglingToMainSection(mainSectionNumber){
    SpinerShow(true);
    /* StopAllPlayers(); */
    ToggleMainSectionVisibility(mainSectionNumber);
    ScrolllUp();
    NavShow(0);
    SpinerShow(false);
}
/* nav subSections links */
const $navLinks = document.querySelectorAll(".nav__link");
/* main__mainSection Home */
$navLinks[0].onclick = function(){
    document.querySelectorAll(".btnMenu")[0].classList.replace("display-y", "display-n");
    document.querySelectorAll(".btnMenu")[1].classList.replace("display-n", "display-y");
    TogglingToMainSection(0);
    /* Hidding btnMenu (nav) */
};
/* main__mainSection Courses */
$navLinks[1].onclick = function(){
    TogglingToMainSection(1);
};
/* main__mainSection Questions */
$navLinks[2].onclick = function(){
    TogglingToMainSection(2);
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
    TogglingToMainSection(3);
};
/* main__mainSection AboutUs */
$navLinks[5].onclick = function(){
    TogglingToMainSection(4);
};




/********* Toggle mainSection[x] visibility functionality *********/
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




/* Home mainSectionCards links*/
const $mainSectionCardLinks = document.querySelectorAll(".mainSectionCard__link");
for (let i = 0; i < $mainSectionCardLinks.length; i++) {
    $mainSectionCardLinks[i].onclick= function(){
        ToggleMenuButtonsVisibility();
        NavShow(0);
        TogglingToMainSection(i+1);
    }
}

/* Adding mainSectionCards mainSection toggling functionality */
var currentCourse= -1,
    currentCourseModule= -1;

/* After work this with a real data base (DB)
(That implies changing the code)*/
const coursesFullData= [
    /* Follow the same the order to declare new items (All fields are required).
    If you change the something, please update the old code */

    /* Course 00 (Web anatomy <HTML>)*/[

        /* CourseCard  and subsSection course */{
            title: "Web anatomy <HTML>",
            imageAlt: "HTML & HTML5 course image",
            imageTitle: "Kx HTML & HTML5 course",
            imageMainSection: 1,
            imageDirName:"HTML",
            descriptionCard: "HTML & HTML5 course from scratch. Let's make our ideas come true, learning to create the structure of all our HTML projects and applications.",
            descriptionCourse: "HTML & HTML5 course from scratch. In this course we will learn to use, declare and combine the diferent tags of the standard language HTML. Learning to create the structure of all our HTML projects and applications.",
            quality: "##.#",
            version: "21.##.##",
            duration: "##:##",
        },

        /* Resources link*/{
            bookPrintable: "",
            bookDigital: "",
            exercices: "",
            modululesCopyUrl: "",
        },

        /* Modules */[

            /* Module 00 */{
                title: "Introduction to the html course",
                urlId: "XFbJrmdiv-s",
                description: "Module description, some example text",
                duration: "##:##",
                version: "21.##.##",
                moduleCopyLink: "copiable module url",
            },
        ]
    ],
];

function CreateSubSectionCourse(courseIndex){
    let $courseSubSection= document.querySelectorAll(".mainSection__subSection")[1],
    $fragment= document.createDocumentFragment(),
    $template= document.getElementById("template-subSection__course").content,
    courseData= coursesFullData[courseIndex][0];
    
    /* Checking if is necessary create the course subsection */
    if(courseIndex!=currentCourse){
        currentCourse= courseIndex;
        currentCourseModule= -1;
        
        /* cloning the template */
        let $cloned= document.importNode($template, true);
        
        /* Setting header data */
        let $header= $cloned.querySelector("h2");
        $cloned.querySelector("h2").textContent= courseData.title;
        
        /* Setting image data */
        $cloned.querySelector("img").setAttribute("title", courseData.imageTitle);
        $cloned.querySelector("img").setAttribute("alt", courseData.imageAlt);
        $cloned.querySelector("img").setAttribute("src", CreateSrcOrSrcSet(1, courseData.imageDirName, true));
        $cloned.querySelector("img").setAttribute("srcset", CreateSrcOrSrcSet(1, courseData.imageDirName, false));
        
        /* Setting courseDetails items data */
        let $courseDetail= $cloned.querySelectorAll(".course__details-item");
        $courseDetail[0].querySelector("span").textContent= courseData.quality;
        $courseDetail[1].querySelector("span").textContent= courseData.version;
        $courseDetail[2].querySelector("span").textContent= courseData.duration;
        
        /* Setting course details data */
        $cloned.querySelector("p").insertAdjacentText("beforeend", courseData.descriptionCourse);
        
        /* Setting modules list data */
        let moduleData= coursesFullData[courseIndex][2];
        for (let i= 0; i< moduleData.length; i++) {
            let item= document.createElement("li");
            item.classList.add("course__modulesList-item");
            
            let item__title= document.createElement("span");
            item__title.classList.add("Kx-icon", "Kx-button-play");
            item__title.textContent= moduleData[i].title;
            item.insertAdjacentElement("beforeend", item__title);
            
            let item__duration= document.createElement("span");
            item__duration.classList.add("Kx-icon", "Kx-clock");
            item__duration.textContent= moduleData[i].duration;
            item.insertAdjacentElement("beforeend", item__duration);

            $cloned.querySelector(".course__modulesList").insertAdjacentElement("beforeend", item)
        }
        
        
        $courseSubSection.innerHTML = '';   
        
        /* Adding the content to the HTML */
        $fragment.appendChild($cloned);
        $courseSubSection.appendChild($fragment);

        /* Adding show courseCards functionality */
        ReturnToCoursesCards();
    }
}

/* return to courses cards button */
function ReturnToCoursesCards(){
    document.getElementById("btnShowCourseCards").onclick= function(){
        SpinerShow(true);
        ScrolllUp();
        let $mainSection = document.querySelectorAll(".mainSection__subSection");
        $mainSection[0].classList.replace("display-n", "display-y");
        $mainSection[1].classList.replace("display-y", "display-n");
        SpinerShow(false);
    };
}


/* After create a loop that declare all the course buttons onclick
right now isnt necessary because we have only one active course */
document.querySelector(".courseCard__button").onclick= function(){
    SpinerShow(true);
    ScrolllUp();
    CreateSubSectionCourse(0);
    document.querySelectorAll(".mainSection__subSection")[0].classList.toggle("display-y");
    document.querySelectorAll(".mainSection__subSection")[0].classList.toggle("display-n");
    document.querySelectorAll(".mainSection__subSection")[1].classList.toggle("display-y");
    document.querySelectorAll(".mainSection__subSection")[1].classList.toggle("display-n");
    SpinerShow(false);
    CreateSubSectionModuleButtonLinks();
};


/* Course CreateModule buttons links (link to create the respective subSection__module) */
function CreateSubSectionModuleButtonLinks(){
    let $moduleItem= document.querySelectorAll(".mainSection__subSection")[1].querySelectorAll(".course__modulesList-item");
    for (let i = 0; i < $moduleItem.length; i++) {        
        $moduleItem[i].onclick= function(){
            SpinerShow(true);
            ScrolllUp();
            CreateSubSectionModule(i);
            document.querySelectorAll(".mainSection__subSection")[1].classList.toggle("display-y");
            document.querySelectorAll(".mainSection__subSection")[1].classList.toggle("display-n");
            document.querySelectorAll(".mainSection__subSection")[2].classList.toggle("display-y");
            document.querySelectorAll(".mainSection__subSection")[2].classList.toggle("display-n");
            SpinerShow(false);
        };
    }    
}

/* Create subSection__module */
function CreateSubSectionModule(moduleIndex){
    let $moduleSubSection= document.querySelectorAll(".mainSection__subSection")[2];
    let $fragment= document.createDocumentFragment();
    //let moduleData= allCoursesModulesData[currentCourse][moduleIndex];
    let moduleData= coursesFullData[currentCourse][2][moduleIndex];
    let $template= document.getElementById("template-subSection__module").content;
    
    /* Checking if is necessary create the course subsection */
    if(moduleIndex!=currentCourseModule){
        currentCourseModule= moduleIndex;

        /* cloning the template */
        let $cloned= document.importNode($template, true);

        /* Setting header data */
        let $header= $cloned.querySelector("h2");
        $cloned.querySelector("h2").textContent= moduleData.title;

        /* Setting module video url */
        $cloned.getElementById("course__moduleVideo").setAttribute("src", "https://www.youtube.com/embed/"+ moduleData.urlId +"?enablejsapi=1&html5=1");

        /* Description */
        $cloned.querySelector(".module__description").insertAdjacentText("beforeend", moduleData.description);   
        
        /* Cleaning the old module content */
        $moduleSubSection.innerHTML = '';

        /* Adding the new module content to the HTML */
        $fragment.appendChild($cloned);
        $moduleSubSection.appendChild($fragment);

        /* Adding the show modules functionality */
        ShowAgainModules();
    }
        
}

/* Show Modules (module__control-item) */
function ShowAgainModules(){
    let $mainSection = document.querySelectorAll(".mainSection__subSection");
    $mainSection[2].querySelectorAll(".module__control-item")[1].onclick= function(){
        SpinerShow(true);
        $mainSection[1].classList.replace("display-n", "display-y");
        $mainSection[2].classList.replace("display-y", "display-n");
        SpinerShow(false);
    };
}


/* Create Src or SrcSet functionality */
function CreateSrcOrSrcSet(mainSectionIndex, dirName, type){
    let value= "./Sources/Images/MainSection_";

    /* Check the read.me to verify the mainSectios index */
    switch(mainSectionIndex){
        case 0:
            value+= "Home/";
        break;

        case 1:
            value+= "Courses/";
        break;

        case 2:
            value+= "Questions/";
        break;

        case 3:
            value+= "SupportUs/";
        break;

        case 4:
            value+= "AboutUs/";
        break;
    }

    /* If type== true then, we create the src value */
    if(type){
        value+= dirName +"/" +dirName +"0480px.png";
    }
    /* Else, we create the srcSet value */
    else{
        let preValue= value +dirName +"/" +dirName;
        value= "";
        value+= preValue +"0320px.webp 320w,\n";
        value+= preValue +"0360px.webp 360w,\n";
        value+= preValue +"0480px.webp 480w";
    }
    
    /* Returning the expected source value */
    return value;
}