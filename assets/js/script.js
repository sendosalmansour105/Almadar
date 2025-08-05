'use strict';

/**
 * navbar toggle ...............................................................................
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px .......................................................
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});


// show items .................................................................................

const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-items')
    }
    else {
      entry.target.classList.remove('show-items')
    }
  })
})

const scrollscale = document.querySelectorAll('.scroll-scale')
scrollscale.forEach((el) => observe.observe(el))



// english and arabic ...................................................
//navbar//
const home = document.getElementById('navbar-Home');
const works = document.getElementById('navbar-work');
const about = document.getElementById('navbar-about');
const services = document.getElementById('navbar-services');
const client = document.getElementById('navbar-clients');
const blogs = document.getElementById('navbar-blogs');
const contact = document.getElementById('navbar-contact');
//works//
const work = document.getElementById('title-work');
const subWork = document.getElementById('subWork');
const card1 = document.getElementById('card-title-c1');
const card2 = document.getElementById('card-title-c2');
const card3 = document.getElementById('card-title-c3');
const card4 = document.getElementById('card-title-c4');
const card5 = document.getElementById('card-title-c5');
//about//
const aboutus = document.getElementById('title-about');
const subabout = document.getElementById('subabout');
const aboutcontent = document.getElementById('about-content');
const designs = document.getElementById('designs');
const designscontent = document.getElementById('designscontent');
const price = document.getElementById('price');
const pricecontent = document.getElementById('pricecontent');
const fast = document.getElementById('fast');
const fastcontent = document.getElementById('fastcontent');
const callus = document.getElementById('callus');
//service//
const service = document.getElementById('service');
const subservice = document.getElementById('subservice');
const interior = document.getElementById('interiorservice');
const interiortitle = document.getElementById('interiortitle');
const interiorcontent = document.getElementById('interiorcontent');
const exterior = document.getElementById('exteriorservice');
const exteriortitle = document.getElementById('exteriortitle');
const exteriorcontent = document.getElementById('exteriorcontent');
const landscape = document.getElementById('landscapeservice');
const landscapetitle = document.getElementById('landscapetitle');
const landscapecontent = document.getElementById('landscapecontent');
//clients//
const clients = document.getElementById('clients');
const subclients = document.getElementById('subclients');
//details//
const details = document.getElementById('details');
const subDetails = document.getElementById('subDetails');
const detailscontent = document.getElementById('detailscontent')
//blogs//
const blog = document.getElementById('blogs');
const subblogs = document.getElementById('subblogs');
const langButton = document.getElementById('langBtn');
const body = document.body;

// تعريف العبارات باللغتين
const translations = {
  en: {
    langButton: 'Arabic',
    home: "Home",
    works: "Our Works",
    about: "About Us",
    services: "Services",
    client: "Our Clients",
    blogs: "Blogs",
    contact: "Contact Us",
    //work
    work: "Our Works",
    subWork: "Choose Your Design",
    card1: "Living Room",
    card2: "Bedroom",
    card3: "Walkways",
    card4: "House",
    card5: "Library",
    //about
    aboutus: "About Us",
    subabout: "Explore all our works with us.",
    line1: 'Since our founding in early 2024, we have been committed to providing design services in the UAE and the GCC as an exterior and interiordesign firm. Although AL MADAR AL MUTAMAIZ is a fledgling company compared to other design firms in the UAE market, we have managed to gain the trust of numerous clients through our diverse and comprehensiveservices.',
    line2: 'Through our commitment to precision and high quality in our design services, we can take your project tothe next level, utilizing our expertise and knowledge.',
    designs: "Distinctive designs",
    designscontent: "With us, you get a unique design with a distinctive coordination and arrangement.",
    price: "Friendly price",
    pricecontent: " High quality and craftsmanship at competitive prices",
    fast: "Fast service",
    fastcontent: " We respond to your requests 24/7.",
    callus: "Call Us",
    //service
    service: "Our services",
    subservice: "Services we provide",
    interior: "Interior design",
    interiortitle: "Living Room, Dining Room, Bedroom, etc.",
    interiorcontent: "Interior design is the art and science of enhancing the interior of a building.",
    exterior: "Exterior design",
    exteriortitle: "Villas, Hotels, Places, homes, restaurants, etc.",
    exteriorcontent: "Exterior design is the process of designing the external appearance.",
    landscape: "Landscape design",
    landscapetitle: "Walkways, courtyards, water bodies, parking etc.",
    landscapecontent: "Landscape design is practiced by landscape designers, combining nature and culture.",
    //clients
    clients: "Our Clients",
    subclients: "We Work With The Best Clients",
    //details
    details: "Details",
    subDetails: "More Details About Us.",
    de1: " At Al-Madar, we believe every space has a story to tell —",
    de2: " and we bring that story to life through unique, customized designs.",
    de3: "With our exceptional team of engineers and designers, we transform ideas into stunning realities, down to the finest detail.",
   de4:" What sets us apart:",
   de5:"   A talented, professional team driven by passion, creativity, and attention to detail.",
   de6:"   Fast and efficient project delivery without compromising on quality — we respect your time.", 
   de7:" Interior and exterior designs that reflect your style, whether modern, classic, or anything in between.<br>",
  de8:"From cozy homes to commercial landmarks, Al-Madar is your trusted partner in design excellence. Let us turn your vision into a space you’ll love.",
  de9:" 📞 Contact us today and let’s bring your dream design to life!",
   //blogs
    blog: "From The Blog Post",
    subblogs: "Latest News & Articles",
  },
  ar: {
    langButton: 'انكليزي',
    home: "الصفحة الرئيسة",
    works: "أعمالنا",
    about: "حول شركتنا",
    services: "خدماتنا",
    client: "عملائنا",
    blogs: "المدونة",
    contact: "تواصل معنا",
    //work
    work: "أعمالنا",
    subWork: "أختر التصميم المناسب",
    card1: "غرفة الجلوس",
    card2: "غرفة نوم",
    card3: "ممر ",
    card4: "منزل",
    card5: "مكتبة",
    //about
    aboutus: "من نحن؟",
    subabout: "هنا نبذة عن شركتنا ",
    line1: 'منذ تأسيسنا في أوائل عام ٢٠٢٤، التزمنا بتقديم خدمات التصميم في دولة الإمارات العربية المتحدة ودول مجلس التعاون الخليجي كشركة تصميم داخلي وخارجي. على الرغم من أن شركة المدار المتميز شركة ناشئة مقارنةً بشركات التصميم الأخرى في سوق الإمارات العربية المتحدة، إلا أننا نجحنا في كسب ثقة العديد من العملاء من خلال خدماتنا المتنوعة والشاملة.',
    line2: 'من خلال التزامنا بالدقة والجودة العالية في خدمات التصميم لدينا، يمكننا نقل مشروعك إلى المستوى التالي، مستفيدين من خبرتنا ومعرفتنا.',
    designs: "تصاميم مميزة",
    designscontent: "معنا، ستحصل على تصميم فريد بتنسيق وترتيب مميزين",
    price: "سعر مناسب",
    pricecontent: " جودة عالية وحرفية بأسعار تنافسية",
    fast: "خدمة سريعة",
    fastcontent: "نستجيب لطلباتكم على مدار الساعة طوال أيام الأسبوع",
    callus: "اتصل بنا",
    //service
    service: "خدماتنا",
    subservice: "ما توفره شركتنا من خدمات",
    interior: "التصميم الداخلي",
    interiortitle: "غرفة جلوس ، غرفة طعام ، غرفة نوم ، آلخ",
    interiorcontent: "التصميم الداخلي هو فن وعلم تحسين الجزء الداخلي للمبنى",
    exterior: "التصميم الخارجي",
    exteriortitle: "الفلل، الفنادق، الأماكن، المنازل، المطاعم، إلخ",
    exteriorcontent: "التصميم الخارجي هو عملية تصميم المظهر الخارجي",
    landscape: "تصميم المناظر الطبيعية",
    landscapetitle: " الساحات، المسطحات المائية، مواقف السيارات، إلخ",
    landscapecontent: "الجمع بين الطبيعة والثقافة",
    //clients
    clients: "عملاؤنا",
    subclients: "نعمل مع أفضل العملاء",
    //details
    details: "تفاصيل",
    subDetails: " تفاصيل أكثر عن شركتنا",
    de1: "  في شركتنا المدار المتميز ، نؤمن بأن لكل مساحة قصة ترويها، ونُجسّد هذه القصة من خلال تصاميم فريدة ومُصممة خصيصًا.",
    de2: "مع فريقنا المتميز من المهندسين والمصممين، نُحوّل الأفكار إلى واقعٍ مُبهر، بأدق التفاصيل.",
    de3: "",
    de4:"ما يُميّزنا:",
    de5:"فريق عمل موهوب ومحترف، مدفوع بالشغف والإبداع والاهتمام بالتفاصيل.",
    de6:"تنفيذ سريع وفعال للمشاريع دون المساومة على الجودة - نحترم وقتكم.",
    de7:"تصاميم داخلية وخارجية تُعبّر عن ذوقكم الرفيع، سواءً كان عصريًا أو كلاسيكيًا أو أي شيء بينهما.",
    de8:"من المنازل المريحة إلى المعالم التجارية، المدار شريككم الموثوق في التميز في التصميم. دعنا نُحوّل رؤيتكم إلى مساحة ستُحبّونها.",
    de9:" تواصلوا معنا اليوم لنُحوّل تصميم أحلامكم إلى واقع. 📞 ",
    //blogs
    blog: "المدونة",
    subblogs: "آخر الأخبار والمقالات",

  }
};

// استرجاع اللغة من localStorage أو ضبطها على الإنجليزية
let currentLang = localStorage.getItem('lang') || 'en';
applyLanguage(currentLang);

// دالة تبديل اللغة
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('lang', currentLang);
  applyLanguage(currentLang);
}

// دالة لتطبيق اللغة على الصفحة
function applyLanguage(lang) {
  langButton.textContent = translations[lang].langButton;
  home.textContent = translations[lang].home;
  works.textContent = translations[lang].works;
  about.textContent = translations[lang].about;
  services.textContent = translations[lang].services;
  client.textContent = translations[lang].client;
  blogs.textContent = translations[lang].blogs;
  contact.textContent = translations[lang].contact;
  work.textContent = translations[lang].work;
  subWork.textContent = translations[lang].subWork;
  card1.textContent = translations[lang].card1;
  card2.textContent = translations[lang].card2;
  card3.textContent = translations[lang].card3;
  card4.textContent = translations[lang].card4;
  card5.textContent = translations[lang].card5;
  aboutus.textContent = translations[lang].aboutus;
  subabout.textContent = translations[lang].subabout;
  aboutcontent.innerHTML = `${translations[lang].line1}<br/> <br/>${translations[lang].line2}`;
  designs.textContent = translations[lang].designs;
  designscontent.textContent = translations[lang].designscontent;
  price.textContent = translations[lang].price;
  pricecontent.textContent = translations[lang].pricecontent;
  fast.textContent = translations[lang].fast;
  fastcontent.textContent = translations[lang].fastcontent;
  callus.textContent = translations[lang].callus;
  service.textContent = translations[lang].service;
  subservice.textContent = translations[lang].subservice;
  interior.textContent = translations[lang].interior;
  interiortitle.textContent = translations[lang].interiortitle;
  interiorcontent.textContent = translations[lang].interiorcontent;
  exterior.textContent = translations[lang].exterior;
  exteriortitle.textContent = translations[lang].exteriortitle;
  exteriorcontent.textContent = translations[lang].exteriorcontent;
  landscape.textContent = translations[lang].landscape;
  landscapetitle.textContent = translations[lang].landscapetitle;
  landscapecontent.textContent = translations[lang].landscapecontent;
  clients.textContent = translations[lang].clients;
  subclients.textContent = translations[lang].subclients;
  details.textContent = translations[lang].details;
  subDetails.textContent = translations[lang].subDetails;
  detailscontent.innerHTML = `${translations[lang].de1}<br/>
                                 ${translations[lang].de2}<br/>
                                ${translations[lang].de3}<br/><br/>
                                ${translations[lang].de4}<br/>
                                ${translations[lang].de5}<br/>
                                ${translations[lang].de6}<br/>
                                ${translations[lang].de7}<br/><br/>
                                 ${translations[lang].de8}<br/><br/>
                                  ${translations[lang].de9}<br/>


  `
  blog.textContent = translations[lang].blog;
  subblogs.textContent = translations[lang].subblogs;

  if (lang === 'ar') {
    body.classList.add('rtl');
    body.classList.add('arabicFont')
    document.documentElement.lang = 'ar';
  } else {
    body.classList.remove('rtl');
      body.classList.remove('arabicFont')
    document.documentElement.lang = 'en';
  }
}