"user strict";

let navigation = document.querySelector(".navigation");
let navigationControl = document.querySelector(".navigation__control");

navigation.classList.remove("navigation_no-js");

navigationControl.addEventListener("click", () => {
  navigation.classList.toggle("navigation_open");
});
