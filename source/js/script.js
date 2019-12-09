"user strict";

let navigation = document.querySelector(".navigation");
let navigationControl = navigation.querySelector(".navigation__control");
let navigationLogo = navigation.querySelector(".navigation__logo");

navigation.classList.remove("navigation_no-js");

navigationControl.addEventListener("click", () => {
  navigation.classList.toggle("navigation_open");
  navigationLogo.classList.toggle("logo_blue");
});
