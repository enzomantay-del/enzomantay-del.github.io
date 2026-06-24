// ===========================
// TRANSLATIONS
// ===========================
const translations = {
  en: {
    nav_about:    "About",
    nav_projects: "Projects",
    nav_skills:   "Skills",
    nav_contact:  "Contact",
    hero_label:   "Full Stack Developer & Tourism Director",
    hero_sub:     "I build production web systems for municipalities, travel agencies and local businesses — from admin panels and databases to WhatsApp integrations and public-facing sites.",
    hero_btn1:    "View Projects",
    hero_btn2:    "Get in Touch",
    about_tag:    "About me",
    about_title:  "Where tourism meets technology",
    about_p1:     "I currently serve as <strong>Municipal Tourism Director of Jardín América</strong>, Misiones, Argentina — a role I approach not just as a public administrator, but as someone who believes that technology is the most powerful tool for transforming how destinations are managed and experienced.",
    about_p2:     "I hold a <strong>Bachelor's degree in Tourism</strong> and a <strong>Diploma in Smart Tourism Destination Management</strong> from UNaM. At some point, I realized the digital tools I needed didn't exist — so I built them myself.",
    about_p3:     "Today I develop full stack web applications with real-world impact — municipal portals, tourism management systems, WhatsApp campaign platforms and e-commerce. Flagship projects include <strong>TuriGest JA</strong>, the <strong>Municipal Portal</strong> and <strong>Olalá Viajes</strong>, all built and deployed by me.",
    about_p4:     "I'm open to <strong>remote freelance projects</strong> and developer roles in web development.",
    stat1:        "Years in Tourism",
    stat2:        "Projects Deployed",
    stat3:        "Live Production Systems",
    stat4:        "University Degrees",
    projects_tag:   "Work",
    projects_title: "Featured Projects",
    badge_live:   "Live Project",
    proj1_desc:   "Municipal tourism management system in production. Visitor registration, events, hotel occupancy analytics, WhatsApp integration and automated monthly reports.",
    proj2_desc:   "Municipal campaign platform: neighborhood contacts, public form for community leaders, mass WhatsApp sends and delivery/read metrics panel.",
    proj3_desc:   "Travel agency management system: clients, multi-service bookings, payments, PDF receipts and public tour catalog with WhatsApp inquiries.",
    proj4_desc:   "Official municipal portal: news by department, public works maps, citizen reports, admin panels, push notifications and internal staff agenda.",
    proj5_desc:   "Commercial event platform: merchant registration, offer submission with admin approval, public deals site and tourism circuit sign-ups.",
    proj6_desc:   "E-commerce with product catalog, shopping cart and admin panel for inventory and order management.",
    proj7_desc:   "Tourism website showcasing local destinations and attractions, linked from the municipal portal.",
    proj8_desc:   "B2B commercial proposal and e-commerce demo for a regional hardware store — catalog, cart and staged pricing plans.",
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
    contact_desc: "Available for remote freelance and developer roles. Municipal, tourism and e-commerce projects.",
  },
  es: {
    nav_about:    "Sobre mí",
    nav_projects: "Proyectos",
    nav_skills:   "Habilidades",
    nav_contact:  "Contacto",
    hero_label:   "Desarrollador Full Stack & Director de Turismo",
    hero_sub:     "Construyo sistemas web en producción para municipios, agencias de viajes y comercios — paneles admin, bases de datos, integraciones WhatsApp y sitios públicos.",
    hero_btn1:    "Ver Proyectos",
    hero_btn2:    "Contactar",
    about_tag:    "Sobre mí",
    about_title:  "Donde el turismo se encuentra con la tecnología",
    about_p1:     "Actualmente me desempeño como <strong>Director de Turismo Municipal de Jardín América</strong>, Misiones, Argentina — un rol que asumo no solo como administrador público, sino como alguien que cree que la tecnología es la herramienta más poderosa para transformar la gestión y experiencia de los destinos.",
    about_p2:     "Soy <strong>Licenciado en Turismo</strong> y tengo una <strong>Diplomatura en Gestión de Destinos Turísticos Inteligentes</strong> por la UNaM. En algún momento, me di cuenta de que las herramientas digitales que necesitaba no existían — entonces las construí yo mismo.",
    about_p3:     "Hoy desarrollo aplicaciones web full stack con impacto real — portales municipales, sistemas turísticos, plataformas de campaña WhatsApp y e-commerce. Proyectos insignia: <strong>TuriGest JA</strong>, el <strong>Portal Municipal</strong> y <strong>Olalá Viajes</strong>, todos desarrollados y desplegados por mí.",
    about_p4:     "Estoy abierto a <strong>proyectos freelance remotos</strong> y roles de desarrollador web.",
    stat1:        "Años en Turismo",
    stat2:        "Proyectos Desplegados",
    stat3:        "Sistemas en Producción",
    stat4:        "Títulos Universitarios",
    projects_tag:   "Trabajos",
    projects_title: "Proyectos Destacados",
    badge_live:   "En Producción",
    proj1_desc:   "Sistema de gestión turística municipal en producción. Registro de visitantes, eventos, ocupación hotelera, WhatsApp e informes mensuales automatizados.",
    proj2_desc:   "Plataforma municipal de campaña: contactos por barrio, formulario público para referentes, envíos masivos WhatsApp y panel de métricas de entrega/lectura.",
    proj3_desc:   "Sistema para agencia de viajes: clientes, reservas multi-servicio, cobros, recibos PDF y catálogo web público con consultas por WhatsApp.",
    proj4_desc:   "Portal municipal oficial: novedades por área, mapas de obras, reportes ciudadanos, paneles admin, notificaciones push y agenda interna del staff.",
    proj5_desc:   "Plataforma del evento comercial: registro de comerciantes, carga de ofertas con aprobación admin, sitio público de promociones e inscripción a circuitos turísticos.",
    proj6_desc:   "E-commerce con catálogo, carrito de compras y panel admin para inventario y pedidos.",
    proj7_desc:   "Sitio turístico de la ciudad con destinos y atractivos, vinculado al portal municipal.",
    proj8_desc:   "Propuesta comercial B2B y demo de tienda online para ferretería regional — catálogo, carrito y planes de precios.",
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
    contact_desc: "Disponible para freelance remoto y roles de desarrollador. Proyectos municipales, turismo y e-commerce.",
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
