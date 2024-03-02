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

// BOTÃO WHATS

let whatsBtn = document.querySelector('.whatsapp-btn');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    whatsBtn.classList.add('show');
  } else {
    whatsBtn.classList.remove('show');
  }
});
whatsBtn.addEventListener('click', function (e) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

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
    whatsBtn.classList.remove('show');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.style.animation = 'hideMenu 1s forwards';
    menuBtnI.style.opacity = '1';
    whatsBtn.classList.add('show');
  });

  mobileMenuClick.addEventListener('click', () => {
    mobileMenu.style.animation = 'hideMenu 1s forwards';
    menuBtnI.style.opacity = '1';
    whatsBtn.classList.add('show');
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

let swiper = new Swiper('.slide-container', {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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

// LINGUAGEM

function changeLanguage(languageCode) {
  switch (languageCode) {
    case 'en-US':
      window.location.href = '/english/';
      break;
    case 'es-ES':
      window.location.href = '/spanish/';
      break;
    default:
      window.location.href = '/';
      break;
  }
}

// SCROLL REVEAL

window.sr = ScrollReveal({ reset: true });

sr.reveal('.hero-text', { duration: 3000, rotate: { x: 30, y: 0, z: 0 } });
sr.reveal('.about-text', { duration: 2000, rotate: { x: 30, y: 0, z: 0 }, delay: 400 });
sr.reveal('.my_work_text', { duration: 2000, rotate: { x: 30, y: 0, z: 0 }, delay: 400 });
sr.reveal('.card', { duration: 2000, interval: 500 });
sr.reveal('.service_text', { duration: 2000, rotate: { x: 30, y: 0, z: 0 }, delay: 400 });
sr.reveal('.s_card', { duration: 2000, interval: 400 });
sr.reveal('.cta-text', { duration: 3000, rotate: { x: 30, y: 0, z: 0 }, delay: 400});
sr.reveal('.section-heading', { duration: 3000, rotate: { x: 30, y: 0, z: 0 }, delay: 400});
sr.reveal('.benefits-text', { duration: 2000, interval: 500 });
sr.reveal('.media-heading', { duration: 2000, rotate: { x: 30, y: 0, z: 0 }, delay: 400});
sr.reveal('.media-container', { duration: 2000, rotate: { x: 30, y: 0, z: 0 }, delay: 400});
sr.reveal('.researches-text', { duration: 2000, rotate: { x: 30, y: 0, z: 0 }, delay: 400});
sr.reveal('.footer-area', { duration: 2000, rotate: { x: 30, y: 0, z: 0 }, delay: 500});
