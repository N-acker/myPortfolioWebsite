let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");
let sidemeu = document.getElementById("sideMenu");

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

// these are for opening and closing the navigation menu while responsive
function openMenu(){
    sidemeu.style.right = "0px";
}

function closeMenu(){
    sidemeu.style.right = "-200px";
}


// for the form submission in the contact section connectng it to google sheets

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyGY8SuBpWHNPG3WF6XYyi3It2xBMz3n8Od-Jw-ctPW5MInSa_ZdHm6aLiTXZmei_CC/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

