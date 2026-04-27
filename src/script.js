const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
const year = document.getElementById("year");

const cleanPathMap = {
  "/index.html": "/",
  "/index-jp.html": "/jp",
  "/projects.html": "/projects",
  "/projects-jp.html": "/projects-jp",
  "/resume.html": "/resume",
  "/resume-jp.html": "/resume-jp",
};
const cleanPath = cleanPathMap[window.location.pathname];

if (cleanPath) {
  window.history.replaceState(null, "", `${cleanPath}${window.location.search}${window.location.hash}`);
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
