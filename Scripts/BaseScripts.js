
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


/* Create Src or SrcSet functionality */
function CreateSrcOrSrcSet(mainSectionIndex, dirName, type){
    let value= "../Sources/Images/MainSection_";

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
        value+= preValue +"0480px.webp 480w,\n";
        value+= preValue +"0512px.webp 512w,\n";
        value+= preValue +"0534px.webp 534w,\n";
        value+= preValue +"0600px.webp 600w,\n";
        value+= preValue +"0640px.webp 640w,\n";
        value+= preValue +"0683px.webp 683w,\n";
        value+= preValue +"0720px.webp 720w,\n";
        value+= preValue +"0768px.webp 768w,\n";
        value+= preValue +"0960px.webp 960w,\n";
        value+= preValue +"1024px.webp 1024w,\n";
        value+= preValue +"1068px.webp 1068w,\n";
        value+= preValue +"1200px.webp 1200w";
    }
    
    /* Returning the expected source value */
    return value;
}








/********* ********* Block. Create module content ********* *********/

var currentCourse= -1,
    currentCourseModule= -1;

/* Courses data on english (After do this with conditions and json files) */
const CoursesData= [
    /* Course HTML*/{
        category: "Frontend Web Development",
        topic:"HTML",
        title: "Web anatomy: HTML5 course from scratch",
        iconName: "Kx-html",

        descriptionCard: "Let's make our ideas come true, learning to create the structure of all our HTML projects and applications.",
        descriptionCourse: "HTML & HTML5 course. Let's make our ideas come true, learning the semantic, the sintactic, the correct use and their correct combinations to create the structure of all our HTML projects and applications.",
        imageSrc: "../Sources/Images/MainSection_Courses/HTML/HTML0320px.webp",
        imageAlt: "Web anatomy: HTML5 course image",
        imageTitle: "Web anatomy: HTML5 course",
        imageSection: "1",
        release: "21.##.##",
        lastUpdate: "##.##.##",
        quality: "This is a new course",
        manualName: "WebAnathomy_HTML_en.v21.06",

        requirements: [
            "Computer or mobile device",
            [
                "Code editor or IDE",
                "For PC, we suggest the visual studio code program",
                "For mobile, we suggest the Acode app",
            ],
            [
                "Visualizator",
                "In the case of using PC, it is a browser (We do not recommend IE)",    
                "In the case of using a phone, it can be a browser or the same application we have downloaded",
            ]
        ],

        optionalRequirements: [
            "Basic computer course"
        ],

        modules: [
            {
                title: "Introduction to HTML",
                description: "Sample text for module description",
                duration: "00:00",
                urlId: "exampleYoutubeUrlId",
                moduleCopyLink: "sample url"
            }
        ]        
    }
];

/* After create a loop that declare all the course buttons onclick
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