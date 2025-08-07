// HERO FUNCTIONS
var styleIndex = 0;
changeStyle(styleIndex);

function changeStyle(n) {
const heroBody = document.querySelector(".hero-wrapper");
const heroH1 = document.querySelector(".hero-h1");
const heroH2 = document.querySelector(".hero-h2");

heroBody.classList.remove("style-0", "style-1", "style-2", "style-3");
heroBody.classList.add("style-" + n);
if (n == 0) {   heroH1.innerHTML = "Your brand,";  }
if (n == 1) {   heroH1.innerHTML = "Your brand,";
    heroH2.innerHTML = "Your way.";
  }
if (n == 2) {   heroH1.innerHTML = "Creative, responsive website designs";  
    heroH2.innerHTML = "All built to your specification.";   }
if (n == 3) {   heroH1.innerHTML = "Get started today";  
    heroH2.innerHTML = "The next step in your business waits";   } 
}

// TEMP FUNCTION
function toggleHeroOverlay() {
  const heroOverlay = document.querySelector(".hero-overlay");
  /* if (!sampleOverlay.classList.contains("active")) {
    sampleOverlay.classList.add("active");
  }
  else {
    sampleOverlay.classList.remove("active");
  } */
 heroOverlay.addEventListener("animationend", () => {
  heroOverlay.classList.add("fade-out");
});
}

function plusStyle(n){
  styleIndex += n;
  
  if (styleIndex > 3) styleIndex = 0
  if (styleIndex < 0) styleIndex = 2;

  changeStyle(styleIndex);
  toggleHeroOverlay();
}