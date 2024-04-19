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


//   for the carousel 

const initSlider = () => {
    // Get all carousel containers
    const carousels = document.querySelectorAll('.carousel-container');

    // Process each carousel individually
    carousels.forEach(carousel => {
        const divList = carousel.querySelector(".languages-tools-list");
        const prevButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");
        const sliderScrollbar = carousel.querySelector(".slider-scrollbar");
        const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
        const maxScrollLeft = divList.scrollWidth - divList.clientWidth;

        // handle scrollbar thumb drag
        scrollbarThumb.addEventListener("mousedown", (e) => {
            const startX = e.clientX; //clientX returns horizontal mouse pointer coordinate
            const thumbPosition = scrollbarThumb.offsetLeft;

            // update thumb position on mouse move 
            const handleMouseMove = (e) => {
                const deltaX = e.clientX - startX;
                const newThumbPosition = thumbPosition + deltaX;
                const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth

                const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

                scrollbarThumb.style.left = `${boundedPosition}px`;
                divList.scrollLeft = scrollPosition;
            }

            // remove event listeners on mouse up
            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            }

            // add event listener for drag interaction 
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        });



        // Function to scroll the div list according to the button clicks
        const scrollDivList = (direction) => {
            const scrollAmount = divList.clientWidth * direction;
            divList.scrollBy({left: scrollAmount, behavior: "smooth"});
        };

        // Event listeners for buttons
        prevButton.addEventListener("click", () => scrollDivList(-1));
        nextButton.addEventListener("click", () => scrollDivList(1));

         const handleSlideButtons = () =>{
        prevButton.style.display = divList.scrollLeft <= 0 ? "none" : "block";
        nextButton.style.display = divList.scrollLeft >= maxScrollLeft ? "none" : "block";
        }

        // update scrollbar thumb positon based on image scroll
        const updateScrollThumbPosiiton = () => {
            const scrollPosiiton = divList.scrollLeft;
            const thumbPosition = (scrollPosiiton / maxScrollLeft) * (sliderScrollbar.clientWidth-scrollbarThumb.offsetWidth);
            scrollbarThumb.style.left = `${thumbPosition}px`;
        }
    
        divList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosiiton();
        })
    });

    
   
}

window.addEventListener("load", initSlider);


// below is to display the hidden projects after clicking see more 
 
function reveal() {
  // Get the hidden section and the button by their IDs
  var hiddenSection = document.getElementById('hidden');
  var btn = document.querySelector('.btn3');

  // Check if the hidden section is currently displayed
  if (hiddenSection.style.display === 'none' || hiddenSection.style.display === '') {
    // If it's not displayed, show it and update the button text
    hiddenSection.style.display = 'grid';
    btn.textContent = 'Show Less';
  } else {
    // If it is displayed, hide it and update the button text
    hiddenSection.style.display = 'none';
    btn.textContent = 'Show More';
  }
}