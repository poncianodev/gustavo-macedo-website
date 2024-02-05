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

// FORM

const form = document.getElementById('form');
const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const phoneRegex = /^\d{11}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(index) {
  inputs[index].style.border = '2px solid #e63636';
  spans[index].style.display = 'block';
}

function removeError(index) {
  inputs[index].style.border = '';
  spans[index].style.display = 'none';
}

function nameValidate() {
  if (inputs[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}

function phoneValidate() {
  if (phoneRegex.test(inputs[1].value)) {
    removeError(1);
  } else {
    setError(1);
  }
}

function emailValidate() {
  if (emailRegex.test(inputs[2].value)) {
    removeError(2);
  } else {
    setError(2);
  }
}

function validateForm() {
  nameValidate();
  emailValidate();
  phoneValidate();

  const termsAccepted = termsValidate();

  return !(
    inputs[0].style.border ||
    inputs[1].style.border ||
    inputs[2].style.border ||
    !termsAccepted
  );
}

// LINGUAGEM

function changeLanguage(languageCode) {
  switch (languageCode) {
      case 'en-US':
          window.location.href = 'index_en.html';
          break;
      case 'es-ES':
          window.location.href = 'index_es.html';
          break;
      default:
          window.location.href = 'index.html';
          break;
  }
}
