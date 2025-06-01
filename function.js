"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const closeToggle = document.getElementById("close-toggle");
  const nav = document.querySelector("nav");

  function openNav() {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.left = "0";
    nav.style.width = "100vw";
    nav.style.height = "50%";
    nav.style.background = "rgba(35, 27, 22, 0.98)";
    nav.style.padding = "4rem";
    nav.style.borderRadius = "0";
    nav.style.zIndex = "1000";
    nav.style.justifyContent = "center";
    nav.style.alignItems = "center";
    menuToggle.style.display = "none";
    closeToggle.style.display = "block";
  }

  function closeNav() {
    nav.style.display = "none";
    menuToggle.style.display = "block";
    closeToggle.style.display = "none";
  }

  menuToggle.addEventListener("click", openNav);
  closeToggle.addEventListener("click", closeNav);

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 767) {
        closeNav();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      nav.style.display = "";
      nav.style.position = "";
      nav.style.top = "";
      nav.style.left = "";
      nav.style.width = "";
      nav.style.height = "";
      nav.style.background = "";
      nav.style.padding = "";
      nav.style.borderRadius = "";
      nav.style.zIndex = "";
      nav.style.flexDirection = "";
      nav.style.justifyContent = "";
      nav.style.alignItems = "";
      menuToggle.style.display = "";
      closeToggle.style.display = "none";
    } else {
      closeNav();
    }
  });
});
