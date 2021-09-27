/********* ********* Block basics ********* *********/
document.querySelector(".courseCard__button").onclick= function(){
 CreateCourseSubSection(0); /* with loop 0 -> iterationNumber */
 SwitchToCourseSubSection(1);
};


/* Function ShowHide methodCard destails */
function ShowHideMethodDetails(x){
    let $methodCards= document.querySelectorAll(".methodCard__details");
    $methodCards[x].classList.toggle("display-y");
    $methodCards[x].classList.toggle("display-n");
}

/* Function Switch to module */
function SwitchToModule(moduleIndex){
    alert("Switching to module " +moduleIndex);
}

/* Function Setting onclick show/hide methods details */
function SetShowHideMethodDetails(){
    let $methodCardButtons= document.querySelectorAll(".methodCard__button");
    for (let i = 0; i < $methodCardButtons.length; i++) {
        $methodCardButtons[i].onclick= function(){
            ShowHideMethodDetails(i);
        }
    }
}
SetShowHideMethodDetails();

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
SetCopyElements();

/* Function Create image src or srcset */



/********* ********* End Block basics ********* *********/













/********* ********* Block courses ********* *********/

var currentCourse= -1,
    currentModule= -1;

/* Function Create module subSection */
function CreateModuleSubSection(moduleIndex){
    if(currentModule!=moduleIndex){
        currentModule= moduleIndex;
        let moduleData= CoursesData[currentCourse].modules[moduleIndex];
/*         let moduleData= CoursesData[currentCourse].modules[moduleIndex]; */

        /* Making the necesary elements to create the content */
        let $moduleSubSection= document.querySelectorAll(".mainSection__subSection")[2],
        $template= document.getElementById("template-subSection__module").content,
        $fragment= document.createDocumentFragment(),
        $cloned= document.importNode($template, true);

        /* Setting video data */
        $cloned.querySelector(".container-video__video").setAttribute("src", "https://www.youtube.com/embed/" +moduleData.urlId +"?enablejsapi=1&html5=1");
        
        /* Setting onclick module controller buttons */
        $cloned.querySelector(".module__controls-control").onclick= function(){
            if(currentModule>0){
                SwitchModule(currentModule-1);
            }
            else{
                alert("No more previous modules")
            }
        }
        $cloned.querySelectorAll(".module__controls-control")[1].onclick= function(){
            SwitchToCourseSubSection(1);
        }
        $cloned.querySelectorAll(".module__controls-control")[2].onclick= function(){
            if(currentModule+1< CoursesData[currentCourse].modules.length){
                SwitchModule(currentModule+1);
            }
            else{
                alert("No more modules")
            }
        }
        
        /* Setting header data */
        $cloned.querySelector(".module__header-title").textContent= moduleData.title;
        
        /* Setting description pharraph data */
        $cloned.querySelector(".module__description").textContent= moduleData.description;

        /* Setting module "meta" data */
        $cloned.querySelector(".list").querySelector(".Kx-icon").textContent= moduleData.release;
        $cloned.querySelector(".list").querySelectorAll(".Kx-icon")[1].textContent= moduleData.lastUpdate;
        $cloned.querySelector(".list").querySelectorAll(".Kx-icon")[2].textContent= moduleData.duration;

        /* Setting module content data */
        let $contentList= $cloned.querySelectorAll(".container-genericElement")[1].querySelector("ul");
        for (let i= 0; i< moduleData.content.length; i++) {
            let $element= moduleData.content[i],
                $item= document.createElement("li"),
                $span= document.createElement("span");

            $item.onclick= function(){
                alert("This button should position the module at " +$element.time)
            };
            $item.classList.add("module__contentList-item");
            $item.textContent= $element.title;
            $span.classList.add("Kx-icon", "Kx-clock");
            $span.textContent= $element.time;
            $item.appendChild($span);
            $contentList.appendChild($item);
        }

        /* Setting return to courses button onclick */
        $cloned.querySelector(".btnShowCourseCards").onclick= function(){
            SwitchToCourseSubSection(0);
        }
    
        /* Adding the content to the document */
        $fragment.appendChild($cloned);
        $moduleSubSection.innerHTML="";
        $moduleSubSection.appendChild($fragment);
    }
}

/********* ********* End Block courses ********* *********/