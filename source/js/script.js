var navigation = document.querySelector(".navigation");
var navigationControl = navigation.querySelector(".navigation__control");
var navigationLogo = navigation.querySelector(".navigation__logo");

navigation.classList.remove("navigation_no-js");

navigationControl.addEventListener("click", () => {
  navigation.classList.toggle("navigation_open");
  navigationLogo.classList.toggle("logo_blue");
});

var userFilter = document.querySelector(".user-filter");

if (userFilter) {
  var filters = document.querySelectorAll(".filter");
  for (var filter of filters) {
    var filterControl = filter.querySelector(".filter__control");
    handleFilter(filter, filterControl);
  }
}

function handleFilter(filter, filterControl) {
  filterControl.addEventListener("click", () => {
    filter.classList.toggle("filter_open");
  });
}
