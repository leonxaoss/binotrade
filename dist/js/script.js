"use strict";

(function () {
  window.addEventListener('load', readF);

  function readF() {
    $('[data-tab-btn]').on('click', function () {
      $(this).addClass('tabs_btn--active').siblings('[data-tab-btn]').removeClass('tabs_btn--active');
      $('.tabs_block').siblings('[data-tab-content=' + $(this).data('tab-btn') + ']').addClass('tabs_block--active').siblings('[data-tab-content]').removeClass('tabs_block--active');
    });
    var navBtn = document.querySelector('.nav_btn');
    var headerBlockR = document.querySelector('.header_block__right');
    navBtn.addEventListener('click', function () {
      navBtn.classList.toggle('nav_btn--active');
      headerBlockR.classList.toggle('header_block__right--active');
    });
  }

  function scrollElemAdd(selector, selectorChange, param) {
    window.addEventListener('load', scrollElem);
    window.addEventListener('scroll', scrollElem);

    function scrollElem() {
      var scrollElement = document.querySelectorAll(selector);

      for (var i = 0; i < scrollElement.length; i++) {
        var coordinateTop = scrollElement[i].getBoundingClientRect().top,
            elementHeigth = scrollElement[i].getBoundingClientRect().height,
            windowHeigth = document.documentElement.clientHeight,
            result = coordinateTop > 0 - elementHeigth && coordinateTop < windowHeigth - 100;

        if (param === 'add') {
          if (result) {
            scrollElement[i].classList.add(selectorChange);
          }
        } else if (param === 'addRem') {
          if (result) {
            scrollElement[i].classList.add(selectorChange);
          } else {
            scrollElement[i].classList.remove(selectorChange);
          }
        } else {
          console.log('param error');
        }
      }
    }
  }

  scrollElemAdd('.adv_block', 'adv_block--anim', 'add');
  scrollElemAdd('.brands_container', 'brands_container--anim', 'add');
  scrollElemAdd('.brands_block', 'brands_block--anim', 'add');
  scrollElemAdd('.tabs_content', 'tabs_content--anim', 'add');
  scrollElemAdd('.apps_section', 'apps_section--anim', 'add');
  scrollElemAdd('.about_block', 'about_block--anim', 'add');

  function mouseMove(selector, spedX, spedY) {
    var sel = document.querySelectorAll(selector),
        windowWidth = window.innerWidth / 2,
        windowHeigth = window.innerHeight / 2;
    window.addEventListener('mousemove', function (e) {
      var trX = e.clientX - windowWidth,
          trY = e.clientY - windowHeigth;

      for (var i = 0; i < sel.length; i++) {
        sel[i].style.transform = 'translate3d(' + trX / spedX + 'px, ' + trY / spedY + 'px, 0)';
      }
    });
  }

  mouseMove('.then_big', 50, 25);
  mouseMove('.baks_small', 50, 25);
  mouseMove('.cloud_big', 55, 30);
  mouseMove('.cloud_middle', 50, 25);
  mouseMove('.baks_big', 40, 15);
  mouseMove('.cloud_small', 50, 25);
  mouseMove('.then_small', 50, 25);
})();