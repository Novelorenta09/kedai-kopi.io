// togle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik tambahkan class active
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// utk menghilangkan sidebar jika diklik diluar sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (element) {
  // selama bukan di area hamburger-menu dan sidebar
  if (!hamburger.contains(element.target) && !navbarNav.contains(element.target)) {
    navbarNav.classList.remove("active");
  }
});
