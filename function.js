"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", function () {
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "4rem";
      nav.style.right = "1rem";
      nav.style.background = "rgb(35, 27, 22)";
      nav.style.padding = "1rem 2rem";
      nav.style.borderRadius = "1rem";
      nav.style.zIndex = "100";
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 767) {
        nav.style.display = "none";
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      nav.style.display = "";
      nav.style.position = "";
      nav.style.top = "";
      nav.style.right = "";
      nav.style.background = "";
      nav.style.padding = "";
      nav.style.borderRadius = "";
      nav.style.zIndex = "";
      nav.style.flexDirection = "";
    }
  });
});
