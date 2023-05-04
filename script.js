// for about
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(argument){
    for(tab of tablinks){
        tab.classList.remove("active-link");
    }
    for(tab of tabcontents){
        tab.classList.remove("active-tab");
    }

    event.currentTarget.classList.add('active-link');

    document.getElementById(argument).classList.add("active-tab");
}

// sidebar 
const sidemenu = document.getElementById("sidemenu");

function closemenu(){
    sidemenu.style.right="-200px";
}

function openmenu(){
    sidemenu.style.right="0";
}






 


