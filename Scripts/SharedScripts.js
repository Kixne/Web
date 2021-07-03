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
        }, 1000);
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
    let $toggleMainSection= document.querySelectorAll(".mainSection");
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

/* Function ShowHide methodCard destails */
function ShowHideMethodDetails(x){
    let $methodCards= document.querySelectorAll(".methodCard__details");
    $methodCards[x].classList.toggle("display-y");
    $methodCards[x].classList.toggle("display-n");
}

/* Function Switch to course subSection */
function SwitchToCourseSubSection(subSectionIndex){
    ScrollUp();
    ShowHideSpiner(true);
    let $subSection= document.querySelectorAll(".mainSection")[1].querySelectorAll(".mainSection__subSection");
    for(i=0; i< 3; i++){
        /* Showing the expected main__mainSection */
        if(i==subSectionIndex){
            if(!$subSection[subSectionIndex].classList.contains("display-y")){
                $subSection[subSectionIndex].classList.toggle("display-y");
            }
            if($subSection[subSectionIndex].classList.contains("display-n")){
                $subSection[subSectionIndex].classList.toggle("display-n");
            }
        }    
        /* Hiding the unexpexted main__mainSection */
        else{
            ShowHideSpiner(false);
            if($subSection[i].classList.contains("display-y")){
                $subSection[i].classList.toggle("display-y");
            }
            if(!$subSection[i].classList.contains("display-n")){
                $subSection[i].classList.toggle("display-n");
            }
        }
    }
    ShowHideSpiner(false);
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

/* Function switch to mainSection X */



var currentCourse= -1,
    currentCourseModule= -1;

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

/* Function Create course section */
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
        
        for (let i= 0; i< courseData.modules.length; i++) {
            let $element= courseData.modules[i],
                $item= document.createElement("li"),
                $span= document.createElement("span");

            $item.onclick= function(){
                alert("Hello " +i);
            };
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
            SwitchToCourseSubSection(0);
        }
    
        /* Adding the content to the document */
        $fragment.appendChild($cloned);
        $courseSubSection.appendChild($fragment);
    }
}

/* Course card create course section butotnAfter create a loop that declare all the course buttons onclick
right now isnt necessary because we have only one active course */
document.querySelector(".courseCard__button").onclick= function(){
    CreateCourseSubSection(0); /* with loop 0 -> iterationNumber */
    SwitchToCourseSubSection(1);
};

/********* ********* End Block courses ********* *********/