// ===========================
// TRANSLATIONS
// ===========================
const translations = {
  en: {
    nav_about:    "About",
    nav_projects: "Projects",
    nav_skills:   "Skills",
    nav_contact:  "Contact",
    hero_label:   "Tourism Director & Full Stack Developer",
    hero_sub:     "Bridging 20+ years of tourism expertise with modern web development. Building real digital solutions for the tourism industry.",
    hero_btn1:    "View Projects",
    hero_btn2:    "Get in Touch",
    about_tag:    "About me",
    about_title:  "Where tourism meets technology",
    about_p1:     "I currently serve as <strong>Municipal Tourism Director of Jardín América</strong>, Misiones, Argentina — a role I approach not just as a public administrator, but as someone who believes that technology is the most powerful tool for transforming how destinations are managed and experienced.",
    about_p2:     "I hold a <strong>Bachelor's degree in Tourism</strong> and a <strong>Diploma in Smart Tourism Destination Management</strong> from UNaM. At some point, I realized the digital tools I needed didn't exist — so I built them myself.",
    about_p3:     "Today I develop full stack web applications with a focus on real-world impact in the tourism sector. My flagship project, <strong>TuriGest JA</strong>, is a municipal tourism management system currently live and in use in Jardín América.",
    about_p4:     "I'm open to <strong>remote freelance projects</strong> at the intersection of tourism and web development.",
    stat1:        "Years in Tourism",
    stat2:        "Projects Deployed",
    stat3:        "Live Municipal System",
    stat4:        "University Degrees",
    projects_tag:   "Work",
    projects_title: "Featured Projects",
    badge_live:   "Live Project",
    proj1_desc:   "Municipal tourism management system currently in production for Jardín América. Handles visitor registration, event management, hotel occupancy analytics, WhatsApp integration, and automated monthly reports.",
    proj2_desc:   "Full e-commerce platform with product catalog, shopping cart, and a complete admin panel for inventory and order management.",
    proj3_desc:   "Travel agency website featuring a tour package catalog and a booking system built with Python and Django.",
    proj4_desc:   "Static promotional website showcasing the tourist destinations and attractions of Jardín América, Misiones.",
    btn_live:     "View Live",
    skills_tag:   "Expertise",
    skills_title: "Skills",
    skill_db:     "Databases & Cloud",
    skill_tourism:"Tourism",
    sk_t1:        "Destination Management",
    sk_t2:        "Smart Tourism",
    sk_t3:        "Public Administration",
    sk_t4:        "Tourism Planning",
    skill_biz:    "Business",
    sk_b1:        "Entrepreneurship",
    sk_b2:        "Teaching",
    sk_b3:        "Project Management",
    contact_tag:  "Contact",
    contact_title:"Let's work together",
    contact_desc: "Available for remote freelance projects in tourism technology.",
  },
  es: {
    nav_about:    "Sobre mí",
    nav_projects: "Proyectos",
    nav_skills:   "Habilidades",
    nav_contact:  "Contacto",
    hero_label:   "Director de Turismo & Desarrollador Full Stack",
    hero_sub:     "Combinando más de 20 años de experiencia en turismo con desarrollo web moderno. Construyendo soluciones digitales reales para la industria turística.",
    hero_btn1:    "Ver Proyectos",
    hero_btn2:    "Contactar",
    about_tag:    "Sobre mí",
    about_title:  "Donde el turismo se encuentra con la tecnología",
    about_p1:     "Actualmente me desempeño como <strong>Director de Turismo Municipal de Jardín América</strong>, Misiones, Argentina — un rol que asumo no solo como administrador público, sino como alguien que cree que la tecnología es la herramienta más poderosa para transformar la gestión y experiencia de los destinos.",
    about_p2:     "Soy <strong>Licenciado en Turismo</strong> y tengo una <strong>Diplomatura en Gestión de Destinos Turísticos Inteligentes</strong> por la UNaM. En algún momento, me di cuenta de que las herramientas digitales que necesitaba no existían — entonces las construí yo mismo.",
    about_p3:     "Hoy desarrollo aplicaciones web full stack con foco en el impacto real en el sector turístico. Mi proyecto insignia, <strong>TuriGest JA</strong>, es un sistema de gestión turística municipal actualmente en producción en Jardín América.",
    about_p4:     "Estoy abierto a <strong>proyectos freelance remotos</strong> en la intersección entre turismo y desarrollo web.",
    stat1:        "Años en Turismo",
    stat2:        "Proyectos Desplegados",
    stat3:        "Sistema Municipal en Producción",
    stat4:        "Títulos Universitarios",
    projects_tag:   "Trabajos",
    projects_title: "Proyectos Destacados",
    badge_live:   "En Producción",
    proj1_desc:   "Sistema de gestión turística municipal en producción para Jardín América. Gestiona registro de visitantes, eventos, análisis de ocupación hotelera, integración con WhatsApp e informes mensuales automatizados.",
    proj2_desc:   "Plataforma de e-commerce con catálogo de productos, carrito de compras y panel administrativo completo para gestión de inventario y pedidos.",
    proj3_desc:   "Sitio web para agencia de viajes con catálogo de paquetes turísticos y sistema de reservas desarrollado con Python y Django.",
    proj4_desc:   "Sitio web estático de promoción de los destinos y atractivos turísticos de Jardín América, Misiones.",
    btn_live:     "Ver en Vivo",
    skills_tag:   "Experiencia",
    skills_title: "Habilidades",
    skill_db:     "Bases de Datos & Nube",
    skill_tourism:"Turismo",
    sk_t1:        "Gestión de Destinos",
    sk_t2:        "Turismo Inteligente",
    sk_t3:        "Administración Pública",
    sk_t4:        "Planificación Turística",
    skill_biz:    "Negocios",
    sk_b1:        "Emprendimiento",
    sk_b2:        "Docencia",
    sk_b3:        "Gestión de Proyectos",
    contact_tag:  "Contacto",
    contact_title:"Trabajemos juntos",
    contact_desc: "Disponible para proyectos freelance remotos en tecnología turística.",
  }
};

// ===========================
// LANGUAGE SWITCH
// ===========================
let currentLang = 'en';
const toggleBtn = document.getElementById('lang-toggle');

function applyLanguage(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  toggleBtn.textContent = lang === 'en' ? 'ES' : 'EN';
  currentLang = lang;
}

toggleBtn.addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'es' : 'en');
});

// ===========================
// NAVBAR SHADOW ON SCROLL
// ===========================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 40
    ? '0 2px 20px rgba(0,0,0,0.3)'
    : 'none';
});

// ===========================
// FADE-IN ON SCROLL
// ===========================
const style = document.createElement('style');
style.textContent = `
  .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .stat, .skills-group, .about-text, .about-stats').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
