const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

hamburgerBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

// Optional: Hide menu when clicking outside
document.addEventListener("click", function (e) {
  if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});
