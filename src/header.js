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
          <a href="mailto:k.jumpei0915@gmail.com">Contact</a>
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
        <a href="mailto:k.jumpei0915@gmail.com">Contact</a>
      </nav>
    </header>
  `;
}
