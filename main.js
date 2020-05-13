"use strict";
(function() {
  window.addEventListener("load", init);


  function init() { 
    let observer = navObs();
    let navSection = qs('.main-splash');
    observer.observe(navSection);
    setupOpenButtons();
    setupCloseButtons();
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

  function setupOpenButtons() {
    let buttons = qsa('.modal-open');
    buttons.forEach(element => {
      element.addEventListener('click', function() {
        let modal = id(element.dataset.target);
        modal.classList.remove('hidden');
        setTimeout(function () {
          modal.classList.remove('no-opacity');
        }, 10);
      });
    });
  }

  function setupCloseButtons() {
    let buttons = qsa('.modal-close');
    buttons.forEach(element => {
      element.addEventListener('click', function() {
        let modal = id(element.dataset.target);
        modal.classList.add('no-opacity');
        setTimeout(function () {
          modal.classList.add('hidden');
        }, 300);
      });
    });
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