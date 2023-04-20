 
  
  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  }
  
  
  // sidebar submenu open close js code
  let webcoursesArrow = document.querySelector(".webcourses-arrow");
  webcoursesArrow.onclick = function() {
   navLinks.classList.toggle("show1");
  }
  let moreArrow = document.querySelector(".more-arrow");
  moreArrow.onclick = function() {
   navLinks.classList.toggle("show2");
  }
  let OlevelArrow = document.querySelector(".Olevel-arrow");
  OlevelArrow.onclick = function() {
   navLinks.classList.toggle("show3");
  }
  let projectArrow = document.querySelector(".project-arrow");
  projectArrow.onclick = function() {
   navLinks.classList.toggle("show4");
  }
  let seminarsArrow = document.querySelector(".seminars-arrow");
  seminarsArrow.onclick = function() {
   navLinks.classList.toggle("show5");
  }
  


