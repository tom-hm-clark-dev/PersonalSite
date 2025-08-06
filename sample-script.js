// SAMPLE FUNCTIONS
var styleIndex = 0;
changeStyle(styleIndex);

function changeStyle(n) {
const sampleBody = document.querySelector(".sample-wrapper");
const sampleH1 = document.querySelector(".sample-h1");
const sampleH2 = document.querySelector(".sample-h2");

sampleBody.classList.remove("style-0", "style-1", "style-2", "style-3");
sampleBody.classList.add("style-" + n);
console.log("Style changed to: " + n);
if (n == 0) {   sampleH1.innerHTML = "Your brand,";  }
if (n == 1) {   sampleH1.innerHTML = "Your brand,";
    sampleH2.innerHTML = "Your way.";
  }
if (n == 2) {   sampleH1.innerHTML = "Creative, responsive website designs";  
    sampleH2.innerHTML = "All built to your specification.";   }
if (n == 3) {   sampleH1.innerHTML = "Get started today";  }
}

function plusStyle(n){
  styleIndex += n;
  
  if (styleIndex > 3) styleIndex = 0
  if (styleIndex < 0) styleIndex = 2;

  changeStyle(styleIndex);
}