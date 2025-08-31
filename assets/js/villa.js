let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listitemDom = document.querySelector('.carousel .list');
let thunailDom = document.querySelector('.carousel .thunbnail');

nextDom.onclick = function () {
    showSlider("next")
}
prevDom.onclick = function () {
    showSlider("prev")
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);
function showSlider(type) {
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemthunail = document.querySelectorAll(".carousel .thunbnail .item");

    if (type === "next") {
        listitemDom.appendChild(itemSlider[0]);
        thunailDom.appendChild(itemthunail[0]);
        carouselDom.classList.add('next')
    }
    else {
        let positionlastitem = itemSlider.length - 1;
        listitemDom.prepend(itemSlider[positionlastitem]);
        thunailDom.prepend(itemthunail[positionlastitem]);
        carouselDom.classList.add('prev')
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next')
        carouselDom.classList.remove('prev');
    }, timeRunning)
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(() => {
  'use strict';

  // عناصر الصفحة
  const projects = document.getElementById('auther-v1');


  // الترجمات
  const translations = {
    en: {
      projects: "Villa 1",
     
    },
    ar: {
      projects: "فيلا 1",
     
    }
  };

  // دالة تطبيق اللغة
  function applyPLanguage() {
    const lang = localStorage.getItem('lang') || 'ar';
    const T = translations[lang];

    if (projects) projects.textContent = T.projects;
  

    // اتجاه الصفحة
    document.documentElement.lang = lang;
    document.body.dir = (lang === "ar") ? "rtl" : "ltr";
    if (lang === 'ar') {
    body.classList.add('rtl', 'arabicFont');
    body.dir = 'rtl';
  } else {
    body.classList.remove('rtl', 'arabicFont');
    body.dir = 'ltr';
  }
  }

  // نفّذ عند تحميل الصفحة
  document.addEventListener('DOMContentLoaded', applyPLanguage);
})();
