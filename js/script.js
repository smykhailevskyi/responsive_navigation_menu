"use strict"

const addActiveClassForParentElement = (arr) => {
  arr.forEach(element => {
    element.addEventListener("click", () => {
      element.parentElement.classList.toggle("_active");
    });
  });
}

const onMenuLinkClick = (e) => {
  e.preventDefault();
  const link = e.target;

  if(link.dataset.goto && document.querySelector(link.dataset.goto)) {
    const gotoBlock = document.querySelector(link.dataset.goto);

    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector("header").offsetHeight;

    if(iconMenu.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
    } 

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
  }
}

const isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iOS/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/Windows/i);
  },
  any: function() {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
}

if(isMobile.any()) {
  document.body.classList.add("_touch");

  const menuArrows = document.querySelectorAll(".menu__arrow");

  if(menuArrows.length > 0) {
    addActiveClassForParentElement(menuArrows);
  }
} else {
  document.body.classList.add("_pc");
}

// Scroll on click
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");

if(menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}

// Burger menu
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

if(iconMenu) {
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}