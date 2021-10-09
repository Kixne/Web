let isHomeSection= true;
let $nav= document.querySelectorAll(".nav");
let $menuButton= document.querySelectorAll(".menuButton");

/* Functions scope */{
 /* Scroll up the page */
 function ScrollUp(){
  let $documentScroll= document.documentElement,
  $mainScroll= document.querySelector("main");
  if($documentScroll.scrollTop>0){$documentScroll.scrollTo(0, 0);}
  else if($mainScroll.scrollTop> 0){$mainScroll.scrollTo(0, 0);}
 }

 /* gets true (show) or false (hide) */
 function ShowHideSpiner(show){
  let $spiner= document.querySelector(".container-spiner");
  if(show){
   document.querySelector(".spiner").classList.add("spin")
   $spiner.classList.replace("display-n", "display-y");
  }
  else{
   setTimeout(function(){
    document.querySelector(".spiner").classList.remove("spin")
    $spiner.classList.replace("display-y", "display-n");
   }, 500);
  }
 }

 /* setting buttons-copy */
 document.querySelectorAll(".copyableElement__button").forEach($copyButton => {
  $copyButton.onclick= function(){
   CopyElement(this.parentElement);
   /* setTimeout(() => { this.innerText= "Copy"; }, 1000); */
  }
 });
 function CopyElement($copyableElementContainer){
  /* Selecting the value */
  let $copyableItem= $copyableElementContainer.querySelector(".copyableElement"),
  $copyButton= $copyableElementContainer.querySelector(".copyableElement__button");
  $copyableItem.select();
  $copyableItem.setSelectionRange(0, -1); /* For mobile devices */;
  /* Copying the value */
  navigator.clipboard.writeText($copyableItem.value);
  console.log("copied element");
  /* Showing that the value has been copied */
  $copyButton.innerText= "Copied";
  setTimeout(() => { $copyButton.innerText= "Copy"; }, 1000);
 }

 /* GenericElement button, hider data */
 document.querySelectorAll(".genericElement__button").forEach(button => {
  button.onclick= function(){
   this.parentElement.querySelector(".genericElement__data").classList.toggle("display-n");
   this.parentElement.querySelector(".genericElement__data").classList.toggle("display-y");
  }
 });

 /* Create course section Src or SrcSet  */
 function CreateSrcOrSrcSet(dirName, type){
  let value= "./Sources/Images/MainSection_Courses/";

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
  }
  
  /* Returning the expected source value */
  return value;
 }
}

/* Nav scope */{
 /* First load. show menu cheker */
 if(document.documentElement.clientWidth>=960){
  $nav[1].classList.replace("display-n", "display-y");
  $menuButton[0].classList.replace("display-y", "display-n")
 }

 /* Vp resized. show menus cheker */
 window.addEventListener("resize", function(){
  if(document.documentElement.clientWidth<960){
   $nav[0].classList.replace("display-y", "display-n");
   $nav[1].classList.replace("display-y", "display-n");
   if (isHomeSection) {
    $menuButton[0].classList.replace("display-n", "display-y");
   }
   else{
    $menuButton[1].classList.replace("display-n", "display-y");
   }
  }
  if(document.documentElement.clientWidth>=960){
   $nav[1].classList.replace("display-n", "display-y");
   $nav[0].classList.replace("display-y", "display-n");
   if (isHomeSection) {
    $menuButton[0].classList.replace("display-y", "display-n");
   }
   else{
    $menuButton[1].classList.replace("display-y", "display-n");
   }
  }
 });

 /* Menu buttons toggler */
 function ShowMenuButton(x){
    if(document.documentElement.clientWidth<960){
      $nav[1].classList.replace("display-y", "display-n");
      if(x){
        $menuButton[0].classList.replace("display-n", "display-y");
        $menuButton[1].classList.replace("display-y", "display-n");
      }
      else{
        $menuButton[0].classList.replace("display-y", "display-n");
        $menuButton[1].classList.replace("display-n", "display-y");
      }
    }
 }

 /* Menu visibility toglers */
 for (let i = 0; i < 2; i++) {
    $menuButton[i].onclick= function(){
      $nav[i].classList.toggle("display-n");
      $nav[i].classList.toggle("display-y");
    }
    document.querySelectorAll(".nav__header")[i].onclick= function(){
      $nav[i].classList.toggle("display-n");
      $nav[i].classList.toggle("display-y");
    }
    document.querySelectorAll(".nav__closeMenu")[i].onclick= function(){
      $nav[i].classList.toggle("display-n");
      $nav[i].classList.toggle("display-y");
    }
 }

 /* .Languages toggler */
 let languages= document.querySelectorAll(".nav")[1].querySelectorAll(".nav__item")[3];
 languages.onclick= function(){
  languages.querySelectorAll(".arrow")[0].classList.toggle("display-n");
  languages.querySelectorAll(".arrow")[0].classList.toggle("display-yi");
  languages.querySelectorAll(".arrow")[1].classList.toggle("display-n");
  languages.querySelectorAll(".arrow")[1].classList.toggle("display-yi");
  languages.querySelector(".languages").classList.toggle("display-yi");
  languages.querySelector(".languages").classList.toggle("display-n");
 }

 /* Section toggler buttons (.nav__items) */
 let $menuItem= $nav[1].querySelectorAll(".nav__item");
 $menuItem[0].onclick= function(){
  isHomeSection= true;
  ShowMenuButton(isHomeSection);
  SwitchToMainSection(0);
 }
 for (let i = 1; i < 6; i++) {
  if(i==3){ continue; }
  $menuItem[i].onclick= function(){
   isHomeSection= false;
   ShowMenuButton(isHomeSection);
   if (i<3) { SwitchToMainSection(i); }
   else{ SwitchToMainSection(i-1); }
  }
 }
}

