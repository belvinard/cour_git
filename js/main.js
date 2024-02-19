/**
 * utiliser à chaque fois le jsdoc pour commenter nos differentes fonctions pour aider les autres membres de l'équipe à mieux comprendre le rôle des fonctions.
 * pour la convention adopté , chaqu'un devra delimiter ses instructions par des points virgules(;) et les chaîne de caracteres par les guillemets("")
 * suivre la structure de base pour faciliter la fusion du projet
 * ############################################################################################################################################
 */

const ratio = .6;
const spies = document.querySelectorAll('[data-spy]');

/**
 * 
 * @param {HTMLElement} elem 
 */
const activate = function (elem) {
    const id = elem.getAttribute('id');
    const anchor = document.querySelector(`a[href="#${id}"]`);
    if (anchor === null) {
        return null;
    }
    anchor.parentElement
        .querySelectorAll('.active')
        .forEach(node => node.classList.remove('active'));
    anchor.classList.add('active');
}

/**
 * 
 * @param {IntersectionObserverEntry} entries 
 * @param {IntersectionObserver} observer 
*/

const callback = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0 ) {
          activate(entry.target);  
        }
    });
    
}

if (spies.length > 0) {
    const y = Math.round(window.innerHeight * ratio)
    const observer = new IntersectionObserver(callback, {
        rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
    });
    spies.forEach((spy) => {
        observer.observe(spy);
    });
    
}

/* *********************** Début script home section *********************** */

let slides = document.querySelectorAll('.home .slide-container .slide');
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function next() {
  index = (index + 1) % slides.length;
  showSlide();
}

function prev() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide();
}

// défilement automatique toutes les 5 secondes (5000 millisecondes)
let intervalId = setInterval(next, 5000);

// le défilement automatique s'arrête lorsqu'on survole la section
let homeSection = document.querySelector('.home');
homeSection.addEventListener('mouseover', () => {
  clearInterval(intervalId);
});

// Reprendre le défilement automatique lorsqu'on quitte la section
homeSection.addEventListener('mouseout', () => {
  intervalId = setInterval(next, 5000);
});


// Afficher et masquer le nom de l'icône des reseaux sociaux

function showIconDetails(element) {
  // Afficher le nom de l'icône
  element.querySelector('.link_name').style.opacity = '1';

  // Ajuster la position à droite (0)
  element.parentElement.style.right = '.5rem';
}

function hideIconDetails(element) {
  // Masquer le nom de l'icône
  element.querySelector('.link_name').style.opacity = '0';

  // Réinitialiser la position à droite (-8.2rem)
  element.parentElement.style.right = '-8.2rem';

}

/* *********************** Fin script home section *********************** */


   
    
/* *********************** Début script navBar section *********************** */
let menuBtn = document.getElementById("menuBtn");
let closeBtn = document.getElementById("closeBtn");
let navBar = document.getElementById("mainNav");

// Ajouter un gestionnaire d'événements pour le bouton du menu
menuBtn.addEventListener("click", () =>{
  navBar.classList.add("show");
});


// Ajouter un gestionnaire d'événements pour le bouton de fermeture
closeBtn.addEventListener("click", () => {
  navBar.classList.remove("show");
  navBar.style.transition = "1s ease";
})
/* *********************** Fin script navBar section *********************** */
   

// Fonction pour masquer la barre de navigation
function hideNavBar() {
  navBar.classList.remove("show");
  navBar.style.transition = "1s ease";
}

// Ajouter un gestionnaire d'événements pour chaque lien du menu
let menuLinks = document.querySelectorAll("#mainNav a");

menuLinks.forEach(link => {
  link.addEventListener("click", hideNavBar);
});


// Flêche pour ramener vers le haut
const scrollButton = document.querySelector('.scroll-top');

if(scrollButton){
    window.addEventListener('scroll', () => {
        if(pageYOffset > (window.innerHeight * 1.2)){
            scrollButton.style.display = 'grid';
            console.log(pageYOffset);
        }else{
            scrollButton.style.display = 'none';
        }
    });
    scrollButton.addEventListener('click', () => {
        window.scrollTo(0,0);
        /*window.scrollTo({
            top: 0,
            behavior:'smooth'
        })*/
    })
}
