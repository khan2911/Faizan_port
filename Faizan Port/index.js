var tablinks = document.getElementsByClassName("tab-links");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

