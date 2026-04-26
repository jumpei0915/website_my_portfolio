// Shared header source for all static pages.
const headerRoot = document.getElementById("site-header");
const page = document.body.dataset.page;
const lang = document.body.dataset.lang;
const routes = {
  en: {
    home: "./",
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
    <path d="M18.9 2h3.7l-8.1 9.3L24 22h-7.4l-5.8-7.6L4.2 22H.5l8.7-10L0 2h7.6l5.2 6.9L18.9 2Zm-1.3 18.1h2L6.5 3.8H4.4l13.2 16.3Z"></path>
  </svg>
`;
const emailIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 6.7c0-.9.7-1.7 1.7-1.7h14.6c.9 0 1.7.7 1.7 1.7v.4L12 13 3 7.1v-.4Zm0 2.6 8.5 5.5c.3.2.7.2 1 0L21 9.3v8c0 .9-.7 1.7-1.7 1.7H4.7c-.9 0-1.7-.7-1.7-1.7v-8Z"></path>
  </svg>
`;
const linkedinIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.7 3H4.3C3.6 3 3 3.6 3 4.3v15.4c0 .7.6 1.3 1.3 1.3h15.4c.7 0 1.3-.6 1.3-1.3V4.3c0-.7-.6-1.3-1.3-1.3ZM8.3 18.1H5.7V9.8h2.6v8.3ZM7 8.7c-.8 0-1.5-.7-1.5-1.5S6.2 5.7 7 5.7s1.5.7 1.5 1.5S7.8 8.7 7 8.7Zm11.1 9.4h-2.6V14c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3.9-.1.2-.1.4-.1.6v4.3h-2.6V9.8h2.6v1.1c.3-.5 1-1.3 2.4-1.3 1.8 0 3 1.2 3 3.6v4.9h-.1Z"></path>
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
