var navigation = document.querySelector(".navigation");
if (navigation) {
  var navigationControl = navigation.querySelector(".navigation__control");
  var navigationLogo = navigation.querySelector(".navigation__logo");
  var navigationLinks = navigation.querySelectorAll(".navigation-link");

  navigation.classList.remove("navigation_no-js");

  navigationControl.addEventListener("click", function(evt) {
    evt.preventDefault();
    navigation.classList.toggle("navigation_open");

    document.body.classList.toggle("page_no-scroll");

    if (!navigation.classList.contains("navigation_scroll")) {
      navigationLogo.classList.toggle("logo_blue");
    }
  });

  window.addEventListener("scroll", function() {
    if (window.pageYOffset >= 800 && !navigation.classList.contains("navigation_scroll")) {
      navigation.classList.add("navigation_scroll");

      navigationLogo.classList.add("logo_blue");

      for (var i = 0; i < navigationLinks.length; i++) {
        navigationLinks[i].classList.add("navigation-link_dark");
      }
    } else if ( window.pageYOffset < 800 && navigation.classList.contains("navigation_scroll")) {
      navigation.classList.remove("navigation_scroll");

      if (!navigation.classList.contains("navigation_open")) {
        navigationLogo.classList.remove("logo_blue");
      }

      for (var i = 0; i < navigationLinks.length; i++) {
        navigationLinks[i].classList.remove("navigation-link_dark");
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
  for (var i = 0; i < filters.length; i++) {
    var filter = filters[i];
    var filterControl = filter.querySelector(".filter__control");
    filter.classList.remove("filter_open");
    handleFilter(filter, filterControl);
  }

  function handleFilter(filter, filterControl) {
    filterControl.addEventListener("click", function(evt) {
      evt.preventDefault();
      filter.classList.toggle("filter_open");
    });
  }
}

var countryFilter = document.querySelector(".country-filter");
if (countryFilter) {
  var countryOpenControl = countryFilter.querySelector(".country-filter__control_open");
  var countryCloseControl = countryFilter.querySelector(".country-filter__control_close");
  var countryCloseButton = countryFilter.querySelector(".country-filter__collapse-button");

  countryOpenControl.addEventListener("click", function(evt) {
    evt.preventDefault();
    countryFilter.classList.add("country-filter_open");
  });
  countryCloseControl.addEventListener("click", function(evt) {
    evt.preventDefault();
    countryFilter.classList.remove("country-filter_open");
  });
  countryCloseButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    countryFilter.classList.remove("country-filter_open");
  });
}

var countrySelect = document.querySelector(".country-select_select");
if (countrySelect) {
  var selectOpenButton = countrySelect.querySelector(".country-select__select-button");
  var selectCloseButton = countrySelect.querySelector(".country-select__close-button");

  selectOpenButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    countrySelect.classList.add("country-select_open");
  });

  selectCloseButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    countrySelect.classList.remove("country-select_open");
  });
}

var planConstructor = document.querySelector(".plan-constructor");
if (planConstructor) {
  var steps = planConstructor.querySelectorAll(".plan-constructor__step");
  var indicators = planConstructor.querySelectorAll(".plan-constructor__indicator");

  var nextControls = planConstructor.querySelectorAll(".plan-constructor__next-control");
  var backControls = planConstructor.querySelectorAll(".plan-constructor__back-control");

  for (var i = 1; i < steps.length; i++) {
    steps[i].classList.remove("plan-constructor__step_open");
    indicators[i].classList.remove("plan-constructor__indicator_active");
  }

  for (var i = 0; i < nextControls.length; i++) {
    handleStep(nextControls[i], steps[i + 1], indicators[i + 1]);
  }

  for (var i = 0; i < backControls.length; i++) {
    handleStep(backControls[i], steps[i], indicators[i]);
  }

  function handleStep(control, step, indicator) {
    control.addEventListener("click", function(evt) {
      evt.preventDefault();

      for (var i = 0; i < steps.length; i++) {
        steps[i].classList.remove("plan-constructor__step_open");
        indicators[i].classList.remove("plan-constructor__indicator_active");
      }

      step.classList.add("plan-constructor__step_open");
      indicator.classList.add("plan-constructor__indicator_active");
    });
  }
}
