document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  function addClassOnScroll() {
    if (window.scrollY > 2) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }

  window.addEventListener("scroll", addClassOnScroll);
});
