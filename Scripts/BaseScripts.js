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

/********* ScrollUp functionality *********/
function ScrolllUp(){
    let currentScroll= document.documentElement.scrollTop;
    if(currentScroll> 0){ window.scrollTo( 0, 0); }
}


/********* Toggle nav visibility function*********/
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

/* Language picker toggler buttons
(Borrows nav scripts) */
document.querySelectorAll(".btnMenu")[1].onclick= function(){
    NavShow(1);
}
document.querySelectorAll(".nav__header-text")[1].onclick= function(){
    NavShow(1);
}
document.querySelectorAll(".btnMenuClose")[1].onclick= function(){
    NavShow(1);
}
/********* Toggle nav visibility function*********/


/********* ToglingToMainSection function *********/
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
const allCoursesData=[
    /* If you change this order of the courses, ALSO MAKE SURE you sort
    the array with the courses modules */

    /* Course 00 (Web anatomy HTML) */{
        title: "Web anatomy <HTML>",
        imgAlt: "HTML course image",
        imgTitle: "HTML course",
        imgSrc: "./Sources/Images/HTML/CourseHTML0480px.webp",
        quality: "##.#",
        version: "21.##.##",
        duration: "##:##",
        description: "HTML and HTML5 course from scratch. We will learn what html is, how its content structure works and how to create semantically and syntactically correct elements, by using good practices and coding standards.",
    },

    /* Course 01 (CourseName) */{
        title: "Course01 title",
        imgAlt: "Course01 alt",
        imgTitle: "Course01 title",
        imgSrc: "../Tests/Sources/Images/Test/Test0320px.png",
        quality: "##.#",
        version: "21.##.##",
        duration: "##:##",
        description: "Some example text for the course01",
    },
];

const allCoursesModulesData=[
    /* Course 00 modules (Web anatomy HTML) */[
        
        /*Module 00 */{
            title: "Module 00 name",
            duration: "##:##",
            src: "jONnGQOeA4M",
            description: "This is an example module 00 description text",
        },
        
        /*Module 01 */{
            title: "Module 01 name",
            duration: "##:##",
            src: "jONnGQOeA4M",
            description: "This is an example module 01 description text",
        },
        
        /*Module 02 */{
            title: "Module 02 name",
            duration: "##:##",
            src: "jONnGQOeA4M",
            description: "This is an example module 02 description text",
        },
    ],

    /* Course 01 modules (courseName) */[
        
        /*Module 00 */{
            title: "Module 00 name",
            duration: "##:##",
            src: "jONnGQOeA4M",
            description: "This is an example module 00 description text",
        },
    
        /*Module 01 */{
            title: "Module 01 name",
            duration: "##:##",
            src: "jONnGQOeA4M",
            description: "This is an example module 01 description text",
        },
    ],
];

const allCoursesResourcesData=[
    /* Follow this order
    printable manual download link
    digital manual download link
    Proposed exercices download link
    Modules videos maybe link to copy
     */

    /* Course 00 resources (Web anatomy HTML) */[
        "",
        "",
        "",
        "",
    ],
];
 

function CreateSubSectionCourse(courseIndex){
    let $courseSubSection= document.querySelectorAll(".mainSection__subSection")[1],
    $fragment= document.createDocumentFragment(),
    $template= document.getElementById("template-subSection__course").content,
    courseData= allCoursesData[courseIndex];
    
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
        $cloned.querySelector("img").setAttribute("title", courseData.imgTitle);
        $cloned.querySelector("img").setAttribute("alt", courseData.imgAlt);
        $cloned.querySelector("img").setAttribute("src", courseData.imgSrc);
        
        /* Setting courseDetails items data */
        let $courseDetail= $cloned.querySelectorAll(".course__details-item");
        $courseDetail[0].querySelector("span").textContent= courseData.quality;
        $courseDetail[1].querySelector("span").textContent= courseData.version;
        $courseDetail[2].querySelector("span").textContent= courseData.duration;
        
        /* Setting course details data */
        $cloned.querySelector("p").insertAdjacentText("beforeend", courseData.description);
        
        /* Setting modules list data */
        let moduleData= allCoursesModulesData[currentCourse];
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
    let moduleData= allCoursesModulesData[currentCourse][moduleIndex];
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
        $cloned.getElementById("course__moduleVideo").setAttribute("src", "https://www.youtube.com/embed/"+ moduleData.src +"?enablejsapi=1&html5=1");

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