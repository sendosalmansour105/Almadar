'use strict';

/** ================== NAVBAR TOGGLE ================== */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");
if (navToggleBtn && header) {
  navToggleBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    header.classList.toggle("active");
  });
}

/** ================== GO TOP BTN ================== */
const goTopBtn = document.querySelector("[data-go-top]");
if (goTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 500) goTopBtn.classList.add("active");
    else goTopBtn.classList.remove("active");
  });
}

// counters.............................................................................
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters")
let activated = false;
window.addEventListener("scroll", () => {
  if (pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false) {
    counters.forEach(counter => {
      counter.innerHTML = 0;
      let count = 0;
      function updateCount() {
        const target = parseInt(counter.dataset.count);
        if (count < target) {
          count++;
          counter.innerHTML = count;
          setTimeout(updateCount, 10)
        } else {
          counter.innerHTML = target;
        }
      }
      updateCount();
      activated = true;
    });

  }
  else if (pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true) {
    counters.forEach(counter => {
      counter.innerText = 0;
    });
    activated = false;
  }
});

/** ================== INTERSECTION OBSERVER ================== */
const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show-items');
    else entry.target.classList.remove('show-items');
  });
});
document.querySelectorAll('.scroll-scale').forEach((el) => observe.observe(el));

/** ================== HELPERS ================== */
const setText = (el, val) => { if (el) el.textContent = val; };
const setHTML = (el, val) => { if (el) el.innerHTML = val; };

/** ================== SELECT ELEMENTS ================== */
const home = document.getElementById('navbar-Home');
const works = document.getElementById('navbar-work');
const about = document.getElementById('navbar-about');
const services = document.getElementById('navbar-services');
const client = document.getElementById('navbar-clients');
const blogs = document.getElementById('navbar-blogs');
const contact = document.getElementById('navbar-contact');

// works
const work = document.getElementById('title-work');
const subWork = document.getElementById('subWork');
const card1 = document.getElementById('card-title-c1');
const card2 = document.getElementById('card-title-c2');
const card3 = document.getElementById('card-title-c3');
const card4 = document.getElementById('card-title-c4');
const card5 = document.getElementById('card-title-c5');
const Viewallproject = document.getElementById('Viewallproject');
const GoToInstgram = document.getElementById('GoToInstgram');
// about
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
const projectcompleted = document.getElementById('projectcompleted');
const clientsatisfied = document.getElementById('clientsatisfied');
const customersatisfaction = document.getElementById('customersatisfaction');
// service
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

// clients
const clients = document.getElementById('clients');
const subclients = document.getElementById('subclients');

// details
const details = document.getElementById('details');
const subDetails = document.getElementById('subDetails');
const detailscontent = document.getElementById('detailscontent');

// blogs
const blog = document.getElementById('blogs');
const subblogs = document.getElementById('subblogs');
const blogscardname1 = document.getElementById('author-name1');
const blogscardtitle1 = document.getElementById('author-title1');
const blogscardcontent1 = document.getElementById('author-content1');
const blogscardmore1 = document.getElementById('author-more1');
const blogscardname2 = document.getElementById('author-name2');
const blogscardtitle2 = document.getElementById('author-title2');
const blogscardcontent2 = document.getElementById('author-content2');
const blogscardmore2 = document.getElementById('author-more2');
const blogscardname3 = document.getElementById('author-name3');
const blogscardtitle3 = document.getElementById('author-title3');
const blogscardcontent3 = document.getElementById('author-content3');
const blogscardmore3 = document.getElementById('author-more3');
const blogscardname4 = document.getElementById('author-name4');
const blogscardtitle4 = document.getElementById('author-title4');
const blogscardcontent4 = document.getElementById('author-content4');
const blogscardmore4 = document.getElementById('author-more4');
const blogscardname5 = document.getElementById('author-name5');
const blogscardtitle5 = document.getElementById('author-title5');
const blogscardcontent5 = document.getElementById('author-content5');
const blogscardmore5 = document.getElementById('author-more5');
const blogscardname6 = document.getElementById('author-name6');
const blogscardtitle6 = document.getElementById('author-title6');
const blogscardcontent6 = document.getElementById('author-content6');
const blogscardmore6 = document.getElementById('author-more6');
//footer//
const footertext = document.getElementById('footertext')
const footer_links = document.getElementById('footer_links')
const footer_home = document.getElementById('footer_home')
const footer_works = document.getElementById('footer_works')
const footer_aboutus = document.getElementById('footer_aboutus')
const footer_services = document.getElementById('footer_services')
const footer_clients = document.getElementById('footer_clients')
const footer_contact = document.getElementById('footer_contact')
const footer_address = document.getElementById('footer_address')
const number = document.getElementById('number')

