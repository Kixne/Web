let isHomeSection= true;
let $nav= document.querySelectorAll(".nav");
let $menuButton= document.querySelectorAll(".menuButton");

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
    console.log("Section " +sectionIndex);
  }

  let $sectionCardButton= document.querySelector(".mainSection").querySelectorAll(".sectionCard__button");
  for (let i = 0; i < 4; i++) {
    $sectionCardButton[i].onclick= function(){
      isHomeSection= false;
      ShowMenuButton(isHomeSection);
      SwitchToMainSection(i);
    }
  }
}