document.addEventListener("DOMContentLoaded", function () {
  const popupContainer = document.querySelector(".popup-container");
  const followButton = document.querySelector(".follow-btn");
  const closeButton = document.querySelector(".popup-close");
  const overlay = document.querySelector(".overlay");
  const targetElement = document.querySelector(".start-popup");

  function showPopup() {
    popupContainer.style.display = "block";
    overlay.style.display = "block";
  }

  function hidePopup() {
    popupContainer.style.display = "none";
    overlay.style.display = "none";
  }

  window.addEventListener("scroll", function () {
    if (isElementInViewport(targetElement)) {
      showPopup();
    }
  });

  followButton.addEventListener("click", function () {
    const routeElement = document.getElementById("order_form");
    if (routeElement) {
      routeElement.scrollIntoView({ behavior: "smooth", block: "center" });

      setTimeout(hidePopup, 1000);
    }
  });

  closeButton.addEventListener("click", hidePopup);

  overlay.addEventListener("click", function (evt) {
    if (evt.target === overlay) {
      evt.preventDefault();
    }
  });

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});
