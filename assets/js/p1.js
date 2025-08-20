'use strict';
// show items .................................................................................


// const observe = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show-items')
//     }
//     else {
//       entry.target.classList.remove('show-items')
//     }
//   })
// })

// const scrollscale = document.querySelectorAll('.scroll-scale')
// scrollscale.forEach((el) => observe.observe(el))

// filter ----------------------------------


const filterButton = document.querySelectorAll(".filter_button button")
const filterableCard = document.querySelectorAll(".filterable_cards .card")

const filterCard = e => {

    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
    

    filterableCard.forEach(card =>{
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
             card.classList.remove("hide");
        }
    } )
}

filterButton.forEach(button => button.addEventListener("click" ,  filterCard))

//p1 language ---------------------------------------



// // استدعاء الترجمة من script.js (تأكد أن ملف script.js محمّل قبل هذا الملف)
// let currentLang = localStorage.getItem('lang') || 'en';

// // دالة لتطبيق اللغة على صفحة p.html
// function applyPLanguage() {
//   if (typeof translations === "undefined") {
//     console.error("translations object not found! تأكد أنك مستدعي script.js قبل p.js");
//     return;
//   }

//   let lang = currentLang;

//   // مثال: لو عندك عناصر بصفحة p.html
//   const pTitle = document.getElementById('title-projects');
 

//   if (pTitle && pContent) {
//     if (lang === "ar") {
//       pTitle.textContent = "هذه صفحة P";
     
//       document.body.classList.add("rtl");
//       document.documentElement.lang = "ar";
//     } else {
//       pTitle.textContent = "This is P Page";
    
//       document.body.classList.remove("rtl");
//       document.documentElement.lang = "en";
//     }
//   }
// }

// // نفذ عند تحميل الصفحة
// window.addEventListener("DOMContentLoaded", applyPLanguage);















