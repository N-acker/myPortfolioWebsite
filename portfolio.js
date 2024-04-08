let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

// this is basically the JS for the about section
function opentab(tabname){

    /* loops through all the tabLinks and removes the one thats active (with the blue line)*/
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }

    /* loops though all the tabContents aka the actual info and 
    removes the contents from the tab thats active aka the one that displays the contents*/
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }

    
    // this makes the blue underline appear under the button thats been clicked
    event.currentTarget.classList.add("active-link");
    // this makes the information that is supposed to be displayed upon clicking 
    document.getElementById(tabname).classList.add("active-tab");
}