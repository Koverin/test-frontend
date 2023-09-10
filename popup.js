document.addEventListener("DOMContentLoaded", function () {
  const popupContainer = document.querySelector(".popup-container");
  const followButton = document.querySelector(".follow-btn");
  const closeButton = document.querySelector(".popup-close");
  const overlay = document.querySelector(".overlay");

  const scrollTriggerPosition = 8500;

  function showPopup() {
    popupContainer.style.display = "block";
    overlay.style.display = "block";
  }

  function hidePopup() {
    popupContainer.style.display = "none";
    overlay.style.display = "none";
  }

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY >= scrollTriggerPosition) {
      showPopup();
    }
  });

  followButton.addEventListener("click", function () {
    const routeElement = document.getElementById("order_form");
    if (routeElement) {
      routeElement.scrollIntoView({ behavior: "smooth", block: "center" });

      setTimeout(hidePopup, 500);
    }
  });

  closeButton.addEventListener("click", hidePopup);

  overlay.addEventListener("click", function (evt) {
    if (evt.target === overlay) {
      evt.preventDefault();
    }
  });
});
