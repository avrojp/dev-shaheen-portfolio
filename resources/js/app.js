document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".nav-toggler");
  const navbarContent = document.querySelector(".navbar-content");
  const navbar = document.querySelector(".navbar");
  menuIcon.addEventListener("click", function (event) {
    navbarContent.classList.toggle("show");
    event.stopPropagation();
  });
  document.addEventListener("click", function (event) {
    if (!navbar.contains(event.target)) {
      navbarContent.classList.remove("show");
    }
  });
});