/* Main sections scope */{
 function SwitchToMainSection(sectionIndex){
  ShowHideSpiner(true);
  ScrollUp();
  let $section= document.querySelectorAll(".mainSection");
  for (let i = 0; i < $section.length; i++) {
   if(i==sectionIndex){
    $section[i].classList.replace("display-n", "display-y");
   }
   else{
    $section[i].classList.replace("display-y", "display-n");
   }
  }
  ShowHideSpiner(false);
 }

 /* secttionCard button onclick */
 let $sectionCardButton= document.querySelector(".mainSection").querySelectorAll(".sectionCard__button");
 for (let i = 0; i < 4; i++) {
  $sectionCardButton[i].onclick= function(){
   isHomeSection= false;
   ShowMenuButton(isHomeSection);
   SwitchToMainSection(i+1);
   if($nav[0].classList.contains("display-y")){
    $nav[0].classList.replace("display-y", "display-n");
   }
  }
 }
}

/* Courses */{
 var currentCourse= -1,
  currentModule= -1;

 function SwitchToCourseSection(index){
  ScrollUp();
  let $courseSection= document.querySelectorAll(".mainSection")[1].querySelectorAll(".mainSection__subSection");
  for (let i = 0; i < 3; i++) {
   if(i==index){
    $courseSection[i].classList.replace("display-n", "display-y");
   }
   else{
    ShowHideSpiner(true);
    $courseSection[i].classList.replace("display-y", "display-n");
    ShowHideSpiner(false);
   }
  }
 }

 function CreateCourseSection(index){
  /* index= courseIndex to be created */
  if(currentCourse!= index){
   currentCourse= index;
   currentModule= -1;

   let courseData= CoursesData[currentCourse];

   /* Elements to create the content */
   let $template= document.getElementById("template-courseSection").content,
   $courseSection= document.querySelectorAll(".mainSection")[1].querySelectorAll(".mainSection__subSection")[1],
   $fragment= document.createDocumentFragment(),
   $cloned= document.importNode($template, true);

   /* Setting image data */
   $cloned.querySelector("img").setAttribute("src", CreateSrcOrSrcSet(courseData.topic, true));
   $cloned.querySelector("img").setAttribute("srcset", CreateSrcOrSrcSet(courseData.topic, false));
   $cloned.querySelector("img").setAttribute("alt", courseData.imageAlt);
   $cloned.querySelector("img").setAttribute("title", courseData.imageTitle);

   /* Setting header data */
   $cloned.querySelector(".course__header-title").textContent= courseData.title;
   $cloned.querySelector(".course__header-text").textContent= courseData.descriptionCourse;
       
   /* Setting course "meta" data */
   $cloned.querySelectorAll(".Kx-icon")[0].textContent= courseData.modules.length;
   $cloned.querySelectorAll(".Kx-icon")[1].textContent= "##:##:##";
   $cloned.querySelectorAll(".Kx-icon")[2].textContent= courseData.release;
   $cloned.querySelectorAll(".Kx-icon")[3].textContent= courseData.lastUpdate;
   
   /* Setting requirements data */
   let $list1= $cloned.querySelector(".container").querySelectorAll(".list")[1];
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
   let $list2= $cloned.querySelector(".container").querySelectorAll(".list")[2];
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

   /* Setting resources data */
   let $resources= $cloned.querySelectorAll(".resourceItem");
   $resources[0].setAttribute("download", courseData.manualName +".pdf");
   $resources[0].setAttribute("href", "../Sources/Manuals/English/" +courseData.manualName +".pdf");
   /* remember remove html display -n
   $resources[1].setAttribute("download", courseData.manualName +".pdf");
   $resources[1].setAttribute("href", "../Sources/Manuals/English/" +courseData.manualName +".pdf");
   $resources[2].setAttribute("download", courseData.manualName +"-exercices.pdf");
   $resources[2].setAttribute("href", "../Sources/Manuals/English/" +courseData.manualName +".pdf"); */

   /* Setting modules data */
   let $modulesList= $cloned.querySelector(".courseModules");
   $modulesList.querySelector(".Kx-icon").classList.add(courseData.iconName);
   
   for (let i= 0; i< courseData.modules.length; i++) {
    let $element= courseData.modules[i],
    $item= document.createElement("li"),
    $moduleImg= document.createElement("img"),
    $moduleDiv= document.createElement("div"),
    $span= document.createElement("span");

    $item.classList.add("courseModules__module");
    $item.onclick= function(){
     CreateModuleSection(i);
     if(player01===true){
      CreateYoutubePlayer01();
     }
     SwitchToCourseSection(2);
    };

    /* Setting img data */
    $moduleImg.classList.add("courseModules__module-image");
    $moduleImg.setAttribute("alt", "Module image")
    if(i<10){
     $moduleImg.setAttribute("src", "./Sources/Images/MainSection_Courses/" +courseData.topic +"/Modules/"  + "Module0" + i +".png");
     $moduleImg.setAttribute("srcset", "./Sources/Images/MainSection_Courses/" +courseData.topic +"/Modules/"  + "Module0" + i +".webp");
    }
    else{
     $moduleImg.setAttribute("src", "./Sources/Images/MainSection_Courses/" +courseData.topic +"/Modules/"  + "Module" + i +".png");
     $moduleImg.setAttribute("srcset", "./Sources/Images/MainSection_Courses/" +courseData.topic +"/Modules/"  + "Module" + i +".webp");
    }

    /* Setting module name */
    $moduleDiv.innerText= $element.title;

    /* Setting span data */
    $span.classList.add("Kx-icon", "Kx-play-button");
    $span.innerText= $element.duration;

    /* Adding the content to the module */
    $item.appendChild($moduleImg);
    $moduleDiv.appendChild($span);
    $item.appendChild($moduleDiv);
    $modulesList.appendChild($item);
   }

   /* Adding the content to the document */
   $fragment.appendChild($cloned);
   $courseSection.innerHTML="";
   $courseSection.appendChild($fragment);
  }
 }

 function CreateModuleSection(currentModuleIndex){
  if(!(currentModule== currentModuleIndex)){
   currentModule= currentModuleIndex;
   
   let moduleData= CoursesData[currentCourse].modules[currentModuleIndex];

   /* Elements to create the content */
   let $template= document.getElementById("template-moduleSection").content,
   $moduleSection= document.querySelectorAll(".mainSection")[1].querySelectorAll(".mainSection__subSection")[2],
   $fragment= document.createDocumentFragment(),
   $cloned= document.importNode($template, true);

   /* Setting video data */
   $cloned.querySelector(".container-video__video").setAttribute("src", "https://www.youtube.com/embed/" +moduleData.youtubeId +"?controls=0&rel=0&disablekb=0&enablejsapi=1");

   /* Setting header data */
   $cloned.querySelector(".module__header-title").textContent= moduleData.title;
   $cloned.querySelector(".module__header-text").textContent= moduleData.description;

   /* Setting module "meta" data */
   $cloned.querySelectorAll(".Kx-icon")[0].textContent= moduleData.content.length;
   $cloned.querySelectorAll(".Kx-icon")[1].textContent= moduleData.duration;
   $cloned.querySelectorAll(".Kx-icon")[2].textContent= moduleData.lastUpdate;
   $cloned.querySelectorAll(".Kx-icon")[3].textContent= moduleData.release;

   /* Setting module content (temary) */
   let $moduleContent= $cloned.querySelector(".moduleContentList"),
   $contentFragment= document.createDocumentFragment();

   /* Traversing module themes */
   moduleData.content.forEach(moduleTheme => {
    let $itemTheme= document.createElement("li"),
    $itemSpan= document.createElement("span");
    
    $itemSpan.classList.add("Kx-icon", "Kx-clock");
    /* setting module theme */
    $itemTheme.textContent= moduleTheme[0];
    if(typeof moduleTheme[1] == "string"){
     $itemSpan.textContent= moduleTheme[1];
     $itemTheme.appendChild($itemSpan);
     
     $itemTheme.onclick= function(){
      ScrollUp();
      player01.seekTo(ModuleTime(moduleTheme[1]));
     }
    }
    /* setting module nested themes */
    else{
     let $nestedThemes= document.createElement("ul");

     moduleTheme[1].forEach(nestedModuleTheme => {
      let $nestedItemTheme= document.createElement("li"),
      $nestedItemSpan= document.createElement("span");
      
      $nestedItemTheme.textContent= nestedModuleTheme[0];
      $nestedItemSpan.textContent= nestedModuleTheme[1];
      $nestedItemSpan.classList.add("Kx-icon", "Kx-clock");
      $nestedItemTheme.appendChild($nestedItemSpan);
      $nestedItemTheme.onclick= function(){
       ScrollUp();
       player01.seekTo(ModuleTime(nestedModuleTheme[1]));
      }

      $nestedThemes.appendChild($nestedItemTheme)
     });

     $itemTheme.style.setProperty("flex-direction", "column");
     $itemTheme.style.setProperty("padding-right", "0");
     $itemTheme.appendChild($nestedThemes);
    }

    $moduleContent.appendChild($itemTheme);
   });
   $moduleContent.appendChild($contentFragment);

   /* Adding the content to the document */
   $fragment.appendChild($cloned);
   $moduleSection.innerHTML="";
   $moduleSection.appendChild($fragment);
  }
 }

 function ModuleTime(x){
  let preTime= x.split(":"),
  time;

  preTime.reverse();
  time= parseInt(preTime[0])+ (parseInt(preTime[1])*60);
  if( preTime[2]!=undefined){ time+= (parseInt(preTime[2])*3600);}
  if(time>0){ time-=1;}
  return time;
 }
 
 let $courseCardButton= document.querySelectorAll(".courseCard__body-button");
 $courseCardButton.forEach(element => {
  element.onclick= function(){
   alert("Course available coming soon!")
  }
 });
 for (let i = 0; i < $courseCardButton.length; i++) {
  if(i==0){
   $courseCardButton[i].onclick= function(){
    CreateCourseSection(i);
    SwitchToCourseSection(1);
   }
   continue;
  }
  $courseCardButton[i].onclick= function(){alert("Course available coming soon!");}
 }
}

/* Youtube videos scope */{
 var player01, player02;

 function onYouTubeIframeAPIReady() {
  player01= true;
  player02 = new YT.Player('player-aboutUs', {
   events:{
    'onStateChange': onPlayerStateChange
   }
  });
 }

 function CreateYoutubePlayer01(){
  player01 = new YT.Player('player-module', {
   events: {
    'onStateChange': onPlayerStateChange
   }
  });
 }

 function onPlayerStateChange(event) {
  switch (event.data) {
   case 0: //0== video ended
    event.target.stopVideo();
    break;

   case 1: //1== video play
    //stop the other player
    break;
  }
 }
}