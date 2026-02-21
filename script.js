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
    return root.getAttribute("data-theme") || "light";
  }
  function toggleTheme() {
    const next = currentTheme() === "dark" ? "light" : "dark";
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
