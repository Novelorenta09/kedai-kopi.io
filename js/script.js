// togle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik tambahkan class active
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// togle class active utk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.getElementById("search-box");
document.querySelector("#search-button").onclick = (event) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  event.preventDefault();
};

// togle class active utk shopping-cart
const shoppingCart = document.querySelector(".shopping-cart");
const btnShop = document.getElementById("shopping-cart-button");
document.querySelector("#shopping-cart-button").onclick = (event) => {
  shoppingCart.classList.toggle("active");
  event.preventDefault();
};

//menghilangkan sesuatu jika di klik diluar elemen
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.getElementById("search-button");

document.addEventListener("click", function (element) {
  // selama bukan di area hamburger-menu dan sidebar
  if (!hamburger.contains(element.target) && !navbarNav.contains(element.target)) {
    navbarNav.classList.remove("active");
  }
  // jika bukan tombol search-button dan bukan search-form maka hapus class active
  if (!searchButton.contains(element.target) && !searchForm.contains(element.target)) {
    searchForm.classList.remove("active");
  }
  if (!shoppingCart.contains(element.target) && !btnShop.contains(element.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box detail product
const modalDetail = document.querySelector("#item-detail-modal");
const detailItemProducts = document.querySelectorAll(".detail-item-product");

detailItemProducts.forEach((btn) => {
  btn.onclick = (e) => {
    modalDetail.style.display = "flex";
    e.preventDefault();
  };
});
// detailItemProducts.onclick = (e) => {
//   modalDetail.style.display = "flex";
//   e.preventDefault();
// };
// klik tombol close modal-box
document.querySelector(".modal .close").onclick = (e) => {
  e.preventDefault();
  modalDetail.style.display = "none";
};
// klik diluar modal-box
window.onclick = (e) => {
  if (e.target === modalDetail) {
    modalDetail.style.display = "none";
  }
};