const langButton = document.getElementById('langBtn');
const body = document.body;

/** ================== TRANSLATIONS ================== */
const translations = {
  en: {
    langButton: 'عربي',
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
    card2: "Kitchen",
    card3: "Walkways",
    card4: "House",
    card5: "Library",
    Viewallproject: "View All Projects",
    GoToInstgram: "Go To Instgram",
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
    projectcompleted: "Projects Completed",
    clientsatisfied: "Clients",
    customersatisfaction: "Customer satisfaction",
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
    de4: " What sets us apart:",
    de5: "   A talented, professional team driven by passion, creativity, and attention to detail.",
    de6: "   Fast and efficient project delivery without compromising on quality — we respect your time.",
    de7: " Interior and exterior designs that reflect your style, whether modern, classic, or anything in between.<br>",
    de8: "From cozy homes to commercial landmarks, Al-Madar is your trusted partner in design excellence. Let us turn your vision into a space you’ll love.",
    de9: " 📞 Contact us today and let’s bring your dream design to life!",
    //blogs
    blog: "From The Blog Post",
    subblogs: "Latest News & Articles",
    blogscardname1: "Jony bristow",
    blogscardtitle1: "Admin",
    blogscardcontent1: "A unique harmony of elegance and comfort, captured in this modern interior design with its soft tones and refined details.",
    blogscardmore1: "Read More",
    blogscardname2: "Jony bristow",
    blogscardtitle2: "Admin",
    blogscardcontent2: "A unique harmony of elegance and comfort, captured in this modern interior design with its soft tones and refined details.",
    blogscardmore2: "Read More",
    blogscardname3: "Jony bristow",
    blogscardtitle3: "Admin",
    blogscardcontent3: "A unique harmony of elegance and comfort, captured in this modern interior design with its soft tones and refined details.",
    blogscardmore3: "Read More",
    blogscardname4: "Jony bristow",
    blogscardtitle4: "Admin",
    blogscardcontent4: "A unique harmony of elegance and comfort, captured in this modern interior design with its soft tones and refined details.",
    blogscardmore4: "Read More",
    blogscardname5: "Jony bristow",
    blogscardtitle5: "Admin",
    blogscardcontent5: "A unique harmony of elegance and comfort, captured in this modern interior design with its soft tones and refined details.",
    blogscardmore5: "Read More",
    blogscardname6: "Jony bristow",
    blogscardtitle6: "Admin",
    blogscardcontent6: "A unique harmony of elegance and comfort, captured in this modern interior design with its soft tones and refined details.",
    blogscardmore6: "Read More",
    //footer
    footertext: "Our designs save you time and give you convenience.",
    footer_links: "Links",
    footer_home: "Home",
    footer_works: "Works",
    footer_aboutus: "About us",
    footer_services: "Services",
    footer_clients: "Clients",
    footer_contact: "Counact",
    footer_address: "United Arab Emirates, Dubai",
number:"+971508853854",

  },
  ar: {
    langButton: 'English',
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
    card2: "مطبخ",
    card3: "ممر ",
    card4: "منزل",
    card5: "مكتبة",
    Viewallproject: "تصفح مشاريعنا",
    GoToInstgram: "تواصل على انستغرام",
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
    projectcompleted: "المشاريع المنجزة",
    clientsatisfied: "العملاء",
    customersatisfaction: "رضا العملاء",
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
    de4: "ما يُميّزنا:",
    de5: "فريق عمل موهوب ومحترف، مدفوع بالشغف والإبداع والاهتمام بالتفاصيل.",
    de6: "تنفيذ سريع وفعال للمشاريع دون المساومة على الجودة - نحترم وقتكم.",
    de7: "تصاميم داخلية وخارجية تُعبّر عن ذوقكم الرفيع، سواءً كان عصريًا أو كلاسيكيًا أو أي شيء بينهما.",
    de8: "من المنازل المريحة إلى المعالم التجارية، المدار شريككم الموثوق في التميز في التصميم. دعنا نُحوّل رؤيتكم إلى مساحة ستُحبّونها.",
    de9: " تواصلوا معنا اليوم لنُحوّل تصميم أحلامكم إلى واقع. 📞 ",
    //blogs
    blog: "المدونة",
    subblogs: "آخر الأخبار والمقالات",
    blogscardname1: "أحمد محمد",
    blogscardtitle1: "الأدمن",
    blogscardcontent1: "تناغم فريد بين الأناقة والراحة، يتجسد في هذا التصميم الداخلي العصري بألوانه الناعمة وتفاصيله الراقية.",
    blogscardmore1: "تفاصيل أكثر ",
    blogscardname2: "أحمد محمد",
    blogscardtitle2: "الأدمن",
    blogscardcontent2: "تناغم فريد بين الأناقة والراحة، يتجسد في هذا التصميم الداخلي العصري بألوانه الناعمة وتفاصيله الراقية.",
    blogscardmore2: "تفاصيل أكثر ",
    blogscardname3: "أحمد محمد",
    blogscardtitle3: "الأدمن",
    blogscardcontent3: "تناغم فريد بين الأناقة والراحة، يتجسد في هذا التصميم الداخلي العصري بألوانه الناعمة وتفاصيله الراقية.",
    blogscardmore3: "تفاصيل أكثر ",
    blogscardname4: "أحمد محمد",
    blogscardtitle4: "الأدمن",
    blogscardcontent4: "تناغم فريد بين الأناقة والراحة، يتجسد في هذا التصميم الداخلي العصري بألوانه الناعمة وتفاصيله الراقية.",
    blogscardmore4: "تفاصيل أكثر ",
    blogscardname5: "أحمد محمد",
    blogscardtitle5: "الأدمن",
    blogscardcontent5: "تناغم فريد بين الأناقة والراحة، يتجسد في هذا التصميم الداخلي العصري بألوانه الناعمة وتفاصيله الراقية.",
    blogscardmore5: "تفاصيل أكثر ",
    blogscardname6: "أحمد محمد",
    blogscardtitle6: "الأدمن",
    blogscardcontent6: "تناغم فريد بين الأناقة والراحة، يتجسد في هذا التصميم الداخلي العصري بألوانه الناعمة وتفاصيله الراقية.",
  blogscardmore6: "تفاصيل أكثر ",
    //footer
    footertext: " تصاميمنا توفر لك الوقت والراحة",
    footer_links: "روابط",
    footer_home: "الصفحة الرئيسة",
    footer_works: "أعمالنا",
    footer_aboutus: "حول شركتنا",
    footer_services: "خدماتنا",
    footer_clients: "عملاؤنا",
    footer_contact: "تواصل معنا عبر",
    footer_address: "الامارات العربية , دبي",
number:"971508853854+"
  }
};

