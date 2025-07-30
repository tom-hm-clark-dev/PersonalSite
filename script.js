const navbar = document.getElementById('navbar');
const header = document.querySelector("header");
const overlay = document.querySelector(".body-overlay");
const openBtn = document.querySelector(".open-sidebar-button");
const closeBtn = document.querySelector(".close-sidebar-button");

function openSidebar() {
  navbar.classList.add("show")
  overlay.classList.add("active")
}

function closeSidebar() {
  navbar.classList.remove("show")
  overlay.classList.remove("active")
}

window.addEventListener('scroll', function() {
  header.classList.toggle('scrolled', window.screenY > 50);
  console.log('scrolled')
});

openBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);
