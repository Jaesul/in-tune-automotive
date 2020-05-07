"use strict";
(function() {
  window.addEventListener("load", init);


  function init() { 
    let observer = navObs();
    let navSection = qs('.main-splash');
    observer.observe(navSection);
  }

  function navObs() {
    let options = {
      rootMargin: '0px 0px 0px 0px',
      threshold: 1
    }

    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let nav = qs('nav');
            nav.classList.remove('nav-scrolled');
          } else {
            let nav = qs('nav');
            nav.classList.add('nav-scrolled');
          }
        });
      }, options 
    );

    return observer;
  }

  function qsa(elementName) {
    return document.querySelectorAll(elementName);
  }

  function qs(elementName) {
    return document.querySelector(elementName);
  }

  function id(idName) {
    return document.getElementById(idName);
  }
})();