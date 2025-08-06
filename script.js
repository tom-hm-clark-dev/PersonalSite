const navbar = document.getElementById('navbar');
const header = document.querySelector("header");
const overlay = document.querySelector(".body-overlay");
const openBtn = document.querySelector(".open-sidebar-button");
const closeBtn = document.querySelector(".close-sidebar-button");
const hero = document.querySelector(".hero-section");
const main = document.getElementById('main');
const body = document.body;
var headerHeight = header.offsetHeight;

const DEBUG = true;

window.addEventListener('DOMContentLoaded', () => {
   main.style.paddingTop = '99px';
}
);

function openSidebar() {
  navbar.classList.add("show")
  overlay.classList.add("active")
  disableScroll();
}

function closeSidebar() {
  navbar.classList.remove("show")
  overlay.classList.remove("active")
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
    console.log('scrolled, header height is currently: ' + headerHeight);
    // Adjusts padding based on header height
    headerHeight = header.offsetHeight;
    main.style.paddingTop = '62px';
  } else {
    header.classList.remove('scrolled');
    headerHeight = header.offsetHeight;
    console.log('RESET: header height is now: ' + headerHeight);

    // Reset padding
    headerHeight = header.offsetHeight;
    main.style.paddingTop = '99px';
  }
  console.log('scrolled')
});

openBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

