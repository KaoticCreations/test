

/**---------------NAV open---------------- */


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */

function openNav() {
  document.getElementById("mySidebar").style.width = "300px"; 
  document.getElementById("openbtn").style.display = "none";

  //document.getElementById("kmain").style.margin = "auto";      
  document.getElementById("kContainrPhotoSht").style.marginLeft = "50px";      
  
}

 //Set the width of the sidebar to 0 and the left margin of the page content to 0 

function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";   
    document.getElementById("openbtn").style.display = "block";
    
    document.getElementById("kmainSono").style.marginLeft = "0px";
    document.getElementById("kHeadr").style.marginLeft = "0px";
    document.getElementById("kHeadr").style.transition= ".3";
    document.getElementById("kSidenav").style.marginLeft = "0px";
 
}

function dashImgClk(){

  document.getElementById("kmain").style.display = "none";
  document.getElementById("kheadr").style.display = "none"
  /*
   document.getElementsByClassName("btnfulView").style.marginLeft="200px";
   document.getElementsByid("kmain").style.display = "none";
   document.getElementsByid("kmain").style.backgroundcolor = "none";*/
}
function closeFulView(){

  document.getElementById("kmain").style.display = "block";
  document.getElementById("kheadr").style.display = "block"

}





/************************************************************************** */

/* Open when someone clicks on the span element */
function dashImgClk() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeFulView() {
  document.getElementById("myNav").style.width = "0%";
}
