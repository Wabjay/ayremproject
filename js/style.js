// SCRIPT NAVBAR START

var menu = document.getElementById("menu-open");
var nav = document.getElementById("nav");

menu.addEventListener("click", function (e) {
  nav.classList.toggle("hide-mobile");
  e.preventDefault();
  if (nav.classList.contains("hide-mobile")) {
    menu.src = "../images/drop.png";
  } else {
    menu.src = "../images/delete.png";
  }
});

window.onscroll = function () {
  changeHeader();
};

function changeHeader() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").className = "scroll";
    document.querySelector(".logo").src = "../images/logo_white.png";
  } else {
    document.getElementById("header").className = "";
    document.querySelector(".logo").src = "../images/logo.svg";
  }
}
