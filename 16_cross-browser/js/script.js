const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

let tabsBtn = document.querySelectorAll('.job__btn-list');
let tabsItem = document.querySelectorAll('.job__another-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('job__btn-list--active') });
    e.currentTarget.classList.add('job__btn-list--active');

    tabsItem.forEach(function (element) { element.classList.remove('job__another-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('job__another-item--active');
  });
});

new Accordion('.accordion');

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener('click',
  function () {
    burger.classList.toggle("burger--active");
    if (burger.classList.contains("burger--active")) {
      burger.setAttribute('aria-label', 'Закрыть меню')
    } else {
      burger.setAttribute('aria-label', 'Открыть меню')
    }
    menu.classList.toggle("header__nav--active");
    document.body.classList.toggle("stop-scroll");
  })

menuLinks.forEach(function (elem) {
  elem.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    burger.setAttribute('aria-label', 'Открыть меню');
    menu.classList.remove("header__nav--active");
    document.body.classList.remove("stop-scroll");
  })
})

let formCall = document.querySelector(".header__btn");
let searchForm = document.querySelector(".header__search");
let searchBtn = document.querySelector(".form__search-btn");
let crossBtn = document.querySelector(".header__close-form-btn")

formCall.addEventListener('click',
  function () {
    searchForm.classList.add("header__search--active");
  })

crossBtn.addEventListener('click',
  function () {
    searchForm.classList.remove("header__search--active")
  })

searchBtn.addEventListener('click',
  function () {
    searchForm.classList.remove("header__search--active")
  })
