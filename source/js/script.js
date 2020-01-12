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
  var checkboxFilters = document.querySelectorAll(".checkbox-filter");
  for (var checkboxFilter of checkboxFilters) {
    var checkboxFilterControl = checkboxFilter.querySelector(".checkbox-filter__control");
    handleFilter(checkboxFilter, checkboxFilterControl, "checkbox-filter_open");
  }

  var transportFilter = document.querySelector(".transport-filter");
  var transportFilterControl = transportFilter.querySelector(".transport-filter__control");
  handleFilter(transportFilter, transportFilterControl, "transport-filter_open");

  var levelFilter = document.querySelector(".level-filter");
  var levelFilterControl = levelFilter.querySelector(".level-filter__control");
  handleFilter(levelFilter, levelFilterControl, "level-filter_open");
}

function handleFilter(filter, control, classToOpen) {
  control.addEventListener("click", () => {
    filter.classList.toggle(classToOpen);
  });
}
