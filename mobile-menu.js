document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  function openMobileMenu() {
    menuButton.classList.add("active");
    mobileNav.classList.add("open");
  }

  function closeMobileMenu() {
    menuButton.classList.remove("active");
    mobileNav.classList.remove("open");
  }

  menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (menuButton.classList.contains("active")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  document.addEventListener("click", (e) => {
    if (!mobileNav.contains(e.target) && !menuButton.contains(e.target)) {
      closeMobileMenu();
    }
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const menuButton = document.querySelector(".menu-btn");
//   const mobileNav = document.querySelector(".mobile-nav");

//   function openMobileMenu() {
//     menuButton.classList.add("active");
//   }

//   function closeMobileMenu() {
//     menuButton.classList.remove("active");
//   }

//   menuButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (menuButton.classList.contains("active")) {
//       closeMobileMenu();
//     } else {
//       openMobileMenu();
//     }
//   });

//   document.addEventListener("click", (e) => {
//     if (!mobileNav.contains(e.target) && !menuButton.contains(e.target)) {
//       closeMobileMenu();
//     }
//   });
// });
