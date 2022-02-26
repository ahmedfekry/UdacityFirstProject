/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navMenu = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport(elem) {
    let rect = elem.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;

}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function BuildNavMenu(section){
    let sectionName = section.dataset.nav;
    let sectionID = section.getAttribute('id');

    let listElement = document.createElement('li');
    // listElement.innerHTML = `<a data-id=${sectionID} class="menu__link">${sectionName}</a>`;
    let anchorTag = document.createElement('a');
    anchorTag.textContent = sectionName;
    anchorTag.classList.add('menu__link');
    anchorTag.dataset.id = sectionID;

    addScrollToAction(anchorTag);
    listElement.appendChild(anchorTag);
    navMenu.appendChild(listElement);
}


// Add class 'active' to section when near top of viewport
function addActive(element) {
    document.addEventListener('scroll',function (event) { 
        if(isInViewport(element)){
            element.classList.add('active');
        }
     })
 }

// Scroll to anchor ID using scrollTO event
function addScrollToAction(element){
    element.addEventListener('click',function(event){
        let dataset = event.target.dataset.id;
        let section  = document.getElementById(dataset);
        section.scrollIntoView({behavior: "smooth"}); 
    });
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

sections.forEach(function(section){
    BuildNavMenu(section);
});

// Scroll to section on link click

// Set sections as active
// sections.forEach(function (section) { 
//     addActive(section);
// })
document.addEventListener('scroll',function (event) { 
    sections.forEach(function(element){
        if(isInViewport(element)){
            if(!element.classList.contains('active'))
                element.classList.add('active');
        }else{
            element.classList.remove('active');
        }
    });    
});