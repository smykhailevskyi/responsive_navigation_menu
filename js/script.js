"use strict"

const addActiveClassForParentElement = (arr) => {
  arr.forEach(element => {
    element.addEventListener("click", () => {
      element.parentElement.classList.toggle("_active");
    });
  });
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