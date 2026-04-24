// Shared header source for all static pages.
const headerRoot = document.getElementById("site-header");
const page = document.body.dataset.page;
const lang = document.body.dataset.lang;
const routes = {
  en: {
    home: "./index.html",
    projects: "./projects.html",
    resume: "./resume.html",
  },
  jp: {
    home: "./index-jp.html",
    projects: "./projects-jp.html",
    resume: "./resume-jp.html",
  },
};
const contactLinks = {
  x: "https://x.com/4dheHUxEurAEhQg",
  email: "mailto:work@jumpeikato.com",
  linkedin: "https://www.linkedin.com/in/jumpeikato/",
};
const xIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 4.5l14 15"></path>
    <path d="M18.6 4.5 13 10.9"></path>
    <path d="M11 13.1 5.4 19.5"></path>
  </svg>
`;
const emailIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3.5" y="6.5" width="17" height="11" rx="2"></rect>
    <path d="M4.5 8l7.5 5.5L19.5 8"></path>
  </svg>
`;
const linkedinIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="3"></rect>
    <circle cx="8.8" cy="9" r="0.9" fill="currentColor" stroke="none"></circle>
    <path d="M8.8 11.8v4.2"></path>
    <path d="M12.5 16v-4.2"></path>
    <path d="M12.5 13.2c.6-.9 1.5-1.4 2.5-1.4 1.7 0 2.5 1.2 2.5 3v4.2"></path>
  </svg>
`;
const socialLinks = `
  <div class="social-links" aria-label="Contact links">
    <a class="icon-link" href="${contactLinks.x}" target="_blank" rel="noreferrer" aria-label="X">
      ${xIcon}
    </a>
    <a class="icon-link" href="${contactLinks.email}" aria-label="Email">
      ${emailIcon}
    </a>
    <a class="icon-link" href="${contactLinks.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn">
      ${linkedinIcon}
    </a>
  </div>
`;

if (headerRoot && routes[lang] && routes.en[page] && routes.jp[page]) {
  const pageLinks = routes[lang];
  const homeCurrent = page === "home" ? ' aria-current="page"' : "";
  const projectsCurrent = page === "projects" ? ' aria-current="page"' : "";
  const resumeCurrent = page === "resume" ? ' aria-current="page"' : "";
  const enCurrent = lang === "en" ? ' aria-current="page"' : "";
  const jpCurrent = lang === "jp" ? ' aria-current="page"' : "";

  headerRoot.innerHTML = `
    <header class="site-header">
      <div class="site-header-inner">
        <nav class="nav nav-left">
          <a href="${pageLinks.home}"${homeCurrent}>Home</a>
          <a href="${pageLinks.projects}"${projectsCurrent}>Analytics Project</a>
        </nav>

        <a class="brand" href="${pageLinks.home}">Jumpei Kato</a>

        <div class="header-links">
          <div class="lang-toggle" aria-label="Language switcher">
            <a href="${routes.en[page]}"${enCurrent}>EN</a>
            <span>/</span>
            <a href="${routes.jp[page]}"${jpCurrent}>JP</a>
          </div>
          <a href="${pageLinks.resume}"${resumeCurrent}>Resume</a>
          ${socialLinks}
        </div>

        <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="site-nav">Menu</button>
      </div>

      <nav class="nav nav-mobile" id="site-nav">
        <a href="${pageLinks.home}"${homeCurrent}>Home</a>
        <a href="${pageLinks.projects}"${projectsCurrent}>Analytics Project</a>
        <div class="lang-toggle" aria-label="Language switcher">
          <a href="${routes.en[page]}"${enCurrent}>EN</a>
          <span>/</span>
          <a href="${routes.jp[page]}"${jpCurrent}>JP</a>
        </div>
        <a href="${pageLinks.resume}"${resumeCurrent}>Resume</a>
        ${socialLinks}
      </nav>
    </header>
  `;
}
