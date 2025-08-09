const navbar = document.getElementById('navbar');
const mobileNav = document.querySelector(".mobile-navbar")
const header = document.querySelector("header");
const overlay = document.querySelector(".body-overlay");
const openBtn = document.querySelector(".open-sidebar-button");
const closeBtn = document.querySelector(".close-sidebar-button");
const hero = document.querySelector(".hero-section");
const heroContent = document.querySelector(".hero-content");
const main = document.getElementById('main');
const body = document.body;
const accordians = document.querySelectorAll(".accordian-header");
var headerHeight = header.offsetHeight;

// Activate mobile buttons
openBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

// Closes mobile navbar when link is clicked
window.addEventListener('DOMContentLoaded', () => {
    mobileNav.querySelectorAll("li a").forEach(link => {
    link.addEventListener("click", () => {
      closeSidebar();
    });
  });
}
);

function openSidebar() {
  navbar.classList.add("show");
  overlay.classList.add("active");
  disableScroll();
}

function closeSidebar() {
  navbar.classList.remove("show");
  overlay.classList.remove("active");
  
  disableScroll();  
}

function disableScroll() {
  if (overlay.classList.contains("active")) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = "";
  }
}

window.addEventListener('scroll', function() {
  if (window.scrollY > 1) {
    header.classList.add('scrolled');
  } else { header.classList.remove('scrolled'); }
});

accordians.forEach(accordian => {
  accordian.addEventListener("click", () => {
    const accordianContent = accordian.nextElementSibling;

    accordians.forEach(otherAccordians => {
      if (otherAccordians !== accordian) {
        otherAccordians.classList.remove("active");
        otherAccordians.nextElementSibling.style.maxHeight = null;
      }
    });

    accordian.classList.toggle("active");

    if (accordian.classList.contains("active")) {
      accordianContent.style.maxHeight = accordianContent.scrollHeight + "px";
    } else {
      accordianContent.style.maxHeight = null;
    }
  });
});