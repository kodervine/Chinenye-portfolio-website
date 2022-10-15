var mobileNavbarContainer = document.querySelector(".mobile-navbar-container");

var navbarMenuIcon = document.querySelector(".navbar-menu-icon");

var navbardeleteIcon = document.querySelector(".navbar-delete-icon");

navbarMenuIcon.addEventListener("click", () => {
  mobileNavbarContainer.classList.add("active");
  navbarMenuIcon.classList.remove("active");
  navbardeleteIcon.classList.add("active");
});

navbardeleteIcon.addEventListener("click", () => {
  mobileNavbarContainer.classList.remove("active");
  navbarMenuIcon.classList.add("active");
  navbardeleteIcon.classList.remove("active");
});

// Footer date for homepage
var currentYear = new Date().getFullYear();
var footerYear = document.getElementById("footer-year");

footerYear.innerHTML = `<p> &copy; Copyright - Chinenye Anikwenze ${currentYear}</p>`;