/** ================== LANGUAGE APPLY ================== */
let currentLang = localStorage.getItem('lang') || 'en';
applyLanguage(currentLang);

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('lang', currentLang);
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const T = translations[lang];
  if (!T) return;

  if (langButton) setText(langButton, T.langButton);

  setText(home, T.home);
  setText(works, T.works);
  setText(about, T.about);
  setText(services, T.services);
  setText(client, T.client);
  setText(blogs, T.blogs);
  setText(contact, T.contact);

  setText(work, T.work);
  setText(subWork, T.subWork);
  setText(card1, T.card1);
  setText(card2, T.card2);
  setText(card3, T.card3);
  setText(card4, T.card4);
  setText(card5, T.card5);
  setText(Viewallproject, T.Viewallproject);
  setText(GoToInstgram, T.GoToInstgram);
  setText(projectcompleted, T.projectcompleted);
  setText(clientsatisfied, T.clientsatisfied);
  setText(customersatisfaction, T.customersatisfaction);
  setText(aboutus, T.aboutus);
  setText(subabout, T.subabout);
  setHTML(aboutcontent, `${T.line1}<br/><br/>${T.line2}`);
  setText(designs, T.designs);
  setText(designscontent, T.designscontent);
  setText(price, T.price);
  setText(pricecontent, T.pricecontent);
  setText(fast, T.fast);
  setText(fastcontent, T.fastcontent);
  setText(callus, T.callus);

  setText(service, T.service);
  setText(subservice, T.subservice);
  setText(interior, T.interior);
  setText(interiortitle, T.interiortitle);
  setText(interiorcontent, T.interiorcontent);
  setText(exterior, T.exterior);
  setText(exteriortitle, T.exteriortitle);
  setText(exteriorcontent, T.exteriorcontent);
  setText(landscape, T.landscape);
  setText(landscapetitle, T.landscapetitle);
  setText(landscapecontent, T.landscapecontent);

  setText(clients, T.clients);
  setText(subclients, T.subclients);

  setText(details, T.details);
  setText(subDetails, T.subDetails);
  setHTML(detailscontent, `${T.de1}<br/>${T.de2}<br/>${T.de3}<br/><br/>${T.de4}<br/>${T.de5}<br/>${T.de6}<br/>${T.de7}<br/><br/>${T.de8}<br/><br/>${T.de9}<br/>`);

  setText(blog, T.blog);
  setText(subblogs, T.subblogs);

  setText(blogscardname1, T.blogscardname1);
  setText(blogscardtitle1, T.blogscardtitle1);
  setText(blogscardcontent1, T.blogscardcontent1);
  setText(blogscardmore1, T.blogscardmore1);

  setText(blogscardname2, T.blogscardname2);
  setText(blogscardtitle2, T.blogscardtitle2);
  setText(blogscardcontent2, T.blogscardcontent2);
  setText(blogscardmore2, T.blogscardmore2);

  setText(blogscardname3, T.blogscardname3);
  setText(blogscardtitle3, T.blogscardtitle3);
  setText(blogscardcontent3, T.blogscardcontent3);
  setText(blogscardmore3, T.blogscardmore3);

  setText(blogscardname4, T.blogscardname4);
  setText(blogscardtitle4, T.blogscardtitle4);
  setText(blogscardcontent4, T.blogscardcontent4);
  setText(blogscardmore4, T.blogscardmore4);

  setText(blogscardname5, T.blogscardname5);
  setText(blogscardtitle5, T.blogscardtitle5);
  setText(blogscardcontent5, T.blogscardcontent5);
  setText(blogscardmore5, T.blogscardmore5);

  setText(blogscardname6, T.blogscardname6);
  setText(blogscardtitle6, T.blogscardtitle6);
  setText(blogscardcontent6, T.blogscardcontent6);
  setText(blogscardmore6, T.blogscardmore6);

   setText(footertext,T.footertext)
   setText( footer_links,T.footer_links)
   setText(footer_home,T.footer_home)
   setText(footer_works,T.footer_works)
   setText(footer_aboutus,T.footer_aboutus)
   setText(footer_services,T.footer_services)
   setText(footer_clients,T.footer_clients)
   setText(footer_contact,T.footer_contact)
   setText(footer_address,T.footer_address)
   setText(number,T.number)

  // الاتجاه
  document.documentElement.lang = lang;
  body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
      if (lang === 'ar') {
    body.classList.add('rtl', 'arabicFont');
    body.dir = 'rtl';
  } else {
    body.classList.remove('rtl', 'arabicFont');
    body.dir = 'ltr';
  }
}