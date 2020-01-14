var navigation = document.querySelector(".navigation");

if (navigation) {
  var navigationControl = navigation.querySelector(".navigation__control");
  var navigationLogo = navigation.querySelector(".navigation__logo");
  var navigationLinks = navigation.querySelectorAll(".navigation-link");

  navigation.classList.remove("navigation_no-js");

  navigationControl.addEventListener("click", function() {
    navigation.classList.toggle("navigation_open");

    document.body.classList.toggle("page_no-scroll");

    if (!navigation.classList.contains("navigation_scroll")) {
      navigationLogo.classList.toggle("logo_blue");
    }
  });

  window.addEventListener("scroll", function() {
    if (window.pageYOffset >= 100 && !navigation.classList.contains("navigation_scroll")) {
      navigation.classList.add("navigation_scroll");

      navigationLogo.classList.add("logo_blue");

      for (var link of navigationLinks) {
        link.classList.add("navigation-link_dark");
      }
    } else if ( window.pageYOffset < 100 && navigation.classList.contains("navigation_scroll")) {
      navigation.classList.remove("navigation_scroll");

      if (!navigation.classList.contains("navigation_open")) {
        navigationLogo.classList.remove("logo_blue");
      }

      for (var link of navigationLinks) {
        link.classList.remove("navigation-link_dark");
      }
    }
  });
}

var modal = document.querySelector(".modal");

if (modal) {
  var modalButton = document.querySelector(".modal-button");
  var modalCloseButton = modal.querySelector(".modal__close-button");

  modalButton.addEventListener("click", function(evt) {
    evt.preventDefault();

    modal.classList.add("modal_open");
  });

  modalCloseButton.addEventListener("click", function(evt) {
    evt.preventDefault();

    modal.classList.remove("modal_open");
  });
}

var userFilter = document.querySelector(".user-filter");

if (userFilter) {
  var filters = document.querySelectorAll(".filter");
  for (var filter of filters) {
    var filterControl = filter.querySelector(".filter__control");
    handleFilter(filter, filterControl);
  }
}

function handleFilter(filter, filterControl) {
  filterControl.addEventListener("click", function(evt) {
    evt.preventDefault();

    filter.classList.toggle("filter_open");
  });
}
