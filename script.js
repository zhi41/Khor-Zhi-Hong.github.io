(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeBtn");
  const year = document.getElementById("year");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("nav-links");

  // footer year
  year.textContent = new Date().getFullYear();

  // theme: default to system, but persist once toggled
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);

  function currentTheme() {
    return root.getAttribute("data-theme") || "dark";
  }
  function toggleTheme() {
    const next = currentTheme() === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }
  btn?.addEventListener("click", toggleTheme);

  // mobile nav
  navToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // close nav when clicking a link (mobile)
  navLinks?.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.tagName === "A") {
      navLinks.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });
})();
