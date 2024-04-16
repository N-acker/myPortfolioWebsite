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


function openMenu(){
    sidemeu.style.right = "0px";
}

function closeMenu(){
    sidemeu.style.right = "-200px";
}


// for the google form 
{/* <form name="submit-to-google-sheet">
  <input name="email" type="email" placeholder="Email" required>
  <button type="submit">Send</button>
</form>


  const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  }) */}
