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
  const autherv1 = document.getElementById('auther-v1');
  const topicv1 = document.getElementById('topic-v1');
  const desv1 = document.getElementById('des-v1');



  // الترجمات
  const translations = {
    en: {
      autherv1: "Villa 1",
      topicv1:"AlMansour",
      desv1:"Al-Mansour’s villa is an architectural masterpiece that blends the grandeur of classical design with the openness of modern style. The main façade is adorned with graceful columns and elegant arches inspired by classical architecture, while clean lines and sharp angles introduce a contemporary touch that gives the villa a distinguished character. The villa features a spacious main entrance leading into a naturally lit hall, thanks tolarge floor-to-ceiling windows that balance light and ventilation. The interior layout is designed to ensure both comfort and privacy, with the grand living hall opening directlyonto views of the garden and swimming pool."
     
    },
    ar: {
      autherv1: "فيلا 1",
     topicv1:"المنصور",
      desv1:"فيلا المنصور تمثل تحفة معمارية تجمع بين فخامة الطراز الكلاسيكي ورحابة الأسلوب الحديث. الواجهة الرئيسية تتزين بأعمدة رشيقة وأقواس أنيقة مستوحاة من العمارة الكلاسيكية، بينما تضيف الخطوط البسيطة والزوايا الواضحة لمسة عصرية تمنح المبنى حضورًا مميزًا.تتميز الفيلا بمدخل رئيسي واسع يفتح على بهو مضاء طبيعيًا بفضل النوافذ الكبيرة الممتدة من الأرض حتى السقف، مما يخلق توازنًا بين الإضاءة والتهوية. كما أن توزيع المساحات الداخلية يراعي الراحة والخصوصية، حيث تندمج الصالة الكبرى مع إطلالة على الحديقة والمسبح."
    }
  };

  // دالة تطبيق اللغة
  function applyPLanguage() {
    const lang = localStorage.getItem('lang') || 'ar';
    const T = translations[lang];

    if (autherv1) autherv1.textContent = T.autherv1;
    if (topicv1) topicv1.textContent = T.topicv1;
    if (desv1) desv1.textContent = T.desv1;
  

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
