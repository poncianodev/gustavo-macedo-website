// MENU SCROLL

window.onload = function () {
  window.addEventListener('scroll', e => {
    if (window.pageYOffset > 70) {
      document.querySelector('header').classList.add('header-scroll');
    } else {
      document.querySelector('header').classList.remove('header-scroll');
    }
  });
};

// MENU MOBILE

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menuBtnI = document.querySelector('.fa-bars');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.close-btn');
  const mobileMenuClick = document.querySelector('.mobile-menu ul');

  menuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
    mobileMenu.style.animation = 'showMenu 1s forwards';
    menuBtnI.style.opacity = '0';
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.style.animation = 'hideMenu 1s forwards';
    menuBtnI.style.opacity = '1';
  });

  mobileMenuClick.addEventListener('click', () => {
    mobileMenu.style.animation = 'hideMenu 1s forwards';
    menuBtnI.style.opacity = '1';
  });
});

// LOGOS SLIDER

let copy = document.querySelector('.logos-slide').cloneNode(true);
document.querySelector('.logos').appendChild(copy);

// ROTAÇÃO CARD SERVIÇOS

function rotateOnClick(element) {
  element.classList.add('rotate');
  setTimeout(function () {
    element.classList.remove('rotate');
  }, 1000);
}

// MEDIA SLIDER

var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
