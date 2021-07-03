
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


/* methods buttons onclick "listeners" */

/********* End Toggle methodDetails visibility function *********/





/* return to courses cards button */
function ReturnToCoursesCards(){
    SpinerShow(true);
    ScrolllUp();
    let $mainSection = document.querySelectorAll(".mainSection__subSection");
    $mainSection[0].classList.replace("display-n", "display-y");
    $mainSection[1].classList.replace("display-y", "display-n");
    SpinerShow(false);
}


/* Course CreateModule buttons links (link to create the respective subSection__module) */
function CreateSubSectionModuleButtonLinks(){
    let $moduleItem= document.querySelectorAll(".mainSection__subSection")[1].querySelectorAll(".course__modulesList-item");
    for (let i = 0; i < $moduleItem.length; i++) {        
        $moduleItem[i].onclick= function(){
            SpinerShow(true);
            ScrolllUp();
            CreateModuleSubSecrion(i);
            document.querySelectorAll(".mainSection__subSection")[1].classList.toggle("display-y");
            document.querySelectorAll(".mainSection__subSection")[1].classList.toggle("display-n");
            document.querySelectorAll(".mainSection__subSection")[2].classList.toggle("display-y");
            document.querySelectorAll(".mainSection__subSection")[2].classList.toggle("display-n");
            SpinerShow(false);
        };
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










/********* ********* Block. Create module content ********* *********/

/* Funtion. Create course subSection */
function CreateCourseSubSection(courseIndex){
    if( currentCourse!= courseIndex){
        currentCourse= courseIndex;
        currentModule= -1;
        let courseData= CoursesData[currentCourse];
        
        /* Making the necesary elements to create the content */
        let $courseSubSection= document.querySelectorAll(".mainSection__subSection")[1],
        $template= document.getElementById("template-subSection__course").content,
        $fragment= document.createDocumentFragment(),
        $cloned= document.importNode($template, true);
    
        /* Setting image data */
        $cloned.querySelector("img").setAttribute("src", CreateSrcOrSrcSet(1, courseData.topic, true));
        $cloned.querySelector("img").setAttribute("srcset", CreateSrcOrSrcSet(1, courseData.topic, false));
        $cloned.querySelector("img").setAttribute("alt", courseData.imageAlt);
        $cloned.querySelector("img").setAttribute("title", courseData.imageTitle);
        
        /* Setting header data */
        $cloned.querySelector(".course__header-title").textContent= courseData.title;
        
        /* Setting description pharraph data */
        $cloned.querySelector(".course__description").textContent= courseData.descriptionCourse;
        
        /* Setting course "meta" data */
        $cloned.querySelectorAll(".Kx-icon")[0].textContent= courseData.release;
        $cloned.querySelectorAll(".Kx-icon")[1].textContent= courseData.lastUpdate;
        $cloned.querySelectorAll(".Kx-icon")[2].textContent= courseData.quality;
        
        /* Setting requirements data */
        let $list1= $cloned.querySelector(".container-genericElement").querySelector(".list");
        courseData.requirements.forEach(element => {
            let $item= document.createElement("li");
            $item.classList.add("listItem");
            /* Just create the item */
            if( typeof element== "string"){
                $item.textContent= element;
                $list1.appendChild($item);
            }
            /* Create the item and his nested elements */
            else{
                $item.textContent= element[0];
                let $subList= document.createElement("ul");
                $subList.classList.add("listSubItem")
                $item.appendChild($subList);
                for (let i= 1; i< element.length; i++) {
                    let $subItem= document.createElement("li");
                    $subItem.textContent= element[i];
                    $subList.appendChild($subItem);
                }
                $list1.appendChild($item);
            }
        });
        
        /* Setting optional requirements data */
        let $list2= $cloned.querySelector(".container-genericElement").querySelectorAll(".list")[1];
        courseData.optionalRequirements.forEach(element => {
            let $item= document.createElement("li");
            $item.classList.add("listItem");
            /* Just create the item */
            if( typeof element== "string"){
                $item.textContent= element;
                $list2.appendChild($item);
            }
            /* Create the item and his nested elements */
            else{
                $item.textContent= element[0];
                let $subList= document.createElement("ul");
                $subList.classList.add("listSubItem")
                $item.appendChild($subList);
                for (let i= 1; i< element.length; i++) {
                    let $subItem= document.createElement("li");
                    $subItem.textContent= element[i];
                    $subList.appendChild($subItem);
                }
                $list2.appendChild($item);
            }
        });
        
        
        /* Setting modules data */
        $cloned.querySelectorAll(".Kx-icon")[3].classList.add(courseData.iconName);
        let $modulesList= $cloned.querySelectorAll(".container-genericElement")[1].querySelector("ul");
        
        $modulesList.classList.add("listItem");
        
        for (let i= 0; i< courseData.modules.length; i++) {
            let $element= courseData.modules[i],
                $item= document.createElement("li"),
                $span= document.createElement("span");

            $item.classList.add("course__modulesList-item");
            $item.textContent= $element.title;
            $span.classList.add("Kx-icon", "Kx-clock");
            $span.textContent= $element.duration;
            $item.appendChild($span);
            $modulesList.appendChild($item);
        }
        
        
        /* Setting resources data */
        //let $resoutces= $cloned.querySelectorAll(".container-genericElement")[1].querySelectorAll("ul")[1].querySelectorAll("");
        let $resources= $cloned.querySelectorAll(".resources__item");
        $resources[0].setAttribute("download", courseData.manualName +".pdf");
        $resources[0].setAttribute("href", "../Sources/Manuals/English/" +courseData.manualName +".pdf");
        $resources[1].setAttribute("download", courseData.manualName +".pdf");
        $resources[1].setAttribute("href", "../Sources/Manuals/English/" +courseData.manualName +".pdf");
        $resources[2].setAttribute("download", courseData.manualName +"-exercices.pdf");
        $resources[2].setAttribute("href", "../Sources/Manuals/English/" +courseData.manualName +".pdf");

        /* Setting return to courses button onclick */
        $cloned.getElementById("btnShowCourseCards").onclick= function(){
            ReturnToCoursesCards();
        }
    
        /* Adding the content to the document */
        $fragment.appendChild($cloned);
        $courseSubSection.appendChild($fragment);
    }
}

/* Funtion. Create module subSection */
function CreateModuleSubSection(moduleIndex){
    SpinerShow(true);
    SpinerShow(false);
}

/********* ********* End Block. Create module content ********* *********/